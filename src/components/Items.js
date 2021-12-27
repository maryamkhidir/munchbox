import { useContext } from 'react';
import { useState, useEffect } from 'react';
import cart1Img from '../assets/images/tag.svg';
import { SvgIcon } from "./Icon.js";
import deleteImg from '../assets/images/delete.svg'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToCartCount, cartItems, removeFromCartCount, removeFromCart } from '../app/cart';


export const ProductItem = ({ name, label, price, image, id }) => {
  return (
    <div className="item">
      <header style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.5) 80%, rgba(0,0,0,.8)), url(${image})` }}>
        <h5>{name}</h5>
        <h6>{label}</h6>
      </header>
      <footer>
        <div className="item-price">
          <SvgIcon
            color='#ED3338'
            hoverColor='#ED3338'
            width='20px'
            height='24px'
            image={cart1Img}
          />
          <label>{price}</label>
        </div>
        <CartCounter id={id} />
      </footer>
    </div>
  )
}

export const CartCounter = ({ id }) => {
  const items = useSelector(cartItems);
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const i = items.find((e) => {
      return e.id === id
    })
    if (i != null) {
      setCounter(i.count)
    } else {
      setCounter(0)
    }
  })
  const addCountAction = () => {
    const i = items.find((e) => {
      return e.id === id
    })
    if (i != null) {
      dispatch(addToCartCount(i.id))
    } else {
      dispatch(addToCart(id))
      dispatch(addToCartCount(id))
    }
  }
  const removeCountAction = () => {
    const i = items.find((e) => {
      return e.id === id
    })
    if (i != null) {
      dispatch(removeFromCartCount(i.id))
    } else {
      return null;
    }
  }
  return (
    <div className='cartCounter'>
      <button onClick={() => removeCountAction()}>-</button>
      <span>{counter}</span>
      <button onClick={addCountAction}>+</button>
    </div>
  )
}

export const CartItem = ({ image, name, label, price, id }) => {
  const items = useSelector(cartItems);
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const i = items.find((e) => {
      return e.id === id
    })
    if (i != null) {
      setCounter(i.count)
    } else {
      setCounter(0)
    }
  })
  return (
    <div className="cart-item">
      <div className="col-1 image" style={{backgroundImage: `url(${image})`}}></div>
      <div className="col-2">
        <span>{name}</span>
        <span>{label}</span>
        <CartCounter id={id} />
      </div>
      <div className="col-3">
        <span className="price">&nbsp;{price * counter}</span>
        <SvgIcon
          image={deleteImg}
          width='30px'
          height='30px'
          color='#ED3338'
          hoverColor='#ED3338'
          onClick={() => dispatch(removeFromCart(id))}
        />
      </div>
    </div>
  )
}