import React from 'react'
import './styles.css'
import { MdOutlineShoppingBag } from 'react-icons/md'

const NavBar = () => {
    return (
        <nav>
            <div className='main-icons-container'>
                <div className='main-icon'>
                    <div className='gradient-icon' />
                    <div className='inner-icon' />
                </div>
                <h4>Shopily</h4>
            </div>
            <ul>
                <button>Home</button>
                <button>Products</button>
                <button>Contact</button>
                <button>About</button>
            </ul>
            <div className='icons-container'>
                <button className='icon-button'>
                    <MdOutlineShoppingBag color='black' />
                </button>
                <img className='profile-icon' src='https://picsum.photos/200' alt='pfp' />
            </div>
        </nav>
    )
}

export default NavBar