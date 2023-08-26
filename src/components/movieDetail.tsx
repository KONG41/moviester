import React,{useEffect, useRef, useState} from "react";
import { backdropPath, getMovieDetail, posterPath, getDetailMovie } from "../helper";
import MovieCard from "./movieCard";
import { Link, useHistory, useParams } from "react-router-dom";
import SimilarMovies from "./similarMovies";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import {MdPlayCircleFilled} from 'react-icons/md';

interface Movie {
    overview: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    runtime: number,
    title: string,
    vote_average: number,
    img_cover: string,
    imdb: string,
    des: string,
    genes: MapArray[],
    countries: MapArray[],
    released_date: string,
    director: string,
    productions: MapArray[],
    casts: MapArray[],
    stream: any
    
}

interface MapArray{
    href: string,
    name: string,
    title: string,
}

const Video = (props:any) => {
    const videoNode = useRef(null);
    const [player, setPlayer] = useState(null);
    useEffect(() => {
      if (videoNode.current) {
        const _player = videojs(videoNode.current, props);
        setPlayer(_player);
        return () => {
          if (player !== null) {
            player.dispose();
          }
        };
      }
    }, []);
  
    return (
      <div data-vjs-player>
        <video ref={videoNode} className="video-js"></video>
      </div>
    );
  };

const MovieDetail = () => {
    const { cat,id } = useParams<{ id?: string, cat?:string }>();
    console.log(id);
    const history = useHistory();
    const [movieDetail, setMovieDetail] = React.useState(null as Movie);

 
    console.log(movieDetail);
  

    // const play = {
    //     fill: true,
    //     fluid: true,
    //     autoplay: false,
    //     controls: true,
    //     preload: "metadata",
    //     poster: `${poster}`,
    //     sources: [
    //       {
    //         src: `${streamUrl}`,
    //         //src: 'https://rouf.magnewscontent.org/_v10/89f82bc512278046d91547e26873b2ddfa18eb16cac3d199865d3b72cc4b069b0a2bd584d65a8d41fb8c36890556de1ced217452c3f7d66a611e93cb396af6ead304d6768b07adfdd1fc39ad381d843a49f3e38b3e669af58a930432d5a1ae943bd072a64a76623a5ac1d604ffb1cafb15097f31683abba0f96e4176b7c735077b09f6cfa18ad4155206391e3492cad1/playlist.m3u8',
    //         type: "application/x-mpegURL"
    //       }
    //     ]
    //   };

    React.useEffect(() => {
        getDetailMovie(id).then((respone) => {
            setMovieDetail(respone.data.data);
        
            document.title = `${respone.data.data.title} - FMovies`;
        }).catch(() => history.push('/404'));
    }, [id]);
    

    return (
        <>
            {movieDetail && 
             <section  className="movieDetail">
                <div className="container container--pall">
                    <div className="movieDetail__info flex">
                        <div className="movieDetail__info__cover">
                            {/* <img src={`${movieDetail.img_cover}`} />
                            <span className="playBtn"><MdPlayCircleFilled /></span> */}
                            
                             <div className="video">
                                <Video 
                                { ...{fill: true,
                                    fluid: true,
                                    autoplay: false,
                                    controls: true,
                                    preload: "metadata",
                                    poster: `${movieDetail.img_cover}`,
                                    sources: [
                                      {
                                        src: `${movieDetail.stream.source.file}`,
                                        
                                        type: "application/x-mpegURL"
                                      }
                                    ] }}
                                />
                            </div>
                        </div>
                        <div className="movieDetail__info__body">
                            <div className="thamal">
                                <img src={`${movieDetail.img_cover}`}/>
                                <span></span>
                            </div>
                            <div className="information">
                                <h1 className="information__title">
                                    {movieDetail.title}
                                </h1>
                                <ul>
                                    <li>
                                        <label>Genre:</label>
                                        <p>{movieDetail.genes.map((item)=>(<span>{item.name}, </span>))}</p>
                                    </li>
                                    <li>
                                        <label>Country:</label>
                                        <p>{movieDetail.countries.map((item)=>(<span>{item.name}, </span>))}</p>
                                    </li>
                                    <li>
                                        <label>Release:</label>
                                        <p>{movieDetail.released_date}</p>
                                    </li>
                                    <li>
                                        <label>Director:</label>
                                        <p>{movieDetail.director}</p>
                                    </li>
                                    <li>
                                        <label>Productions:</label>
                                        <p>{movieDetail.productions.map(item=>(<span>{item.name}, </span>))}</p>
                                    </li>
                                    <li>
                                        <label>Cast:</label>
                                        <p>{movieDetail.casts.map(item=>(<span>{item.name}, </span>))}</p>
                                    </li>
                                </ul>
                                <p>{movieDetail.des}</p>
                            </div>
                        </div>
                        {/* <Video { ... play  }/> */}
                    <div>
                </div>
                    </div>
                </div>
               

             </section>
             

             
            }
            
        </>
    );
}

export default MovieDetail;