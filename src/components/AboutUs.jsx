import eyeglass_aboutus from '../assets/aboutus_glass.svg';

const AboutUs = () => {
    return (
        <>
            <div id="about-us" className="relative flex w-full pl-[28px] sm:pl-[40px] md:pl-[50px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[170px] min-[1800px]:pl-[244px] py-7 2xl:py-[126px] bg-[#FED29C] overflow-hidden">
                <div className="flex flex-col items-start w-[42vw] max-w-[541px] font-jost">
                    <p className="mb-[16px] lg:mb-[20px] text-[18px] leading-5 sm:text-[22px] sm:leading-7 md:text-[28px] md:leading-[34px] lg:text-[34px] lg:leading-[42px] 2xl:text-[38px] 2xl:leading-[48px] font-[700] text-[#383838]">Experience clear vision with OptiChroma Vision Frames</p>
                    <p className="mb-[8px] lg:mb-[10px] text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#545454]">At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That&apos;s why we&apos;ve designed a collection of frames that prioritize both form and function.</p>
                    <p className="mb-[30px] lg:mb-[40px] text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#545454]">Our team of experts is dedicated to helping you find the perfect pair of glasses.</p>
                    <button className="flex items-center bg-[#383838] hover:bg-[#383838]/90 px-[16px] py-[8px] md:px-[24px] md:py-[9px] lg:px-[32px] lg:py-[10px] xl:px-[40px] xl:py-[11px] rounded-[5px] transition duration-200">
                        <span className="font-jost text-[14px] md:text-[16px] xl:text-[18px] leading-[18px] md:leading-5 xl:leading-[26px] font-[700] text-[#FFFFFF]">About Us</span>
                    </button>
                </div>
                <div className="absolute top-[-1px] right-0 bottom-[-1px] max-[1799px]:left-[53%] flex max-w-[850px] group">
                    <img src={eyeglass_aboutus} alt="eyeglass about us" draggable={false} className="w-full h-full object-cover object-center" />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-[url('./assets/aboutsection_mask.jpg')] bg-cover bg-center transition duration-500 ease-in-out"></div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
