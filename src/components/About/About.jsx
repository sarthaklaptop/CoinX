import React from 'react'
import Cards from './Cards'
import { useMediaQuery } from 'react-responsive';

const About = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div >
        <h1 className=' font-bold text-xl my-4'>About Bitcoin</h1>
        <div >
            <p className='font-semibold my-1'>What is Bitcoin?</p>
            <p>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>    
        </div>
        <hr className='my-4'/>
        <div>
            <p className='font-semibold my-1'>Lorem ipsum dolor sit amet</p>
            <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  

                Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.

                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
        </div>
        <hr className=' my-4'/>
        <div className=' flex flex-col gap-y-4'>
            <p className='font-semibold my-1'>Already Holding Bitcoin?</p>

            <div className={`flex ${isSmallScreen ? 'flex-col' : 'flex-row'}`}>
                <Cards/>
            </div>

            <hr className=' my-1'/>

            <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
        </div>
    </div>
  )
}

export default About