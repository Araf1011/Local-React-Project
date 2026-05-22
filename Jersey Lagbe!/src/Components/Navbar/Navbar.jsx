import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header class="header">
        <a href="#" class="logo" onclick="showSection('home')">Jersey Lagbe</a>

        <div class="right-nav">
            <nav class="navbar">
                <a href="#" onclick="showSection('home')">HOME</a>
                <a href="#" onclick="showSection('jersey')">JERSEY</a>
                <a href="#" onclick="showSection('about')">ABOUT</a>
                <a href="#" onclick="showSection('contact')">CONTACT</a>
            </nav>

            <a href="#" class="cart-btn" onclick="openCart(); return false;">
                <div class="cart-icon">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <span class="cart-count">0</span>
                </div>
                <span class="cart-price">0.00৳</span>
            </a>
        </div>
    </header>
  )
}

export default Navbar