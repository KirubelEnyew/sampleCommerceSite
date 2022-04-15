import React from 'react'
import './styles.css'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

interface NavProps {
    showCart: (value: boolean) => void
}

const NavBar: React.FC<NavProps> = ({ showCart }) => {
    const location = useLocation()
    return (
        <nav className='home-nav'>
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
            <ul>
                <div>
                    <button id={location.pathname === '/' ? 'active-tab-button' : undefined} className='navbar-button'>Home</button>
                    <hr style={{ width: '25%', height: '2px', borderRadius: '5px' }} color={location.pathname === '/' ? 'black' : 'white'} />
                </div>
                <div>
                    <button id={location.pathname === '/products' ? 'active-tab-button' : undefined} className='navbar-button'>Products</button>
                    <hr style={{ width: '25%', height: '2px', borderRadius: '5px' }} color={location.pathname === '/products' ? 'black' : 'white'} />
                </div>
                <div>
                    <button id={location.pathname === '/contact' ? 'active-tab-button' : undefined} className='navbar-button'>Contact</button>
                    <hr style={{ width: '25%', height: '2px', borderRadius: '5px' }} color={location.pathname === '/contact' ? 'black' : 'white'} />
                </div>
                <div>
                    <button id={location.pathname === '/about' ? 'active-tab-button' : undefined} className='navbar-button'>About</button>
                    <hr style={{ width: '25%', height: '2px', borderRadius: '5px' }} color={location.pathname === '/about' ? 'black' : 'white'} />
                </div>
            </ul>
            <div className='icons-container'>
                <button onClick={() => showCart(true)} className='icon-button'>
                    <MdOutlineShoppingBag color='black' size='20px' />
                </button>
                <img className='profile-icon' src='https://picsum.photos/200' alt='pfp' />
            </div>
        </nav>
    )
}

export default NavBar