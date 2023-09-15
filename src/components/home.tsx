import React from "react";
import PopularMovieSlider from "./popularMovieSlider";
import { getTrendingMovies, getHomes } from "../helper";
import MovieCard from "./movieCard";

interface Movie {
    id: number,
    title: string,
    release_date: string,
    poster_path: string,
    vote_average: number,
    movies: any
}
const Home = () => {
    React.useEffect(() => {
        document.title = 'Home - Moviester';
    }, []);
    
    const [homeMovies, setHomeMovies] = React.useState(null as Movie[]);
    console.log(homeMovies)
    React.useEffect(() => {
        getHomes().then((respone) => {
            setHomeMovies(respone.data.data);
        });
    }, []);
    return (
        <>
            <PopularMovieSlider />
             {!!homeMovies &&
                homeMovies.map((item)=>(
                    <section className="container container--pall">
                    <div className="trending">
                        <h2 className="text-white">Hello</h2>
                        <h2 className="trending__title">{item.title}</h2>
                        <div className="trending__movies">
                            {item.movies.map((movie:any) => {
                                return (
                                    <MovieCard key={movie.title}
                                        poster={movie.cover}
                                        releaseDate={movie.year}
                                        title={movie.title}
                                        id={movie.link}
                                        voteAverage={movie.imdb} />)
                            })}
                        </div>
                    </div>
                    </section>
                ))
           
            }
        </>
    );
}

export default Home;