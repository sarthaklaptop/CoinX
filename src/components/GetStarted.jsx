import React, { useEffect, useState } from 'react'
import getStartedImg from "../assets/getStartedImg.png"
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';


const GetStarted = () => {

  const [data, setData] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setData(data);
      console.log(data.coins[0].item.data.price_change_percentage_24h.usd)

    } catch (error) {
      
    }
  };

  return (
    <div className={`flex flex-col ${isSmallScreen ? `w-[95%]` : `w-1/4`}  mx-auto my-4 items-center justify-start `}>
      <div>
        <div className={`bg-[#0052FE] ${isSmallScreen ? `w-full` : ``} text-white p-6 rounded-lg `}>
          <div className='flex flex-col items-center text-center gap-4 justify-center '>
            <p className='font-bold text-xl'>Get Started with KoinX for FREE</p>
            <p className='font-normal text-sm'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img src={getStartedImg} alt="" />
            <button className='bg-white text-[#0052FE] p-2 w-full rounded-lg'>
              {isSmallScreen ? 'Get Started for Free' : 'Get Started'}
            </button>
          </div>
        </div>

        <div className={`flex flex-col w-full ${isSmallScreen ? `my-2` : ` m-4`} bg-white p-4 rounded-lg`}>
          <p className='my-4 font-semibold'>Trending Coins (24h)</p>
          {data ? (
            <div className=' flex flex-col gap-2'>
              <div className=' flex items-center justify-between'>
                <div className=' flex'>
                  <img src={data.coins[0].item.large} width={30}/>
                  <p>{data.coins[0].item.name}</p>
                </div>
                <div>
                  {data.coins[0].item.data.price_change_percentage_24h.usd > 0 ? (
                    <div className='flex gap-2 '>
                          <p className='text-green-500 bg-green-200 px-2 rounded-lg flex items-center'><FaCaretUp/> {data.coins[0].item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                  ) : (
                      <div className='flex gap-2'>
                          <p className='text-red-500 bg-red-200 px-2 rounded-lg flex items-center'><FaCaretDown/> {data.coins[0].item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                  )}
                </div>
              </div>
              <div className=' flex items-center justify-between'>
                <div className='flex '>
                  <img src={data.coins[1].item.large} width={30}/>
                  <p>{data.coins[1].item.name}</p>
                </div>
                <div>
                  {data.coins[1].item.data.price_change_percentage_24h.usd > 0 ? (
                    <div className='flex gap-2 '>
                          <p className='text-green-500 bg-green-200 px-2 rounded-lg flex items-center'><FaCaretUp/> {data.coins[1].item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                  ) : (
                      <div className='flex gap-2'>
                          <p className='text-red-500 bg-red-200 px-2 rounded-lg flex items-center'><FaCaretDown/> {data.coins[1].item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                  )}
                </div>
              </div>
              <div className='w-full flex items-center justify-between' >
                <div className=' flex'>
                  <img src={data.coins[2].item.large} width={30}/>
                  <p>{data.coins[2].item.name}</p>
                </div>
                <div>
                  {data.coins[2].item.data.price_change_percentage_24h.usd > 0 ? (
                    <div className='flex gap-2 '>
                          <p className='text-green-500 bg-green-200 px-2 rounded-lg flex items-center'><FaCaretUp/> {data.coins[2].item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                  ) : (
                      <div className='flex gap-2'>
                          <p className='text-red-500 bg-red-200 px-2 rounded-lg flex items-center'><FaCaretDown/> {data.coins[2].item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                  )}
                </div>
              </div>
            </div>
          ) 
          : (
            <div>
              <p>Loading...</p>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default GetStarted