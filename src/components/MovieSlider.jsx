import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from  'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Scrollbar, Pagination } from 'swiper/modules';

const MovieSlider = ({data,title}) => {
  console.log('MovieSlide',data)
  return (
    <section className="w-full p-[20px]">
      <h1 className='text-center font-bold text-xl text-[#4D3C77] py-10'>{title}</h1>
      <Swiper
        slidesPerView={4.2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          type: 'progressbar'
        }}
        modules={[FreeMode, Scrollbar, Pagination]}
        className="mySwiper"
      >
         {
          data ? data.map((item,index)=>(
            <SwiperSlide key={item.title}>
              <Link to={item.link}>
                <div className='w-[410px] bg-slate-400 h-[270px] rounded-xl bg-cover p-5 align-bottom flex flex-col justify-end hover:' style={{ backgroundImage: `url(${item.cover})` }}>
                  <h1 className="text-white font-bold text-xl">{item.title}</h1>
                  <span className="text-[#ffb400] font-semibold text-md">{item.type}</span>
                </div>
              </Link>
              
            </SwiperSlide>
          )) : <div>Loading</div>
        }
      </Swiper>
       
        
    </section>
  )
}

export default MovieSlider