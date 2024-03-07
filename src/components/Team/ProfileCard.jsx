import React from 'react'
import team1 from "../../assets/Team1.png"
import team2 from "../../assets/Team2.png"
import team3 from "../../assets/Team3.png"
import { useMediaQuery } from 'react-responsive'

const ProfileCard = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className=' flex flex-col gap-4 my-4 '>
        <div className={`flex ${isSmallScreen ? 'flex-col' : 'flex-row'} gap-6 p-4 px-6 items-center justify-center rounded-lg bg-[#E8F4FD]`}>
            <div className=' text-center gap-2 flex flex-col'>
                <img src={team1} width={`${isSmallScreen ? 90 : 350}`} alt="" />
                <p className=' font-semibold'>John Smith</p>
                <p className=' text-gray-400 text-xs'>Designation here</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
            </div>
        </div>
        <div className={`flex ${isSmallScreen ? 'flex-col' : 'flex-row'} gap-6 p-4 px-6 items-center justify-center rounded-lg bg-[#E8F4FD]`}>
            <div className=' text-center gap-2 flex flex-col'>
                <img src={team2} width={`${isSmallScreen ? 90 : 350}`} alt="" />
                <p className=' font-semibold'>Elina Williams</p>
                <p className=' text-gray-400 text-xs'>Designation here</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
            </div>
        </div>
        <div className={`flex ${isSmallScreen ? 'flex-col' : 'flex-row'} gap-6 p-4 px-6 items-center justify-center rounded-lg bg-[#E8F4FD]`}>
            <div className=' text-center gap-2 flex flex-col'>
                <img src={team3} width={`${isSmallScreen ? 90 : 350}`} alt="" />
                <p className=' font-semibold'>John Smith</p>
                <p className=' text-gray-400 text-xs'>Designation here</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard