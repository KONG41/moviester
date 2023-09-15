import React from 'react'
import {Link} from 'react-router-dom'
const MovieCard = ({data}) => {
    console.log('Movie Cart',data);
  return (
    <section className='w-full p-[20px]'>
        {  data ?
            data.map((item,index)=>(
                <div key="item.title" className="border-t-2 border-[#e6e4ec73]"> 
                    <h1 key={item.title} className='text-center font-bold text-3xl text-[#4D3C77] py-10'>{item.title}</h1>
                    <div className="flex flex-wrap">
                        {
                          item.movies.map((movie,index_movie)=>(
                            <Link to={movie.link}>
                                <div className='w-[210px] m-2 mb-6'>
                                    <div key={`${index_movie}_${movie.title}`} className='w-[210px] h-[270px] rounded-lg bg-slate-400 hover:shadow-25xl' style={{ backgroundImage: `url(${movie.cover})` }}>
                                        <span className="bg-[#f6511d] text-xs font-bold px-1 ">{movie.quality}</span>
                                    </div>
                                    <div>
                                        <div className="flex flex-row justify-between py-1 text-sm">
                                            <span className="">{movie.year}</span>
                                            <span className="border border-black bg-[#ffb400] rounded-full px-1">{movie.type}</span>
                                            <span>{movie.duration}</span>
                                        </div>
                                        <h1 className="text=[#4D3C77] font-semibold">{movie.title}</h1>
                                    </div>
                                </div>
                            </Link>
                          ))
                        }
                    </div>
                 </div>
            ))  : <div>Loading</div>
        }
        
    </section>
  )
}

export default MovieCard