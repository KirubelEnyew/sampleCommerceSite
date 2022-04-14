import NavBar from '../NavBar/NavBar'
import './styles.css'
import { MdSearch, MdClose, MdRemove, MdAdd } from 'react-icons/md'
import Products from '../Products/Products'
import { cartData, products } from '../../Shared/products'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [showCart, setShowCart] = useState(false)
    const handleCartVisibility = (value: boolean) => {
        setShowCart(value)
    }
    return (
        <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <NavBar showCart={handleCartVisibility} />
            <div className='top-tabs-container'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='search-field-container'>
                        <input placeholder='Search' className='search-field' />
                        <MdSearch className='search-icon' size='30px' color='lightgrey' />
                    </div>
                </div>
                <ul className='category-list'>
                    <button className='navbar-button'>Furniture</button>
                    <button className='navbar-button'>Electronics</button>
                    <button className='navbar-button'>Vehicles</button>
                    <button className='navbar-button'>Accessories</button>
                    <button className='navbar-button'>Fashion</button>
                </ul>
            </div>
            <div className='main-body'>
                <div className='filter-sort-container'>
                    <span className='header'>Filter</span>
                    <ul className='filter-list'>
                        <div>
                            <input type="checkbox" id="sofas" name="filter-group" value="sofas" />
                            <label htmlFor="sofas">Sofas</label>
                        </div>
                        <div>
                            <input type="checkbox" id="beds" name="filter-group" value="beds" />
                            <label htmlFor="beds">Beds</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tables" name="filter-group" value="tables" />
                            <label htmlFor="tables">Tables</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tv_stands" name="filter-group" value="tv_stands" />
                            <label htmlFor="tv_stands">TV Stands</label>
                        </div>
                        <div>
                            <input type="checkbox" id="wardrobes" name="filter-group" value="wardrobes" />
                            <label htmlFor="wardrobes">wardrobes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cabinets" name="filter-group" value="cabinets" />
                            <label htmlFor="cabinets">Cabinets</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dressers" name="filter-group" value="dressers" />
                            <label htmlFor="dressers">Dressers</label>
                        </div>
                        <div>
                            <input type="checkbox" id="other" name="filter-group" value="other" />
                            <label htmlFor="other">Other</label>
                        </div>
                    </ul>
                    <span className='header'>Sort</span>
                    <ul className='filter-list'>
                        <div>
                            <input type="radio" id="sofas" name="sort-group" value="sofas" />
                            <label htmlFor="sofas">Sofas</label>
                        </div>
                        <div>
                            <input type="radio" id="beds" name="sort-group" value="beds" />
                            <label htmlFor="beds">Beds</label>
                        </div>
                        <div>
                            <input type="radio" id="tables" name="sort-group" value="tables" />
                            <label htmlFor="tables">Tables</label>
                        </div>
                        <div>
                            <input type="radio" id="tv_stands" name="sort-group" value="tv_stands" />
                            <label htmlFor="tv_stands">TV Stands</label>
                        </div>
                    </ul>
                </div>
                <div className='products-container'>
                    <Products data={products} />
                </div>
            </div>
            {showCart &&
                <div className='backdrop'>
                    <div className='cart-container'>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <button
                                className='close-button'
                                onClick={() => setShowCart(false)}
                            >
                                Close <MdClose className='close-icon' size='10px' />
                            </button>
                        </div>
                        <hr style={{ width: '100%' }} color='lightgrey' />
                        {cartData.map((item, index) => (
                            <div key={item.product.id} className='cart-item'>
                                <img
                                    src={`https://picsum.photos/200${index}`}
                                    className='cart-product-image'
                                    alt='product-img'
                                />
                                <div className='cart-item-description'>
                                    <div>
                                        <h4>{item.product.productName}</h4>
                                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde dolorem culpa totam velit animi eum.</h5>
                                    </div>
                                    <h4>${item.product.price}</h4>
                                </div>
                                <div className='item-buttons-container'>
                                    <button className='cart-icon-button'> <MdClose size='20px' /> </button>
                                    <div className='quantity-container'>
                                        <button className='cart-icon-button'> <MdRemove size='20px' /> </button>
                                        {item.quantity}
                                        <button className='cart-icon-button'> <MdAdd size='20px' /> </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='cart-summary-container'>
                            <hr style={{ width: '100%' }} color='lightgrey' />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h5>TOTAL INCL TAX</h5>
                                <h5>$9999</h5>
                            </div>
                            <hr style={{ width: '100%' }} color='lightgrey' />
                            <div style={{ display: 'flex', justifyContent: 'flex-end', columnGap: '10px', marginTop: '20px' }}>
                                <button
                                    onClick={() => setShowCart(false)}
                                    className='summary-button'
                                >
                                    Continue Shopping
                                </button>
                                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                                    <button
                                        style={{ backgroundColor: 'black', color: 'white' }}
                                        className='summary-button'
                                    >
                                        Proccess to Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default HomePage