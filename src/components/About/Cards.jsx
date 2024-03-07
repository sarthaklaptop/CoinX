import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import card1 from "../../assets/Cards1.png"
import card2 from "../../assets/Cards2.png"
import { useMediaQuery } from 'react-responsive';

const Cards = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={`flex ${isSmallScreen ? 'flex-col' : 'flex-row'} gap-8 items-center py-4`}>
        <div className={`font-semibold flex gap-4 px-4 py-2 items-center bg-gradient-to-br from-[#79F1C5] to-[#0E5CAD] rounded-lg text-white ${isSmallScreen ? 'w-full' : ''}`}>
            <div>
                <img src={card1} alt="" />
            </div>
            <div>
                <p className=' text-lg '>Calculate your <br /> Profits</p>
                <button className=' flex bg-white text-black items-center justify-center p-1 rounded-lg text-sm'>Check Now <MdArrowRightAlt/></button>
            </div>
        </div>
        <div className={`font-semibold flex gap-4 px-4 py-2 items-center bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg text-white ${isSmallScreen ? 'w-full' : ''}`}>
            <div>
                <img src={card2} alt="" />
            </div>
            <div>
                <p className=' text-lg '>Calculate your tax <br /> liability</p>
                <button  className=' flex bg-white text-black items-center justify-center p-1 rounded-lg text-sm'>Check Now <MdArrowRightAlt/></button>
            </div>
        </div>
    </div>
  )
}

export default Cards