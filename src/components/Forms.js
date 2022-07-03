import { useEffect, useState } from "react"
import { CartItem } from "./Items"
import { cartItems, reset } from "../app/cart";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


export const StickyForm = (props) => {
    const items = useSelector(cartItems);
    const dispatch = useDispatch()
    const [totalPrice, settotalPrice] = useState(0);
    const [page, setpage] = useState(1)
    const [process, setProcess] = useState(false)
    const [showCoupon, setShowCoupon] = useState(false)
    const [formField, setFormField] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        coupon: '',
    })

    useEffect(() => {
        settotalPrice(0)
        items.forEach((v, i) => settotalPrice(state => state + (v.price * v.count)))
    }, [items])

    function cartSubmitHandler(e) {
        e.preventDefault();
        if (items.length !== 0) {
            setProcess(true)
            axios.post('https://munchboxng.herokuapp.com/munchbox/placeorder/',
                {
                    data: JSON.stringify({ user_info: formField, cart: items }),
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Access-Control-Allow-Origin': "*" },
                }
                )
                .then(e => {
                    console.log(e.data.status)
                    if (e.data.status === 1) {
                        dispatch(reset());
                        setpage(1)
                        setProcess(false)
                        alert('Order made successfully, please check your email inbox for your receipt.')
                    } else {
                        setProcess(false)
                        alert('Order cannot be made right now, please check your internet connection.')
                    }
                })
                .catch(e => {
                    console.log(e)
                    setProcess(false)
                })
        } else {
            alert('Your cart is empty')
        }
    }
    
    return (
        <div id='stickyForm' className="orderForm">
            <header onClick={props.onClick}>Order Summary {page}/2 <span>{items.length}</span></header>
            {page === 1 ?
                <article className="col-1">
                    {items.map((item, index) =>
                        <CartItem
                            key={index}
                            id={item.id}
                            name={item.name}
                            label={item.label}
                            price={item.price}
                            image={item.image}
                        />
                    )}
                    {items.length === 0 ? <p>Your cart is empty</p> : null}
                    <div className='total-price'>
                        <h4>TOTAL</h4>
                        <h4>{totalPrice.toFixed(2)}</h4>
                    </div>
                    <button className="fbtn-1" onClick={() => items.length !== 0 ? setpage(2) : null}>Next</button>
                </article>
                : <article className="col-2">
                    <form onSubmit={cartSubmitHandler}>
                        <input placeholder="Full Name *" value={formField.name} onChange={e => setFormField(prev => ({ ...prev, name: e.target.value }))} required type='text' title="Munchbox: Valid Name is required)" pattern="^([A-Za-z ])+$" />
                        <input placeholder="Phone start with 0 *" value={formField.phone} onChange={e => setFormField(prev => ({ ...prev, phone: e.target.value }))} required type='phone' title="Munchbox: Valid Phone number is required" pattern="^0[0-9]{10}$" />
                        <input placeholder="Email *" value={formField.email} onChange={e => setFormField(prev => ({ ...prev, email: e.target.value }))} required type='email' title="Munchbox: Valid Email is required" pattern="\w+@\w+\.\w+" />
                        <input placeholder="Delivery Address *" value={formField.address} onChange={e => setFormField(prev => ({ ...prev, address: e.target.value }))} required type='text' title="Munchbox: Valid Delivery Address is required" />
                        <input placeholder="Message" value={formField.message} onChange={e => setFormField(prev => ({ ...prev, message: e.target.value }))} />
                        <div className="check-box-container">
                            <input id="coupon" type="checkbox" onChange={e => setShowCoupon(prev => !prev)} />
                            <label htmlFor="coupon">I have Coupon</label>
                        </div>
                        {showCoupon && <input placeholder="Coupon" value={formField.coupon} onChange={e => setFormField(prev => ({ ...prev, coupon: e.target.value }))} />}
                        <div className='total-price'>
                            <h4>TOTAL</h4>
                            <h4>{totalPrice.toFixed(2)}</h4>
                        </div>
                        <button className="fbtn-1" type={process ? "button" : "submit"}>Process Order {process? <span className="loading"></span> : null}</button>
                        <button className="fbtn-2" onClick={() => setpage(1)} type="button">Modify Order</button>
                    </form>
                </article>
            }
        </div>
    )
}