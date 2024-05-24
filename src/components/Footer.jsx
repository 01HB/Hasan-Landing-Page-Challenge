import linkedinicon from "../assets/linkedinicon.svg";
import instagramicon from "../assets/insta_icon.svg";
import xicon from "../assets/x_icon.svg";
import eyeglasslogo from "/eyeglass.svg";

const Footer = () => {
    return (
        <>
            <div id="footer" className="w-full flex flex-col font-jost bg-white">
                <div id="footer_top" className="w-full h-fit flex max-lg:flex-col gap-[60px] justify-between px-[50px] sm:px-[100px] lg:px-[120px] 3xl:px-[240px] pb-10">
                    <div id="footer_block1" className="flex flex-col items-start">
                        <div className="flex w-fit h-fit">
                            <img src={eyeglasslogo} alt="eyeglass logo" className="w-[90px] md:w-[110px] lg:w-[125px] xl:w-[149px] h-auto object-contain" />
                        </div>
                        <p className="mt-6 lg:mt-8 w-[260px] sm:w-[350px] text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#383838]">
                            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde
                        </p>
                        <div className="mt-5 lg:mt-7 flex w-fit h-fit gap-[15px]">
                            <a href="#" className="flex justify-center items-center w-[30px] h-[30px] rounded-full border border-[#FED29C] bg-transparent hover:bg-[#FED29C] transition duration-300">
                                <img src={linkedinicon} alt="linkedin logo" className="w-[14px] h-auto object-contain" />
                            </a>
                            <a href="#" className="flex justify-center items-center w-[30px] h-[30px] rounded-full border border-[#FED29C] bg-transparent hover:bg-[#FED29C] transition duration-300">
                                <img src={instagramicon} alt="instagram logo" className="w-[14px] h-auto object-contain" />
                            </a>
                            <a href="#" className="flex justify-center items-center w-[30px] h-[30px] rounded-full border border-[#FED29C] bg-transparent hover:bg-[#FED29C] transition duration-300">
                                <img src={xicon} alt="x logo" className="w-[14px] h-auto object-contain" />
                            </a>
                        </div>
                    </div>
                    <div id="footer_block2" className="flex flex-wrap w-fit h-fit gap-x-[30px] 2xl:gap-x-[84px] gap-y-[50px]">
                        <div className="flex flex-col items-start w-[160px] 2xl:w-[210px]">
                            <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838]">Support</p>
                            <div className="flex flex-col gap-[10px] mt-6 lg:mt-8 text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#383838]">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Product FAQs</a>
                                <a href="#">Company Support</a>
                                <a href="#">Manage Account</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[160px] 2xl:w-[210px]">
                            <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838]">Quick Links</p>
                            <div className="flex flex-col gap-[10px] mt-6 lg:mt-8 text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#383838]">
                                <a href="#">About Us</a>
                                <a href="#">Blog Post</a>
                                <a href="#">Product Features</a>
                                <a href="#">Company Info</a>
                                <a href="#">Company Info</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[160px] 2xl:w-[210px]">
                            <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838]">Communnity</p>
                            <div className="flex flex-col gap-[10px] mt-6 lg:mt-8 text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#383838]">
                                <a href="#">Become an affiliate</a>
                                <a href="#">Help Center</a>
                                <a href="#">Product FAQs</a>
                                <a href="#">Our Forums</a>
                                <a href="#">Product API</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer_bottom" className="w-full h-fit flex max-lg:flex-col-reverse lg:justify-between items-center px-[30px] md:px-[50px] lg:px-[120px] 3xl:px-[240px] py-8 border border-[#FED29C] gap-3">
                    <p className="text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#545454]">Copyright &copy; {new Date().getFullYear()} All rights reserved by Eyeglass</p>
                    <div className="flex justify-center gap-[30px] text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#545454]">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
