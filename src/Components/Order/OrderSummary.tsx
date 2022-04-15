import React, { useContext } from 'react'
import { MdThumbUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CartContext, { CartObject } from '../../Shared/CartContext'

const OrderSummary = () => {
    const { cartData } = useContext(CartContext)
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
            <div style={{ display: 'flex', gap: '5%', padding: '2%' }}>
                <div className='left-container-summary'>
                    <div className='thumb-up-container'>
                        <MdThumbUp size='40px' color='white' />
                    </div>
                    <div>
                        <h2>Thank you for shopping with Shoplly.</h2>
                        <h5>Your order is on the way.</h5>
                    </div>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button
                            className='summary-button'
                        >
                            Back to Shopping
                        </button>
                    </Link>
                </div>

                <div className='right-container'>
                    <h4>Order Summary</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '65%', gap: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5 style={{ color: 'lightgrey' }}>Order Number</h5>
                            <h5>568464</h5>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5 style={{ color: 'lightgrey' }}>Est Delivery Date</h5>
                            <h5>{new Date().toUTCString()}</h5>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5 style={{ color: 'lightgrey' }}>Shipping Details</h5>
                            <h5>{`NAME, ADDRESS, CITY, COUNTRY`}</h5>
                        </div>
                    </div>
                    <hr style={{ width: '100%' }} color='lightgrey' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                        <h5 style={{ color: 'lightgrey' }}>TOTAL</h5>
                        <div style={{ display: 'flex', columnGap: '10px' }}>
                            <h5 style={{ color: 'lightgrey' }}>USD</h5>
                            <h5>$9448</h5>
                        </div>
                    </div>
                    {cartData.map((item: CartObject, index: number) => (
                        <div
                            style={index + 1 === cartData.length ? { border: 'none' } : undefined}
                            key={item.product.id}
                            className='order-cart-item'
                        >
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

export default OrderSummary