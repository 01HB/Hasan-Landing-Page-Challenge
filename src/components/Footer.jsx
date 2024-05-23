const Footer = () => {
    return (
        <>
            <div className="w-full flex flex-col font-jost bg-white border border-[#FED29C]">
                <div className="flex justify-between gap-[60px] px-[240px] pb-10">
                    <div></div>
                    <div className="flex w-fit h-fit gap-[84px]">
                        <div className="flex flex-col items-start w-[210px]">
                            <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838]">Support</p>
                            <div className="flex flex-col gap-[10px] mt-6 lg:mt-8 text-[12px] leading-[20px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#383838]">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Product FAQs</a>
                                <a href="#">Company Support</a>
                                <a href="#">Manage Account</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[210px]">
                            <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838]">Quick Links</p>
                            <div className="flex flex-col gap-[10px] mt-6 lg:mt-8 text-[12px] leading-[20px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#383838]">
                                <a href="#">About Us</a>
                                <a href="#">Blog Post</a>
                                <a href="#">Product Features</a>
                                <a href="#">Company Info</a>
                                <a href="#">Company Info</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-[210px]">
                            <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838]">Communnity</p>
                            <div className="flex flex-col gap-[10px] mt-6 lg:mt-8 text-[12px] leading-[20px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#383838]">
                                <a href="#">Become an affiliate</a>
                                <a href="#">Help Center</a>
                                <a href="#">Product FAQs</a>
                                <a href="#">Our Forums</a>
                                <a href="#">Product API</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center px-[240px] py-8">
                    <p className="">Copyright &copy; {new Date().getFullYear()} All rights reserved by Eyeglass</p>
                    <div className="flex justify-center gap-[30px]">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
