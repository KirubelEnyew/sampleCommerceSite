import NavBar from '../NavBar/NavBar'
import './styles.css'
import { MdSearch, MdClose } from 'react-icons/md'
import Products from '../Products/Products'
import { products } from '../../Shared/products'
import React, { useState } from 'react'

const HomePage = () => {
    const [showCart, setShowCart] = useState(false)
    const handleCartVisibility = (value: boolean) => {
        setShowCart(value)
    }
    return (
        <div>
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
                <div className='cart-container'>
                    <div className='cart-paper'>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <button
                                className='navbar-button'
                                onClick={() => setShowCart(false)}
                            >
                                Close <MdClose className='close-icon' />
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default HomePage