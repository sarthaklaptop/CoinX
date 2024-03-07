import { PieChart } from '@mui/x-charts';
import React from 'react'
import { useMediaQuery } from 'react-responsive';

const Tokenomics = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
    
    const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className='bg-white m-4'>
        <h1 className=' font-bold text-xl my-4'>Tokenomics</h1>
        <div className=' flex items-center justify-center mx-auto'>
            <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 80, label: 'Crowdsale investors: 80%', color : "#0082FF" },
                        { id: 1, value: 20, label: 'Foundation: 20%', color : "#ffc21c"},
                    ],
                    innerRadius: 76,
                    outerRadius: 100,
                    paddingAngle: 0,
                    cornerRadius: 3,
                    startAngle: 0,
                    endAngle: 361,
                    cx: Number(`${isSmallScreen ? 120 : 125}`),
                    cy: Number(`${isSmallScreen ? 275 : 125}`),
                    palette:{COLORS}
                },
            ]}
            
            width={isSmallScreen ? 250 : 500}
            height={isSmallScreen ? 550 : 250 }
            />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
    </div>
  )
}

export default Tokenomics