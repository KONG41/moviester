import React from 'react'
import Lottie from 'react-lottie-player';
import page404 from '../assets/animation/animation_lmvl5a35.json';
const NoPage = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <Lottie
      loop
      animationData={page404}
      play
      style={{ width: 350, height: 350 }}
    />
    </div>
  )
}

export default NoPage;