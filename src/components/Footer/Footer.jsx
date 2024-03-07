import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path based on your project structure

const Footer = () => {
  const [response, setResponse] = useState('');
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
      setResponse(data);

      console.log(data);
    } catch (error) {
      console.error(`Error in getData function in Footer.jsx: ${error.message}`);
    }
  };

  return (
    <div className='w-11/12 items-center mx-auto justify-center py-4'>
      <h1 className='font-bold text-xl my-4'>You May Also Like</h1>

      {response ? (
        <Carousel
        opts={{
          align: isSmallScreen ? "center" : "start",
        }}
        className={`flex ${isSmallScreen ? 'flex-row w-5/6 ml-10' : ' gap-4'} items-center justify-evenly`}
      >
          <CarouselContent>
            {response.coins.map((coin) => (
              <CarouselItem key={coin.item.id} className={`border-2 p-4 m-2 ml-4 rounded-lg pl-2 md:pl-4 ${isSmallScreen ? 'md:w-[90%]' : 'md:basis-1/2 lg:basis-1/5'}`}>

                <div className='flex items-center justify-start gap-1 my-1 min-w-52'>
                  <img src={isSmallScreen ? coin.item.small : coin.item.small} alt={coin.item.name} />
                  <p className='text-sm font-semibold'>{coin.item.symbol.toUpperCase()}</p>
                  <div>
                    {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                      <div className='flex gap-2 '>
                        <p className='text-green-500 bg-green-200 px-2 rounded-lg flex items-center'>+ {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                    ) : (
                      <div className='flex gap-2'>
                        <p className='text-red-500 bg-red-200 px-2 rounded-lg flex items-center'>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                    )}
                  </div>
                </div>
                <p className='text-lg font-semibold'>{coin.item.data.price}</p>
                <img className='mx-auto my-2' src={coin.item.data.sparkline} alt='' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}

        <h1 className='font-bold text-xl my-4'>Trending Coins</h1>
      {response ? (
        <Carousel
        opts={{
          align: isSmallScreen ? "center" : "start",
        }}
        className={`flex ${isSmallScreen ? 'flex-row w-5/6 ml-10' : ' gap-4'} items-center justify-evenly`}
      >
          <CarouselContent>
            {response.coins.map((coin) => (
              <CarouselItem key={coin.item.id} className={`border-2 p-4 m-2 ml-4 rounded-lg pl-2 md:pl-4 ${isSmallScreen ? 'md:w-full' : 'md:basis-1/2 lg:basis-1/5'}`}>

                <div className='flex items-center justify-start gap-1 my-1 min-w-52'>
                  <img src={isSmallScreen ? coin.item.small : coin.item.small} alt={coin.item.name} />
                  <p className='text-sm font-semibold'>{coin.item.symbol.toUpperCase()}</p>
                  <div>
                    {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                      <div className='flex gap-2 '>
                        <p className='text-green-500 bg-green-200 px-2 rounded-lg flex items-center'>+ {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                    ) : (
                      <div className='flex gap-2'>
                        <p className='text-red-500 bg-red-200 px-2 rounded-lg flex items-center'>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                      </div>
                    )}
                  </div>
                </div>
                <p className='text-lg font-semibold'>{coin.item.data.price}</p>
                <img className='mx-auto my-2' src={coin.item.data.sparkline} alt='' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Footer;




