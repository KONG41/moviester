import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from  'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Scrollbar, Pagination, EffectCreative } from 'swiper/modules';

const MovieSlider = ({data,title}) => {
  return (
    <section className="w-full p-[20px] absolute bottom-[-1rem] z-10">
      <div className='w-full lg:w-[930px] md:w-[720px] m-[auto]'>
      <h1 className='text-center font-bold text-xl text-white py-10'>{title}</h1>
      <Swiper
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={0}
         effect={'creative'}
        freeMode={true}
        
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[FreeMode, Pagination, EffectCreative]}
        className="slidePagination"
      >
         {
          data && data.map((item,index)=>(
            <SwiperSlide key={item.title}>
              <Link to={item.link}>
                <div className='md:w-[500px] w-[270px] bg-slate-400 md:h-[290px] h-[170px] rounded-xl bg-cover p-5 align-bottom flex flex-col justify-end hover:' style={{ backgroundImage: `url(${item.cover})` }}>
                  <h1 className="text-white font-bold text-xl">{item.title}</h1>
                  <span className="text-[#ffb400] font-semibold text-md">{item.type}</span>
                </div>
              </Link>
              
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default MovieSlider