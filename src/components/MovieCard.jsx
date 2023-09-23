import React from 'react'
import {Link} from 'react-router-dom'
import {IoIosPlayCircle} from 'react-icons/io'
import SectionTitle from './widgets/SectionTitle'
const MovieCard = ({data}) => {
  return (
    <section className='w-full p-[20px]'>
        {  data && 
            data.map((item,index)=>(
                <div key={item.title} className="border-b-2 last:border-0 border-[#e6e4ec42]"> 
                    {/* <h1  className='text-left font-bold text-3xl text-[#fff] py-10'>{item.title}</h1> */}
                    <SectionTitle title={item.title} />
                    <div className="flex flex-wrap">
                        {
                          item.movies.map((movie,index_movie)=>(
                            <Link to={`${movie.link}`} key={`${index_movie}_${movie.title}`}>
                                <div className='w-[210px] m-2 mb-6'>
                                    <div className='w-[210px] h-[270px] rounded-lg bg-slate-400 hover:shadow-25xl relative group' style={{ backgroundImage: `url(${movie.cover})` }}>
                                        <span className='absolute text-6xl hidden items-center justify-center w-full h-full bg-gradient-to-t from-[#ffb30081] rounded-lg from-5% group-hover:flex'><IoIosPlayCircle className="opacity-80"/></span>
                                        <span className="bg-[#f6511d] text-xs font-bold px-1 ">{movie.quality}</span>
                                    </div>
                                    <div className='pt-2'>
                                        <div className="flex flex-row justify-between py-1 text-sm text-white">
                                            <span className="">{movie.year}</span>
                                            <span className="border border-black bg-[#ffb400] rounded-full px-1">{movie.type}</span>
                                            <span>{movie.duration}</span>
                                        </div>
                                        <h1 className="text-white font-semibold">{movie.title}</h1>
                                    </div>
                                </div>
                            </Link>
                          ))
                        }
                    </div>
                 </div>
            ))
        }
        
    </section>
  )
}

export default MovieCard