import React,{useEffect, useState} from 'react'
import { getSliders } from '../helpers/FetchData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar,  Autoplay } from 'swiper/modules';
const CoverSlider = () => {
    const [sliderData, setSliderData] = useState();
    useEffect(() => {
        getSliders().then((res)=>{setSliderData(res.data.data)})
    }, [])
  return (
    <div className='w-full md:mb-[130px] mb-[45px]'>
        <Swiper
        scrollbar={{
          hide: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[]}
        className="mySwiper"
      >
        { sliderData &&
            sliderData.map((item,index)=>(
                <SwiperSlide>
                    <Link to={item.link}>
                        <div className="w-full h-[900px] bg-cover flex flex-col justify-end before:content-[''] before:bg-black before:h-full before:w-full before:absolute before:opacity-50" style={{ backgroundImage: `url(${item.cover})` }}>
                            <div className='md:px-[200px] px-[20px] pb-[320px] mb-[150px]'>
                               
                                <div className='absolute z-10 w-full'>
                                    <h1 className="text-white text-[42px] font-bold">{item.title}</h1>
                                    <div className="text-white flex flex-row gap-4 text-sm">
                                        <span className = "bg-[#f6511d] font-bold text-sm px-2 text-black rounded-full">{item.quality}</span>
                                        <span>{item.imdb}</span>
                                        <span>{item.duration}</span>
                                        <span>{item.year}</span>
                                        <span>{item.type}</span>
                                    </div>
                                    <Link to={item.link}><span className='bg-[#ffb400] text-md font-medium py-3 px-5 rounded-full inline-block mt-10'>Watch Now</span></Link>
                                </div>   
                            </div>
                        </div>
                    </Link>
                    
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    </div>
  )
}

export default CoverSlider