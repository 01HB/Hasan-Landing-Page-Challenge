import searchicon from '../assets/searchicon.svg';
import eyeglassicon from '../assets/eyeglassicon.svg';
import cardicon from '../assets/credcardicon.svg';
import vehicleicon from '../assets/vehicleicon.svg';
import connectorvector from '../assets/stepsconnector.svg';


const BuySteps = () => {
    return (
        <>
            <div id="buy_steps" className='relative w-full h-[175px] md:h-[235px] lg:h-[280px] 2xl:h-[320px]'>
                <div className="absolute top-[-20px] md:top-[-40px] lg:top-[-50px] 2xl:top-[-65px] left-0 right-0 w-full h-fit flex justify-center gap-[2px] sm:gap-4 lg:gap-5 xl:gap-8 2xl:gap-[33px]">
                    <div className="relative flex flex-col items-center w-fit">
                        <div className="flex justify-center items-center w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] rounded-full bg-[#FED29C]">
                            <img src={searchicon} alt="search" draggable={false} className='w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[40px] 2xl:h-[40px]' />
                        </div>
                        <div className="absolute top-[65px] md:top-[110px] lg:top-[140px] 2xl:top-[170px] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-[80px] md:w-[136px] lg:w-[180px] 2xl:w-[220px] gap-[10px] font-jost">
                            <p className='text-[13px] leading-4 md:text-[15px] md:leading-[20px] lg:text-[17px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838] text-center'>Search Your Sunglass</p>
                            <p className='text-[10px] leading-3 md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[20px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#545454] text-center'>Shop stylish eyewear now</p>
                        </div>
                    </div>
                    <div className="flex w-fit h-[40px] md:h-[80px] lg:h-[100px] 2xl:h-[130px] items-center">
                        <img src={connectorvector} alt="steps connector" draggable={false} className='w-[40px] md:w-[70px] lg:w-[100px] 2xl:w-[151px] 2xl:h-[15px] object-contain' />
                    </div>
                    <div className="relative flex flex-col items-center w-fit gap-[40px]">
                        <div className="flex justify-center items-center w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] rounded-full bg-[#FED29C]">
                            <img src={eyeglassicon} alt="eyeglass" draggable={false} className='w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[40px] 2xl:h-[40px]' />
                        </div>
                        <div className="absolute top-[65px] md:top-[110px] lg:top-[140px] 2xl:top-[170px] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-[80px] md:w-[136px] lg:w-[180px] 2xl:w-[220px] gap-[10px] font-jost">
                            <p className='text-[13px] leading-4 md:text-[15px] md:leading-[20px] lg:text-[17px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838] text-center'>Select Sunglass</p>
                            <p className='text-[10px] leading-3 md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[20px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#545454] text-center'>Shade your style</p>
                        </div>
                    </div>
                    <div className="flex w-fit h-[40px] md:h-[80px] lg:h-[100px] 2xl:h-[130px] items-center">
                        <img src={connectorvector} alt="steps connector" draggable={false} className='w-[40px] md:w-[70px] lg:w-[100px] 2xl:w-[151px] 2xl:h-[15px] object-contain' />
                    </div>
                    <div className="relative flex flex-col items-center w-fit gap-[40px]">
                        <div className="flex justify-center items-center w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] rounded-full bg-[#FED29C]">
                            <img src={cardicon} alt="credit card" draggable={false} className='w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[40px] 2xl:h-[40px]' />
                        </div>
                        <div className="absolute top-[65px] md:top-[110px] lg:top-[140px] 2xl:top-[170px] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-[80px] md:w-[136px] lg:w-[180px] 2xl:w-[220px] gap-[10px] font-jost">
                            <p className='text-[13px] leading-4 md:text-[15px] md:leading-[20px] lg:text-[17px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838] text-center'>Make Payment</p>
                            <p className='text-[10px] leading-3 md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[20px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#545454] text-center'>Securely checkout now</p>
                        </div>
                    </div>
                    <div className="flex w-fit h-[40px] md:h-[80px] lg:h-[100px] 2xl:h-[130px] items-center">
                        <img src={connectorvector} alt="steps connector" draggable={false} className='w-[40px] md:w-[70px] lg:w-[100px] 2xl:w-[151px] 2xl:h-[15px] object-contain' />
                    </div>
                    <div className="relative flex flex-col items-center w-fit gap-[40px]">
                        <div className="flex justify-center items-center w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] rounded-full bg-[#FED29C]">
                            <img src={vehicleicon} alt="vehicle" draggable={false} className='w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[40px] 2xl:h-[40px]' />
                        </div>
                        <div className="absolute top-[65px] md:top-[110px] lg:top-[140px] 2xl:top-[170px] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-[80px] md:w-[136px] lg:w-[180px] 2xl:w-[220px] gap-[10px] font-jost">
                            <p className='text-[13px] leading-4 md:text-[15px] md:leading-[20px] lg:text-[17px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838] text-center'>Receive Product</p>
                            <p className='text-[10px] leading-3 md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[20px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#545454] text-center'>See the world clearly</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuySteps;
