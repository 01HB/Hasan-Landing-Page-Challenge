import eyeglasslogo from "/eyeglass.svg";
import profileicon from "../assets/profile_icon.svg";
import carticon from "../assets/cart_icon.svg";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Header = ({ c_count, c_items }) => {
    const [itemsCount, setItemsCount] = useState(c_count);
    const [cartItems, setCartItems] = useState(c_items);

    useEffect(() => {
        setItemsCount(c_count);
        setCartItems(c_items);
    }, [c_count, c_items]);

    return (
        <>
            <div id='header' className="relative w-full min-h-[107px] px-[90px] py-[30px] flex justify-center items-center">
                <div id='logo' className='absolute top-[30px] left-[20px] sm:left-[40px] md:left-[60px] 2xl:left-[90px] w-fit h-fit overflow-hidden'>
                    <img src={eyeglasslogo} alt="eyeglass logo" draggable={false} className='w-[134px] md:w-[154px] 2xl:w-[194px] h-[47px] object-contain' />
                </div>
                <div id='menu_text' className='hidden xl:flex items-center w-fit h-[47px] gap-[30px] font-jost text-[#383838] text-[16px] leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400]'>
                    <a href='#' draggable={false}>Home</a>
                    <a href='#about-us' draggable={false}>About Us</a>
                    <a href='#products' draggable={false}>Products</a>
                    <a href='#' draggable={false}>Features</a>
                    <a href='#' draggable={false}>Reviews</a>
                    <a href='#footer' draggable={false}>Contact Us</a>
                </div>
                <div id="menu_icons" className='absolute top-[30px] right-[20px] sm:right-[40px] md:right-[60px] 2xl:right-[90px] flex w-fit h-[47px] items-center gap-5'>
                    <button className="relative flex w-fit h-[30px] items-center bg-transparent">
                        <img src={carticon} alt="cart icon" draggable={false} className='w-[22px] h-[22px] object-contain' />
                        { (itemsCount > 0) && <div className="absolute top-[-6px] right-[-5px] w-4 h-4 flex justify-center items-center rounded-full bg-red-600 text-[12px] leading-[16px] font-[700] text-[#ffffff]">{itemsCount}</div> }
                    </button>
                    <button className="flex w-fit h-[30px] items-center overflow-hidden bg-transparent">
                        <img src={profileicon} alt="profile icon" draggable={false} className='w-[22px] h-[22px] object-contain' />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;

Header.propTypes = {
    c_count: PropTypes.number,
    c_items: PropTypes.array,
};
