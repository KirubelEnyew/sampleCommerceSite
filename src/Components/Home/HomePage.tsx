import NavBar from '../NavBar/NavBar'
import './styles.css'
import { MdSearch, MdClose, MdRemove, MdAdd } from 'react-icons/md'
import Products from '../Products/Products'
import { electronicProducts, ProductKind, products } from '../../Shared/products'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext, { CartObject } from '../../Shared/CartContext'

const HomePage = () => {
    const [showCart, setShowCart] = useState(false)
    const { cartData } = useContext(CartContext)
    const handleCartVisibility = (value: boolean) => {
        setShowCart(value)
    }
    const [productData, setProductData] = useState(products)
    type TabValues = 'Furniture' | 'Electronics' | 'Vehicles' | 'Accessories' | 'Fashion'
    const [currentTab, setCurentTab] = useState<TabValues>('Furniture')
    const [filter, setFilter] = useState<ProductKind | undefined>(undefined)
    const [totalPrice, setTotalPrice] = useState(0)

    //handler functions

    const handlePrice = () => {
        let price = 0
        cartData.forEach((cartItem: CartObject) => {
            price += cartItem.product.price * cartItem.quantity
        })
        setTotalPrice(price)
    }

    useEffect(() => {
        handlePrice()
    }, [showCart])

    const tabHandler = (value: TabValues) => {
        setCurentTab(value)
        setFilter(undefined)
    }
    const filterHandler = (value: ProductKind) => {
        if (value !== filter) {
            setFilter(value)
            return
        }
        setFilter(undefined)
    }

    const handleSort = (value: string) => {
        let sortedValue = [...productData]
        if (value === 'price-asc') {
            sortedValue.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
        } else if (value === 'price-desc') {
            sortedValue.sort((firstItem, secondItem) => secondItem.price - firstItem.price);
        } else if (value === 'discounts') {
            sortedValue.sort((firstItem, secondItem) => Number(secondItem.discounted) - Number(firstItem.discounted))
        }
        setProductData(sortedValue)
    }

    // filter elements

    const furnitureFilters = (
        <ul className='filter-list'>
            <div>
                <input
                    checked={filter === 'sofa'}
                    type="checkbox"
                    id="sofas"
                    name="filter-group"
                    value="sofa"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="sofas">Sofas</label>
            </div>
            <div>
                <input
                    checked={filter === 'bed'}
                    type="checkbox"
                    id="beds"
                    name="filter-group"
                    value="bed"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="beds">Beds</label>
            </div>
            <div>
                <input
                    checked={filter === 'table'}
                    type="checkbox"
                    id="tables"
                    name="filter-group"
                    value="table"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="tables">Tables</label>
            </div>
            <div>
                <input
                    checked={filter === 'tv_stand'}
                    type="checkbox"
                    id="tv_stands"
                    name="filter-group"
                    value="tv_stand"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="tv_stands">TV Stands</label>
            </div>
            <div>
                <input
                    checked={filter === 'wardrobe'}
                    type="checkbox"
                    id="wardrobes"
                    name="filter-group"
                    value="wardrobe"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="wardrobes">wardrobes</label>
            </div>
            <div>
                <input
                    checked={filter === 'cabinet'}
                    type="checkbox"
                    id="cabinets"
                    name="filter-group"
                    value="cabinet"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="cabinets">Cabinets</label>
            </div>
            <div>
                <input
                    checked={filter === 'dresser'}
                    type="checkbox"
                    id="dressers"
                    name="filter-group"
                    value="dresser"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="dressers">Dressers</label>
            </div>
            <div>
                <input
                    checked={filter === 'other'}
                    type="checkbox"
                    id="other"
                    name="filter-group"
                    value="other"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="other">Other</label>
            </div>
        </ul>
    )

    const electronicsFilters = (
        <ul className='filter-list'>
            <div>
                <input
                    checked={filter === 'TV'}
                    type="checkbox"
                    id="TV"
                    name="filter-group"
                    value="TV"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="TV">TVs</label>
            </div>
            <div>
                <input
                    checked={filter === 'smartPhone'}
                    type="checkbox"
                    id="smartPhone"
                    name="filter-group"
                    value="smartPhone"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="smartPhone">Smart Phones</label>
            </div>
            <div>
                <input
                    checked={filter === 'laptop'}
                    type="checkbox"
                    id="laptop"
                    name="filter-group"
                    value="laptop"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="laptop">Laptops</label>
            </div>
            <div>
                <input
                    checked={filter === 'headphone'}
                    type="checkbox"
                    id="headphone"
                    name="filter-group"
                    value="headphone"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="headphone">Headphones</label>
            </div>
            <div>
                <input
                    checked={filter === 'speaker'}
                    type="checkbox"
                    id="speaker"
                    name="filter-group"
                    value="speaker"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="speaker">Speakers</label>
            </div>
            <div>
                <input
                    checked={filter === 'mouse'}
                    type="checkbox"
                    id="mouse"
                    name="filter-group"
                    value="mouse"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="mouse">Mice</label>
            </div>
            <div>
                <input
                    checked={filter === 'keyboard'}
                    type="checkbox"
                    id="keyboard"
                    name="filter-group"
                    value="keyboard"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="keyboard">Keyboards</label>
            </div>
            <div>
                <input
                    checked={filter === 'other'}
                    type="checkbox"
                    id="other"
                    name="filter-group"
                    value="other"
                    onChange={(e: any) => filterHandler(e.target.value)} />
                <label htmlFor="other">Other</label>
            </div>
        </ul>
    )

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
                    <div>
                        <button
                            onClick={() => { tabHandler('Furniture'); setProductData(products) }}
                            id={currentTab === 'Furniture' ? 'active-tab-button' : undefined}
                            className='navbar-button'
                        >
                            Furniture
                        </button>
                        <hr style={{ width: '30%', height: '2px', borderRadius: '5px' }} color={currentTab === 'Furniture' ? 'black' : 'white'} />
                    </div>
                    <div>
                        <button
                            onClick={() => { tabHandler('Electronics'); setProductData(electronicProducts) }}
                            id={currentTab === 'Electronics' ? 'active-tab-button' : undefined}
                            className='navbar-button'
                        >
                            Electronics
                        </button>
                        <hr style={{ width: '30%', height: '2px', borderRadius: '5px' }} color={currentTab === 'Electronics' ? 'black' : 'white'} />
                    </div>
                    <div>
                        <button
                            onClick={() => { tabHandler('Vehicles'); setProductData([]) }}
                            id={currentTab === 'Vehicles' ? 'active-tab-button' : undefined}
                            className='navbar-button'
                        >
                            Vehicles
                        </button>
                        <hr style={{ width: '30%', height: '2px', borderRadius: '5px' }} color={currentTab === 'Vehicles' ? 'black' : 'white'} />
                    </div>
                    <div>
                        <button
                            onClick={() => { tabHandler('Accessories'); setProductData([]) }}
                            id={currentTab === 'Accessories' ? 'active-tab-button' : undefined}
                            className='navbar-button'
                        >
                            Accessories
                        </button>
                        <hr style={{ width: '30%', height: '2px', borderRadius: '5px' }} color={currentTab === 'Accessories' ? 'black' : 'white'} />
                    </div>
                    <div>
                        <button
                            onClick={() => { tabHandler('Fashion'); setProductData([]) }}
                            id={currentTab === 'Fashion' ? 'active-tab-button' : undefined}
                            className='navbar-button'
                        >
                            Fashion
                        </button>
                        <hr style={{ width: '30%', height: '2px', borderRadius: '5px' }} color={currentTab === 'Accessories' ? 'black' : 'white'} />
                    </div>
                </ul>
            </div>
            <div className='main-body'>

                {/* sort and filter container */}

                <div className='filter-sort-container'>
                    <span className='header'>Filter</span>
                    {currentTab === 'Furniture' ?
                        furnitureFilters
                        :
                        electronicsFilters
                    }
                    <span className='header'>Sort</span>
                    <ul className='filter-list'>
                        <div>
                            <input
                                type="radio"
                                id="discounts"
                                name="sort-group"
                                value="discounts"
                                onChange={(e: any) => handleSort(e.target.value)} />
                            <label htmlFor="discounts">Discounts</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="price-asc"
                                name="sort-group"
                                value="price-asc"
                                onChange={(e: any) => handleSort(e.target.value)} />
                            <label htmlFor="price-asc">Price-Low to High</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="price-desc"
                                name="sort-group"
                                value="price-desc"
                                onChange={(e: any) => handleSort(e.target.value)} />
                            <label htmlFor="price-desc">Price-Hight to Low</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="bestSelling"
                                name="sort-group"
                                value="bestSelling"
                                onChange={(e: any) => handleSort(e.target.value)} />
                            <label htmlFor="bestSelling">Best Selling</label>
                        </div>
                    </ul>
                </div>

                {/* product cards contianer */}

                <div className='products-container'>
                    <Products data={productData} filter={filter} />
                </div>
            </div>

            {/* pop up cart and backdrop container */}

            {showCart &&
                <div className='backdrop'>
                    <div id='cart-container' className='slide-in'>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <button
                                className='close-button'
                                onClick={() => setShowCart(false)}
                            >
                                Close <MdClose className='close-icon' size='10px' />
                            </button>
                        </div>
                        <hr style={{ width: '100%' }} color='lightgrey' />
                        {!cartData.length ?
                            <div style={{ height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h1>Your Cart is Empty</h1>
                                <h3>Please add items to proceed to checkout</h3>
                            </div>
                            :
                            cartData.map((item: CartObject, index: number) => (
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
                                            <button onClick={() => { }} className='cart-icon-button'> <MdRemove size='20px' /> </button>
                                            {item.quantity}
                                            <button onClick={() => { }} className='cart-icon-button'> <MdAdd size='20px' /> </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <div className='cart-summary-container'>
                            <hr style={{ width: '100%' }} color='lightgrey' />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h5>TOTAL INCL TAX</h5>
                                <h5>{!cartData.length ? 'N/A' : `$${totalPrice}`}</h5>
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
                                        style={!cartData.length ? { backgroundColor: 'grey', color: 'darkgrey' } : { backgroundColor: 'black', color: 'white' }}
                                        className='summary-button'
                                        disabled={!cartData.length}
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