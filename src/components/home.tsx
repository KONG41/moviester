import React from "react";
import PopularMovieSlider from "./popularMovieSlider";
import { getTrendingMovies, getHomes } from "../helper";
import MovieCard from "./movieCard";

interface Movie {
    id: number,
    title: string,
    release_date: string,
    poster_path: string,
    vote_average: number
}
const Home = () => {
    React.useEffect(() => {
        document.title = 'Home - FMovies';
    }, []);
    
    const [homeMovies, setHomeMovies] = React.useState(null as Movie[]);
    console.log(homeMovies)
    React.useEffect(() => {
        getHomes().then((respone) => {
            setHomeMovies(respone.data.results);
        });
    }, []);
    return (
        <>
            <PopularMovieSlider />
            {/* <TrendingMovies />
            <TopMovies />
            <PopularMovies /> */}

            {/* <section className="container container--pall">
                {!!trendingMovies &&
                    <div className="trending">
                        <h2 className="trending__title">Trending movies</h2>
                        <div className="trending__movies">
                            {trendingMovies.map((movie) => {
                                return (
                                    <MovieCard key={movie.id}
                                        poster={movie.poster_path}
                                        releaseDate={movie.release_date}
                                        title={movie.title} id={movie.id}
                                        voteAverage={movie.vote_average} />)
                            })}
                        </div>
                    </div>}
            </section> */}
        </>
    );
}

export default Home;