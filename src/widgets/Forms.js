import { useEffect, useState, useReducer } from "react"
import { SvgIcon } from "./Icon"
import { CartCounter, CartItem } from "./Items"
import { cartItems } from "../app/cart";
import { useSelector } from "react-redux";




export const StickyForm = (props) => {
    const items = useSelector(cartItems);
    const [totalPrice, settotalPrice] = useState(0);
    const [page, setpage] = useState(1)
    const [formField, setFormField] = useState({
        name: '',
        email: '',
        phone: '+234',
        address: '',
        message: '',
    })
    function cartSubmitHandler(e) {
        e.preventDefault();
        // const client = twilio();
        const client = require('twilio')();
        const a = process.env.USER_ID
        console.log(a)
    }
    useEffect(() => {
        settotalPrice(0)
        items.forEach((v, i) => settotalPrice(state => state + (v.price * v.count)))
    })
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
                    {items.length === 0 ? <p onClick={cartSubmitHandler}>Your cart is empty</p> : null}
                    <div className='total-price'>
                        <h4>TOTAL</h4>
                        <h4>{totalPrice}.00</h4>
                    </div>
                    <button className="fbtn-1" onClick={() => items.length !== 0 ? setpage(2) : null}>Next</button>
                </article>
                : <article className="col-2">
                    <form onSubmit={cartSubmitHandler}>
                        <input placeholder="Full Name *" value={formField.name} onChange={e => setFormField(prev => ({...prev, name: e.value}))} required type='text' title="Munchbox: Valid Name is required)" pattern="[A-Za-z]+" />
                        <input placeholder="Phone +234 *" value={formField.phone} onChange={e => setFormField(prev => ({...prev, phone: e.value}))} required type='phone' title="Munchbox: Valid Phone number is required" pattern="\+234[0-9]{10}" />
                        <input placeholder="Email *" value={formField.email} onChange={e => setFormField(prev => ({...prev, email: e.value}))} required type='email' title="Munchbox: Valid Email is required" pattern="\w+@\w+\.\w+" />
                        <input placeholder="Delivery Address *" value={formField.address} onChange={e => setFormField(prev => ({...prev, address: e.value}))} required type='text' title="Munchbox: Valid Delivery Address is required" />
                        <input placeholder="Message" value={formField.message} onChange={e => setFormField(prev => ({...prev, message: e.value}))} />
                        <div className='total-price'>
                            <h4>TOTAL</h4>
                            <h4>{totalPrice}.00</h4>
                        </div>
                        <button className="fbtn-1">Process Order</button>
                        <button className="fbtn-2" onClick={() => setpage(1)} type="button">Modify Order</button>
                    </form>
                </article>
            }
        </div>
    )
}