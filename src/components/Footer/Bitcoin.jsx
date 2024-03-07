import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const Bitcoin = () => {

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

            console.log(data)
        } catch (error) {
            throw new Error(response.data.message);
            console.log(`Inside getData function in Main.jsx`);
        }
    }
  return (
    <div>
        {response ? (
            <div>
                <div>
                    <img src={response.image.small} width={50} alt="" />
                    <p>{response.symbol}</p>
                    <p>{response.market_data.price_change_percentage_24h_in_currency.usd}</p>
                </div>
                <p>{response.market_data.current_price.usd}</p>

            </div>

        
        ):
        (
            <p>Loading...</p>
        )
        }
    </div>
  )
}

export default Bitcoin