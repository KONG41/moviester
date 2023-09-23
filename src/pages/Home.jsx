import React,{useEffect, useState} from 'react'
import { getHomes } from '../helpers/FetchData'
import CoverSlider from '../components/CoverSlider'
import MovieSlider from '../components/MovieSlider';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
const Home = () => {
  const [HomeData, setHomeData] = useState();
  const [Trending, setTrending] = useState();
  const [MovieData, setMovieData] = useState([]);
  let array;
  useEffect(() => {
    getHomes().then((res)=>{setHomeData(res.data.data)})
  }, [])

  useEffect(()=>{
    if(HomeData){
      HomeData.forEach(e => {
        if(e.title == "Trending Movie"){
          setTrending(e.movies);
        }else{
         console.log('no trending data')
        }
      });
    }
  },[HomeData])
  return (
   <section className='w-full'>
    {
      HomeData ? 
      <>
        <CoverSlider />
        <MovieSlider data={Trending} title=""/>
        <MovieCard data={HomeData}/>
      </>
      : <Loading/>
    }
      
   </section>
  )
}

export default Home