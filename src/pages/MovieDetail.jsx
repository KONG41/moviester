import React, { startTransition, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../helpers/FetchData';
import {IoIosPlayCircle} from 'react-icons/io';
import {CiServer} from 'react-icons/ci';
import {CgClose} from 'react-icons/cg';
import SectionTitle from '../components/widgets/SectionTitle';
import Loading from '../components/Loading';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Modal from "react-modal";
const Video = (props) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current,props);
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
  const {id} = useParams();
  const [movieDetail,setMovieDetail] = useState();
  const [stream,setStream] = useState();
  const [isPlay, setIsPlay] = useState(false);
  
  const handlePlayMovie = () => {
    setIsPlay(!isPlay);
  }
  // const handleClose  = () =>{
  //   setisClose
  // }
  useEffect(() => {
    getDetailMovie(id).then((res)=>{
      setMovieDetail(res.data.data);
      setStream(res.data.data.stream);
    });

  }, [])

  return (
    <section className="text-whit">
      {
        movieDetail ?
        <div>
          <div className='w-full h-[70vh]  relative'>
            <img src={movieDetail.img_cover} className='w-full h-full top-0 object-cover object-top'/>
            <span className='absolute top-0 w-full h-full flex justify-center items-center text-9xl' onClick={handlePlayMovie}><IoIosPlayCircle className='text-[#ffb300d7] hover:text-[#ffb400] hover:cursor-pointer'/></span>
          </div>
          <Modal
            isOpen={isPlay}
            contentLabel="Modal"
            className={{
              base: "w-[90%] h-[auto] modal-base",
              afterOpen: "modal-base_after-open",
              beforeClose: "modal-base_before-close"
            }}
            overlayClassName={{
              base: "overlay-base flex justify-center item-center",
              afterOpen: "overlay-base_after-open",
              beforeClose: "overlay-base_before-close"
            }}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={1000}
          >
              <button onClick={handlePlayMovie} className='float-right text-[#f6511d]'><CgClose/></button>
              <Video {...{
                  fill: true,
                  fluid: true,
                  autoplay: false,
                  controls: true,
                  preload: "metadata",
                  poster: `${movieDetail.img_cover}`,
                  sources: [
                    {
                      src: `${stream.source.file}`,
                      type: "application/x-mpegURL"
                    }
                  ]}}
              />
      

            
          </Modal>
          
         
          <div className='w-full'>
            {/* server play */}
            <div className='m-[auto] w-fit bg-black rounded-full my-7'>
              <span className="text-[#000] inline-block px-7 py-3 rounded-full font-semibold hover:bg-[#ffb400] hover:text-black hover:cursor-pointer bg-[#ffb400]">Vidplay <CiServer    className='inline-block text-lg'/></span>
              <span className="text-[#888] inline-block px-7 py-3 rounded-full font-semibold hover:bg-[#ffb400] hover:text-black hover:cursor-pointer">Filemoon <CiServer   className='inline-block text-lg'/></span>
              <span className="text-[#888] inline-block px-7 py-3 rounded-full font-semibold hover:bg-[#ffb400] hover:text-black hover:cursor-pointer">MyCloud <CiServer    className='inline-block text-lg'/></span>
              <span className="text-[#888] inline-block px-7 py-3 rounded-full font-semibold hover:bg-[#ffb400] hover:text-black hover:cursor-pointer">Streamtape <CiServer className='inline-block text-lg'/></span>
            </div>
            <div className='w-full px-40 flex gap-8 flex-row text-white my-24'>
             <img src={movieDetail.img_cover} alt={movieDetail.img_cover} className='w-[500px] rounded-lg'/> 
             <div>
                <h1 className='text-3xl font-bold text-[#dedede]'>{movieDetail.title}</h1>
                <div className='flex flex-row text-[#dedede]'>
                  <span className='mx-3 mt-3 first:mx-0 rounded-full px-2 text-black font-semibold text-sm bg-[#ffb400]'>{movieDetail.imdb}</span>
                  <span className='mx-3 mt-3 first:mx-0'>{movieDetail.released_date}</span>
                </div>
                <p className='font-light text-[#888888] py-4'>{movieDetail.des}</p>
                <div className='font-semibold py-1'><h1 className='text-[#888888] w-40 inline-block' >Cast:</h1><span className='text-[#cdcdcd]'>{movieDetail.casts && movieDetail.casts.map((item,index)=>(<a key={`casts_${index}`} href={item.href}>{item.title}, </a>))}</span></div>
                <div className='font-semibold py-1'><h1 className='text-[#888888] w-40 inline-block' >Country:</h1><span className='text-[#cdcdcd]'>{movieDetail.countries && movieDetail.countries.map((item,index)=>(<a key={`casts_${index}`} href={item.href}>{item.title}, </a>))}</span></div>
                <div className='font-semibold py-1'><h1 className='text-[#888888] w-40 inline-block' >Genes:</h1><span className='text-[#cdcdcd]'>{movieDetail.genes && movieDetail.genes.map((item,index)=>(<a key={`casts_${index}`} href={item.href}>{item.title}, </a>))}</span></div>
                <div className='font-semibold py-1'><h1 className='text-[#888888] w-40 inline-block' >Production:</h1><span className='text-[#cdcdcd]'>{movieDetail.productions && movieDetail.productions.map((item,index)=>(<a key={`casts_${index}`} href={item.href}>{item.title}, </a>))}</span></div>
             </div>
            </div>
           
           
                        
          </div>
          <div className='px-40'>
            <SectionTitle title="RECOMMENDED" />
            <div className='my-3 w-[520px]'>
              {movieDetail["more-movie"] && movieDetail["more-movie"].map((item, index)=>  (
                item.movies.map((item,index)=>(
                  <a href={item.link} key={item.title} className='flex flex-row items-center bg-[#0f0f0f] my-3 rounded-lg h-[80px] gap-4 group hover:bg-[#ffb400] hover:cursor-pointer'>
                    <img src={item.cover} alt={item.title} className='h-full rounded-s-lg'/>
                    <div className='text-white'>
                      <span className="font-light text-sm text-[#888] group-hover:text-[#0f0f0f]"> {item.type} / {item.year} {!item.duration == '' && `/ ${item.duration}`}</span>
                      <p className="font-semibold text-[#cdcdcd] group-hover:text-[#0f0f0f]">{item.title}</p>
                    </div>
                  </a>
                ))
              ))}
              
            </div>
          </div>
        </div>
        :
       <Loading />
      }
       
    </section>
  )
}

export default MovieDetail