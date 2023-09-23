import React from 'react'
import Lottie from 'react-lottie-player';
import loading from '../assets/animation/animation_loading.json';
const Loading = () => {
  return (
    <div className="h-[100vh] w-full bg-slate-[#181818] flex justify-center items-center text-9xl">
            <Lottie
              loop
              animationData={loading}
              play
              style={{ width: 250, height: 250 }}
            />
        </div>
  )
}

export default Loading