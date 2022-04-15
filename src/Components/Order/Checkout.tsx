import React, { useContext, useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import CartContext, { CartObject } from '../../Shared/CartContext'
import './styles.css'
const Checkout = () => {
    const navigate = useNavigate()
    const { cartData, setFormData } = useContext(CartContext)
    const [orderData, setOrderData] = useState({ email: '', firstName: '', lastName: '', address1: '', address2: '', city: '', country: '', zip: '' })
    const [totalPrice, setTotalPrice] = useState(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormData(orderData)
        navigate('/summary')
    }
    const cartEmpty = () => {
        if (!cartData.length)
            navigate('/')
    }
    const handlePrice = () => {
        let price = 0
        cartData.forEach((cartItem: CartObject) => {
            price += cartItem.product.price * cartItem.quantity
        })
        setTotalPrice(price)
    }
    useEffect(() => {
        handlePrice()
        cartEmpty()
    }, [])
    return (
        <div style={{ backgroundColor: 'whitesmoke', minHeight: '100vh', padding: '15px' }}>
            <nav id='order-nav'>
                <div className='main-icons-container'>
                    <div className='icon-container'>
                        <div className='arrow-down' />
                        <div className='main-icon'>
                            <div className='gradient-icon' />
                            <div className='inner-icon' />
                        </div>
                    </div>
                    <h4>Shoplly</h4>
                </div>
            </nav>
            <div style={{ display: 'flex', gap: '5%', padding: '3%' }}>
                <form onSubmit={(e) => handleSubmit(e)} className='left-container'>
                    <div className='left-form'>
                        <h5>Contact Information</h5>
                        <input
                            // required
                            onChange={(e) => setOrderData({ ...orderData, email: e.target.value })}
                            className='order-input'
                            placeholder='Email or Phone Number'
                        />
                        <h5>Shipping Address</h5>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                            <input
                                // required
                                onChange={(e) => setOrderData({ ...orderData, firstName: e.target.value })}
                                style={{ width: '50%' }}
                                className='order-input'
                                placeholder='First Name'
                            />
                            <input
                                // required
                                onChange={(e) => setOrderData({ ...orderData, lastName: e.target.value })}
                                style={{ width: '50%' }}
                                className='order-input'
                                placeholder='Last Name'
                            />
                        </div>
                        <input
                            // required
                            onChange={(e) => setOrderData({ ...orderData, address1: e.target.value })}
                            className='order-input'
                            placeholder='Address Line 1' />
                        <input
                            // required
                            onChange={(e) => setOrderData({ ...orderData, address2: e.target.value })}
                            className='order-input'
                            placeholder='Address Line 2' />
                        <input
                            // required
                            onChange={(e) => setOrderData({ ...orderData, city: e.target.value })}
                            className='order-input'
                            placeholder='City/Town' />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                            <input
                                // required
                                onChange={(e) => setOrderData({ ...orderData, country: e.target.value })}
                                style={{ width: '50%' }}
                                className='order-input'
                                placeholder='Country' type='select' />
                            <input
                                // required
                                onChange={(e) => setOrderData({ ...orderData, zip: e.target.value })}
                                style={{ width: '50%' }}
                                className='order-input'
                                placeholder='Postal/Zip' />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
                            <input type="checkbox" id="save" name="save-checkbox" value="save" />
                            <label htmlFor="save">Save this information for next time</label>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <button
                                style={{ display: 'flex', alignItems: 'center' }}
                                className='navbar-button'
                            >
                                <MdKeyboardArrowLeft size='23px' /> Return to Cart
                            </button>
                        </Link>
                        <button
                            type='submit'
                            className='summary-button'
                            style={{ backgroundColor: 'black', color: 'white' }}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </form>
                <div className='right-container'>
                    {cartData.map((item: CartObject, index: number) => (
                        <div key={item.product.id} className='order-cart-item'>
                            <img
                                src={`https://picsum.photos/200${index}`}
                                className='order-product-image'
                                alt='product-img'
                            />
                            <div className='order-cart-description'>
                                <div>
                                    <h5>{item.product.productName}</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde dolorem culpa totam velit animi eum.</p>
                                </div>
                            </div>
                            <h5>${item.product.price}</h5>
                        </div>
                    ))}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <h5 style={{ color: 'lightgrey' }}>SUBTOTAL</h5>
                            <h5>${totalPrice}</h5>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                            <h5 style={{ color: 'lightgrey' }}>SHIPPING</h5>
                            <h5>$50</h5>
                        </div>
                    </div>
                    <hr style={{ width: '100%' }} color='lightgrey' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                        <h5 style={{ color: 'lightgrey' }}>TOTAL</h5>
                        <div style={{ display: 'flex', columnGap: '10px' }}>
                            <h5 style={{ color: 'lightgrey' }}>USD</h5>
                            <h5>${totalPrice + 50}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-items'>
                <button
                    // style={{ display: 'flex', alignItems: 'center' }}
                    className='navbar-button'
                >
                    Refund Policy
                </button>
                <button
                    // style={{ display: 'flex', alignItems: 'center' }}
                    className='navbar-button'
                >
                    Privacy Policy
                </button>
                <button
                    // style={{ display: 'flex', alignItems: 'center' }}
                    className='navbar-button'
                >
                    Terms of Service
                </button>
            </div>
        </div>
    )
}

export default Checkout