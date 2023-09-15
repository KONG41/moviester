import React,{useEffect, useState} from 'react'
import { getHomes } from '../helpers/FetchData'
import CoverSlider from '../components/CoverSlider'
import MovieSlider from '../components/MovieSlider';
import MovieCard from '../components/MovieCard';
const Home = () => {
  const [HomeData, setHomeData] = useState();
  const [Trending, setTrending] = useState();
  // console.log(HomeData);
  useEffect(() => {
    getHomes().then((res)=>{setHomeData(res.data.data)})
  }, [])

  useEffect(()=>{
    if(HomeData){
      HomeData.forEach(e => {
        if(e.title == "Trending Movie"){
          setTrending(e.movies);
        }
      });
    }
  },[HomeData])
  return (
   <section className='w-full'>
      <CoverSlider />
      <MovieSlider data={Trending} title="Trending Now"/>
      <MovieCard data={HomeData}/>
   </section>
  )
}

export default Home