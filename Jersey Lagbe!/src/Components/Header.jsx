import {useState} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './Header.css';

export default function Header()
{
    return(
        <header className="header">
            <div className="logo">
                <Link to="/" onclick={handleLinkClick}>Jersey Lagbe!</Link>

                <div className ="right-nav">
                    <Link to ="/home" onclick ={handleLinkClick}>Home</Link>
                    <Link to ="/products" onclick ={handleLinkClick}>Products</Link>
                    <Link to ="/about" onclick ={handleLinkClick}>About</Link>
                    <Link to ="/contact" onclick ={handleLinkClick}>Contact</Link>

                </div>
            </div>
        </header>
    )
}