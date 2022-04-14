import React from 'react'
import './styles.css'
import { MdOutlineShoppingBag } from 'react-icons/md'

interface NavProps {
    showCart: (value: boolean) => void
}

const NavBar: React.FC<NavProps> = ({ showCart }) => {
    return (
        <nav>
            <div className='main-icons-container'>
                <div className='icon-container'>
                    <div className='arrow-down' />
                    <div className='main-icon'>
                        <div className='gradient-icon' />
                        <div className='inner-icon' />
                    </div>
                </div>
                <h4>Shopily</h4>
            </div>
            <ul>
                <button className='navbar-button'>Home</button>
                <button className='navbar-button'>Products</button>
                <button className='navbar-button'>Contact</button>
                <button className='navbar-button'>About</button>
            </ul>
            <div className='icons-container'>
                <button onClick={() => showCart(true)} className='icon-button'>
                    <MdOutlineShoppingBag color='black' />
                </button>
                <img className='profile-icon' src='https://picsum.photos/200' alt='pfp' />
            </div>
        </nav>
    )
}

export default NavBar