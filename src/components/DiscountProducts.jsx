const DiscountProducts = () => {
    return (
        <>
            <div id="discount_products" className="flex justify-center w-full h-fit pb-[80px] md:pb-[100px] lg:pb-[125px] 2xl:pb-[150px]">
                <div className="w-fit h-fit columns-1 md:columns-2 gap-[20px] md:gap-[25px] lg:gap-[30px] 2xl:gap-[35px] font-jost">
                    <div className="relative flex justify-center items-end w-[300px] sm:w-[430px] md:w-[320px] lg:w-[420px] xl:w-[520px] h-[370px] 2xl:w-[643px] lg:h-[550px] 2xl:h-[633px] mb-[20px] md:mb-[25px] lg:mb-[30px] 2xl:mb-[35px] rounded-[5px] overflow-hidden group bg-[#C4C4C4]">
                        <div className="absolute inset-0 bg-cover bg-center bg-[url('./assets/discount_img1.svg')] group-hover:[transform:_matrix(-1,_0,_0,_1,_0,_0)] transition-all duration-[250ms]"></div>
                        <div className="z-[25] flex flex-col items-center mb-3 md:mb-4 lg:mb-7 2xl:mb-10 bg-[#FFFFFF] px-[5vw] py-5 2xl:py-9 2xl:px-[110px] gap-[20px] 2xl:gap-[30px] rounded-[5px]">
                            <div className="flex flex-col items-center gap-[10px]">
                                <p className="text-[15px] leading-5 md:text-[17px] md:leading-[24px] lg:text-[22px] lg:leading-[28px] 2xl:text-[25px] 2xl:leading-[35px] font-[700] text-[#383838] text-center">Bravo Sunglasses</p>
                                <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#383838] text-center">Up to 80% off on selected item</p>
                            </div>
                            <button className="flex items-center bg-[#383838] hover:bg-[#383838]/90 px-[16px] py-[8px] md:px-[24px] md:py-[9px] lg:px-[32px] lg:py-[10px] xl:px-[40px] xl:py-[11px] rounded-[5px] transition duration-200">
                                <span className="font-jost text-[14px] md:text-[16px] xl:text-[18px] leading-[18px] md:leading-5 xl:leading-[26px] font-[700] text-[#FFFFFF]">Buy Now</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-end w-[300px] sm:w-[430px] md:w-[320px] lg:w-[420px] xl:w-[520px] h-[300px] 2xl:w-[643px] lg:h-[480px] 2xl:h-[509px] mb-[20px] md:mb-[25px] lg:mb-[30px] 2xl:mb-[35px] rounded-[5px] overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center bg-[url('./assets/discount_img3.svg')]"></div>
                        <div className="z-[25] flex flex-col items-center mb-3 md:mb-4 lg:mb-7 2xl:mb-10 bg-[#FFFFFF] px-[5vw] py-5 2xl:py-9 2xl:px-[110px] gap-[20px] 2xl:gap-[30px] rounded-[5px]">
                            <div className="flex flex-col items-center gap-[10px]">
                                <p className="text-[15px] leading-5 md:text-[17px] md:leading-[24px] lg:text-[22px] lg:leading-[28px] 2xl:text-[25px] 2xl:leading-[35px] font-[700] text-[#383838] text-center">John Jacobs</p>
                                <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#383838] text-center">Up to 40% off on selected item</p>
                            </div>
                            <button className="flex items-center bg-[#383838] hover:bg-[#383838]/90 px-[16px] py-[8px] md:px-[24px] md:py-[9px] lg:px-[32px] lg:py-[10px] xl:px-[40px] xl:py-[11px] rounded-[5px] transition duration-200">
                                <span className="font-jost text-[14px] md:text-[16px] xl:text-[18px] leading-[18px] md:leading-5 xl:leading-[26px] font-[700] text-[#FFFFFF]">Buy Now</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-end w-[300px] sm:w-[430px] md:w-[320px] lg:w-[420px] xl:w-[520px] h-[300px] 2xl:w-[643px] lg:h-[480px] 2xl:h-[509px] mb-[20px] md:mb-[25px] lg:mb-[30px] 2xl:mb-[35px] rounded-[5px] overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center bg-[url('./assets/discount_img2.svg')]"></div>
                        <div className="z-[25] flex flex-col items-center mb-3 md:mb-4 lg:mb-7 2xl:mb-10 bg-[#FFFFFF] px-[5vw] py-5 2xl:py-9 2xl:px-[110px] gap-[20px] 2xl:gap-[30px] rounded-[5px]">
                            <div className="flex flex-col items-center gap-[10px]">
                                <p className="text-[15px] leading-5 md:text-[17px] md:leading-[24px] lg:text-[22px] lg:leading-[28px] 2xl:text-[25px] 2xl:leading-[35px] font-[700] text-[#383838] text-center">Tommy Hilfiger</p>
                                <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#383838] text-center">Up to 30% off on selected item</p>
                            </div>
                            <button className="flex items-center bg-[#383838] hover:bg-[#383838]/90 px-[16px] py-[8px] md:px-[24px] md:py-[9px] lg:px-[32px] lg:py-[10px] xl:px-[40px] xl:py-[11px] rounded-[5px] transition duration-200">
                                <span className="font-jost text-[14px] md:text-[16px] xl:text-[18px] leading-[18px] md:leading-5 xl:leading-[26px] font-[700] text-[#FFFFFF]">Buy Now</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-end w-[300px] sm:w-[430px] md:w-[320px] lg:w-[420px] xl:w-[520px] h-[370px] 2xl:w-[643px] lg:h-[550px] 2xl:h-[633px] mb-[20px] md:mb-[25px] lg:mb-[30px] 2xl:mb-[35px] rounded-[5px] overflow-hidden group bg-[#C4C4C4]">
                        <div className="absolute inset-0 bg-cover bg-center bg-[url('./assets/discount_img4.svg')] group-hover:[transform:_matrix(-1,_0,_0,_1,_0,_0)] transition-all duration-[250ms]"></div>
                        <div className="z-[25] flex flex-col items-center mb-3 md:mb-4 lg:mb-7 2xl:mb-10 bg-[#FFFFFF] px-[5vw] py-5 2xl:py-9 2xl:px-[110px] gap-[20px] 2xl:gap-[30px] rounded-[5px]">
                            <div className="flex flex-col items-center gap-[10px]">
                                <p className="text-[15px] leading-5 md:text-[17px] md:leading-[24px] lg:text-[22px] lg:leading-[28px] 2xl:text-[25px] 2xl:leading-[35px] font-[700] text-[#383838] text-center">Vincent Chase</p>
                                <p className="text-[12px] leading-4 md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#383838] text-center">Up to 10% off on selected item</p>
                            </div>
                            <button className="flex items-center bg-[#383838] hover:bg-[#383838]/90 px-[16px] py-[8px] md:px-[24px] md:py-[9px] lg:px-[32px] lg:py-[10px] xl:px-[40px] xl:py-[11px] rounded-[5px] transition duration-200">
                                <span className="font-jost text-[14px] md:text-[16px] xl:text-[18px] leading-[18px] md:leading-5 xl:leading-[26px] font-[700] text-[#FFFFFF]">Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DiscountProducts;
