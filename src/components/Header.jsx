import eyeglasslogo from "/eyeglass.svg";
import profileicon from "../assets/profile_icon.svg";
import carticon from "../assets/cart_icon.svg";

const Header = () => {
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
                    <button className="flex w-fit h-[30px] items-center overflow-hidden bg-transparent">
                        <img src={carticon} alt="cart icon" draggable={false} className='w-[22px] h-[22px] object-contain' />
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
