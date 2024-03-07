import React, { useEffect, useState } from 'react'
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Graph from './components/Main/Graph';
import { useMediaQuery } from 'react-responsive';
import About from './components/About/About';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Team from './components/Team/Team';
import Sentiments from './components/Sentiments/Sentiments';
import Performance from './components/Performance/Performance';


const Chart = () => {

    const [response, setResponse] = useState('');
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });


    useEffect(() => {
        getData();
    }, [])

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
    <div className={` mx-auto lg:p-10 p-6 bg-white rounded-lg ${isSmallScreen ? `w-full` : `w-9/12`}`}>

        <div>
            <div>
                {response ? (
                    <div>
                        <div className=' flex  items-center gap-6 '>
                            <div className='flex items-center gap-4 font-medium'>
                                <img src={response.image.large} width={50} alt="" />
                                <p className=' '>{response.id}</p>
                                <p className=' uppercase text-gray-600'>{response.symbol}</p>
                            </div>
                            <p className='bg-gray-600 p-2 rounded-xl text-center text-white'>Rank #{response.market_cap_rank}</p>
                        </div>

                        <div className=' flex gap-8 items-center py-4'>
                            <div>
                                <p className='text-3xl font-bold'>${response.market_data.current_price.usd}</p>
                                <p>₹{response.market_data.current_price.usd}</p>
                            </div>

                            <div>
                                <div className=' flex'>
                                    {response.market_data.price_change_percentage_24h_in_currency.usd > 0 ? (
                                        <div className='flex gap-2 '>
                                            <p className='text-green-500 bg-green-200 px-2 rounded-lg flex items-center'><FaCaretUp/> {response.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}</p>
                                            <p>{isSmallScreen ? '24H' : 'Price Change (24H):'}</p>
                                        </div>
                                    ) : (
                                        <div className='flex gap-2'>
                                            <p className='text-red-500 bg-red-200 px-2 rounded-lg flex items-center'><FaCaretDown/> {response.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}</p>
                                            <p>{isSmallScreen ? '24H' : 'Price Change (24H):'}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <hr  className=' my-4 font-semibold'/>

                        <div className=' my-4 font-semibold'>
                            <p>Bitcoin Price Chart (USD)</p>
                        </div>

                    </div>
                ) : (
                    <div>Loading...</div>
                )
                }
                    
            </div>

            <Graph className=""/>
        </div>

        <Performance/>

        <Sentiments/>

        <About/>

        <Tokenomics/>

        <Team/>


    </div>
  )
}

export default Chart;