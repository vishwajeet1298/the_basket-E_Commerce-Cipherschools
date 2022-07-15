import React from 'react'
import "./Navbar.css"
import basketlogo from "../images/basketcart1.png"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; //optional
import LoginToolTip from '../ToolTips/LoginToolTip';

import ProductCategoryCard from '../ProductCategoryCard/ProductCategoryCard';


function Navbar({categoryname,setCategoryName}) {
    return (
        <div className="navbar_items">
            <div className="title">
                <div className="logo" >
                    <img src={basketlogo} alt="Tokri-Logo" />
                    {/* <div className="pro_logo">
                    <span>Explore</span>
                    <span>Basket</span>
                    <span>Pro</span>
                    <span>
                        <img src={propluslogo} alt="Pro-Plus-Logo" />
                    </span>
                </div> */}

                </div>
                <div className="search">
                    <input type="text"
                        placeholder="Search for Products and more......" /></div>
                <div className="login_button">
                    <Tippy content={<LoginToolTip />} 
                    interactive={true} offset={[5,18]}>
                        <button>Login</button>
                    </Tippy>
                </div>
                    <div className="orders" >
                        My Orders
                    </div>
                        <div className="contact_us">Contact Us</div>
            </div>
            <ProductCategoryCard />
        </div>

    )
}
export default Navbar