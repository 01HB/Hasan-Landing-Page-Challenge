import favhearticon from "../assets/favhearticon.svg";
import bravosunglasses from "../assets/products_disp/bravo_sunglasses.svg";
import vincentsunglasses from "../assets/products_disp/vincent_chase.svg";
import tommyhilfigersunglasses from "../assets/products_disp/tommy_hilfiger.svg";
import raybansunglasses from "../assets/products_disp/ray_ban.svg";
import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Bravo Sunglasses",
            price: "$100",
            prev_price: "$150",
            discount: "10%",
            prod_img: bravosunglasses,
        },
        {
            id: 2,
            name: "Bravo Sunglasses",
            price: "$120",
            prev_price: "$150",
            discount: "10%",
            prod_img: vincentsunglasses,
        },
        {
            id: 3,
            name: "Bravo Sunglasses",
            price: "$100",
            prev_price: "",
            discount: "",
            prod_img: vincentsunglasses,
        },
        {
            id: 4,
            name: "Bravo Sunglasses",
            price: "$130",
            prev_price: "$150",
            discount: "10%",
            prod_img: tommyhilfigersunglasses,
        },
        {
            id: 5,
            name: "Bravo Sunglasses",
            price: "$100",
            prev_price: "",
            discount: "",
            prod_img: raybansunglasses,
        },
        {
            id: 6,
            name: "Bravo Sunglasses",
            price: "$110",
            prev_price: "$150",
            discount: "10%",
            prod_img: bravosunglasses,
        },
    ]);


    return (
        <>
            <div id='products' className="w-full pt-[147px] pb-[200px] flex justify-center font-jost">
                <div className="w-full max-w-[1320px] flex flex-col items-center gap-y-[60px]">
                    <div className="flex justify-between w-full h-fit">
                        <div className="flex flex-col items-start gap-5">
                            <p className="text-[16px] leading-[26px] md:text-[26px] md:leading-[36px] 2xl:text-[38px] 2xl:leading-[48px] font-[700] text-[#383838]">Our Products</p>
                            <p className="max-w-[445px] text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] 2xl:text-[16px] 2xl:leading-[26px] font-[400] text-[#545454]">
                                Experience crystal clear vision and elevated style with our premium collection of eyeglasses.
                            </p>
                        </div>
                        <div id="products_filters" className="w-fit flex items-end gap-[10px]">
                            <button className={`w-fit h-fit rounded-[5px] border border-[#545454] px-5 py-[5px]`}>Latest</button>
                            <button className={`w-fit h-fit rounded-[5px] border border-[#545454] px-5 py-[5px]`}>Special</button>
                            <button className={`w-fit h-fit rounded-[5px] border border-[#545454] px-5 py-[5px]`}>Best sell</button>
                        </div>
                    </div>
                    {
                        products.length > 0 ?
                            <div className="w-fit max-w-full h-fit px-1 py-8 justify-items-center grid grid-cols-[repeat(1,_minmax(0px,_1fr))] min-[511px]:grid-cols-[repeat(2,_minmax(0px,_1fr))] lg:grid-cols-[repeat(3,_minmax(0px,_1fr))] gap-x-[24px] 2xl:gap-x-[35px] gap-y-[60px] 2xl:gap-y-[90px]">
                                {
                                    products.map((product, index) => {
                                        return (
                                            <div key={`pr_${index}`} className="flex flex-col w-[417px] h-[636px] rounded-[5px] overflow-hidden">
                                                <div className="relative w-full h-[471px] flex justify-center items-center bg-[#F7F7F7]">
                                                    <img src={product.prod_img} alt={`product ${product.id} image`} className="w-[343px] h-auto object-contain" />
                                                    { product.discount && <div className="absolute top-[30px] left-[30px] flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#FED29C] text-[12px] leading-[16px] md:text-[14px] md:leading-[19px] 2xl:text-[16px] 2xl:leading-[23px] font-[700] text-[#383838]">{product.discount}</div> }
                                                    <button className="absolute top-[30px] right-[30px] flex justify-center items-center w-[60px] h-[60px] rounded-full border border-[#545454] hover:bg-[#e8e8e8] transition duration-200">
                                                        <img src={favhearticon} alt="add to favorites" className="w-[30px] h-auto object-contain" />
                                                    </button>
                                                </div>
                                                <div className="w-full flex flex-col pt-[30px]">
                                                    <p className="w-fit h-fit mb-[10px] text-[20px] leading-[28px] md:text-[26px] md:leading-[34px] 2xl:text-[30px] 2xl:leading-[40px] font-[400] text-[#383838]">{product.name}</p>
                                                    <div className="flex items-center gap-4 mb-5">
                                                        <p className="text-[15px] leading-[20px] md:text-[17px] md:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[700] text-[#383838]">{product.price}</p>
                                                        { product.prev_price && <p className="text-[15px] leading-[20px] md:text-[17px] md:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#545454] line-through">{product.prev_price}</p> }
                                                    </div>
                                                    <button className="w-fit h-fit text-[15px] leading-[20px] md:text-[17px] md:leading-[24px] 2xl:text-[20px] 2xl:leading-[30px] font-[400] text-[#383838] hover:underline hover:underline-offset-2 transition-all duration-300">Add To Cart</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="flex justify-center w-full h-fit">
                                <p className="my-10 text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] 2xl:text-[18px] 2xl:leading-[26px] font-[400] text-[#545454] text-center">
                                    products will be available soon...
                                </p>
                            </div>

                    }
                </div>
            </div>
        </>
    );
}

export default Products;
