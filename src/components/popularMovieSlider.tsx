import React from "react";
import { Link, useHistory } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import { getPopularMovies, backdropPath, getSliders } from "../helper";

interface Movie {
  id: number,
  backdrop_path: string,
  title: string,
  vote_average: number,
  release_date: string,
  overview: string,
  cover: string,
  link: string,
  year: string
  imdb:string,
  quality: string
}

const PopularMovieSlider = () => {
  const [sliderMovies, setSliderMovies] = React.useState(null as Movie[]);
  const history = useHistory();

  React.useEffect(() => {
    getSliders().then((respone) => {
      setSliderMovies(respone.data.data);
    });
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider">
      {!!sliderMovies && <Slider {...settings}>
        {sliderMovies.map((movie) => {
          return <div key={movie.title} className="slider__slide">
            <div className="slider__slide__image" style={{ backgroundImage: `url(${movie.cover})` }}>
              <div className="container">
                <div className="slider__info" >
                  <Link to={movie.link} className="slider__info__link">
                    <h1>{movie.title}</h1>
                  </Link>
                  <div className="slider__info__meta">
                    <a><i className="far fa-calendar-alt"></i> {movie.year}</a>
                    <a><i className="fas fa-star"></i> {movie.imdb}</a>
                  </div>
                  <div className="slider__info__desc">{movie.quality}</div>
                </div>
              </div>
            </div>
          </div>
        })}
      </Slider>}
    </div>
  );
}

export default PopularMovieSlider;