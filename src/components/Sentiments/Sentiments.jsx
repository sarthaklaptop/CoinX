import React from 'react'
import sentiment1 from "../../assets/sentiment1.png"
import sentiment2 from "../../assets/sentiment2.png"
import { useMediaQuery } from 'react-responsive';

const Sentiments = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={` bg-white m-4  gap-4 flex flex-col`}>
        <h1 className=' font-bold text-xl my-4'>Sentiment</h1>

        <p  className='font-semibold my-1 text-gray-500'>Key Events</p>
        
        <div className={`flex gap-2 ${isSmallScreen ? `flex-col` : `flex`}`}>
            
            <div className='bg-[#E8F4FD] flex p-4 gap-2 rounded-xl'>
                <div>
                    <img width={150} src={sentiment1} alt="" />
                </div>
                <div>
                    <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni, praesentium nihil perspiciatis ad quibusdam nisi eaque culpa. Ducimus atque numquam pariatur porro corporis labore facilis, </p>
                </div>
            </div>
            <div className='bg-[#EBF9F4] flex p-4 gap-2 rounded-lg'>
                <div>
                    <img width={150} src={sentiment2} alt="" />
                </div>
                <div>
                    <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni, praesentium nihil perspiciatis ad quibusdam nisi eaque culpa. Ducimus atque numquam pariatur porro corporis labore facilis, </p>
                </div>
            </div>

        </div>

        <p  className='font-semibold my-1 text-gray-500'>Analyst Estimates</p>

        <div className='flex gap-4 items-center justify-center'>
            <div className='bg-[#EBF9F4] rounded-full w-1/6 p-14 text-center'>
                <p className=' font-bold text-3xl text-green-600 text-center mx-auto'>76%</p>
            </div>

            <div className=' w-full text-gray-500 flex flex-col gap-3'>

                <div className=' flex items-center justify-start gap-x-4'>
                    <p>Buy</p>
                    <div class="border-t-8 border-green-500 w-2/5"></div>76%
                </div>
                <div className=' flex items-center justify-start gap-x-4'>
                    <p>Hold</p>
                    <div class="border-t-8 border-gray-300 w-1/12"></div>8%
                </div>
                <div className=' flex items-center justify-start gap-x-4'>
                    <p>Sell</p>
                    <div class="border-t-8 border-red-500 w-1/5"></div>16%
                </div>

            </div>
        </div>


    </div>
  )
}

export default Sentiments