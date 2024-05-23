import bannerimage1 from "../assets/banner_img1.svg";
import shopicon from "../assets/shop_icon_white.svg";

const Banner = () => {
    return (
        <>
            <div id="banner" className="relative flex w-full h-[400px] sm:h-[550px] md:h-[700px] lg:h-[800px] xl:h-[918px] bg-[#EAEAEA] overflow-hidden pl-[50%] pt-[58px] min-[1800px]:pl-[544px]">
                <div className="flex w-fit h-fit transform max-[1799px]:-translate-x-1/2">
                    <div className="relative w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] md:w-[570px] md:h-[570px] lg:w-[670px] lg:h-[670px] xl:w-[762px] xl:h-[762px] bg-[#FED29C] rounded-full">
                        <div className="z-[5] absolute top-[23px] left-[18px] md:left-[28px] lg:left-[49px] flex w-[320px] h-[320px] sm:w-[470px] sm:h-[470px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] xl:w-[819px] xl:h-[837px] overflow-hidden">
                            <img src={bannerimage1} alt="banner image" draggable={false} className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
                <div className="z-[12] absolute top-[250px] left-[40px] sm:left-[54px] sm:top-[320px] md:top-[350px] md:left-[60px] lg:left-[110px] xl:left-[170px] 2xl:top-[315px] min-[1800px]:left-[240px] w-[256px] h-fit sm:w-[300px] md:w-[350px] xl:w-[450px] 2xl:w-[556px] flex flex-col items-start gap-[16px] sm:gap-[30px] lg:gap-[40px] xl:gap-[52px]">
                    <p className="font-jost text-[18px] leading-5 sm:text-[22px] sm:leading-7 md:text-[28px] md:leading-[34px] lg:text-[36px] lg:leading-[42px] 2xl:text-[48px] 2xl:leading-[54px] min-[1800px]:text-[54px] min-[1800px]:leading-[66px] font-[700] text-[#383838]">Personalized Eyeglass Shopping</p>
                    <a href="#" className="flex items-center gap-[10px] bg-[#383838] hover:bg-[#383838]/90 px-[16px] py-[8px] md:px-[24px] md:py-[10px] lg:px-[32px] lg:py-[12px] xl:px-[40px] xl:py-[14px] rounded-[5px] transition duration-200">
                        <img src={shopicon} alt="buy now icon" draggable={false} className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] xl:w-[18px] xl:h-[18px]" />
                        <span className="font-jost text-[14px] md:text-[16px] xl:text-[18px] leading-[18px] md:leading-5 xl:leading-[26px] font-[700] text-[#FFFFFF]">Buy Now</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Banner;
