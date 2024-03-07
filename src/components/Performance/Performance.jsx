import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const Performance = () => {

    const [response, setResponse] = useState('');
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            // Uncaught (in promise) DOMException: The request was denied.
            const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }        

            const data = await response.json();
            setResponse(data);
        } catch (error) {
            throw new Error(response.data.message);
            console.log(`Inside getData function in Main.jsx`);
        }
    }

  return (
    <div className={` bg-white m-4 flex flex-col gap-6 w-full `}>
        <h1 className=' font-bold text-xl my-2'>Performance</h1>

        <div className='text-gray-500 flex  items-center justify-between'>
            <div>
                <p>Today's Low</p>
                <p></p>
            </div>
            <div class="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 w-9/12"></div>

            <div>
                <p>Today's High</p>
                <p></p>
            </div>
        </div>
        <div className='text-gray-500 flex items-center justify-between'>
            <div>
                <p>52W Low</p>
                <p></p>
            </div>
            <div class="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 w-9/12"></div>

            <div>
                <p>52W High</p>
                <p></p>
            </div>
        </div>

        <p  className='font-semibold my-1 text-gray-500'>Fundamentals</p>

        { response ? (
            <div className={` flex w-full items-center justify-between ${isSmallScreen ? `w-full flex-col` : `w-9/12`}`}>
                <div className={`${isSmallScreen ? `w-full flex-col` : `w-5/12`}`}>
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>Bitcoin Price</p>
                        <p>${response.market_data.current_price.usd}</p>
                    </div>
                    <hr />
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>24h Low / 24h High</p>
                        <p>$16,382.07 / $16,874.12</p>
                    </div>
                    <hr />
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>7d Low / 7d High</p>
                        <p>$16,382.07 / $16,874.12</p>
                    </div>
                    <hr />
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>Trading Volume</p>
                        <p>$23,249,202,782</p>
                    </div>
                    <hr />
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>Market Cap Rank</p>
                        <p>#1</p>
                    </div>

                </div>
                <div className={`${isSmallScreen ? `w-full flex-col` : `w-5/12`}`}>
                    <div className=' flex my-4 items-center justify-between'>
                        <p  className='text-gray-500'>Market Cap</p>
                        <p>$323,507,290,047</p>
                    </div>
                    <hr />
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>Market Cap Dominance</p>
                        <p>38.343%</p>
                    </div>
                    <hr />
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>Volume / Market Cap</p>
                        <p>{response.market_cap_fdv_ratio}</p>
                    </div>
                    <hr />
                    <div className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>All-Time High</p>
                        <p>$69,044.77 -75.6%</p>
                    </div>
                    <hr />
                    <div  className=' flex my-4 items-center justify-between'>
                        <p className='text-gray-500'>All-Time Low</p>
                        <p>$67.81 24729.1%</p>
                    </div>

                </div>
            </div>
        ) : (
            <div>Loading...</div>
        )}

    </div>
  )
}

export default Performance