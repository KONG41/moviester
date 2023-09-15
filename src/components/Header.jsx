import React from 'react'
import Logo from '../assets/logo/MovieSter_Text.png'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className='flex w-full h-[75px] bg-[transparent] px-[200px] fixed z-10'>
      <div className="w-1/6 p-[10px]">
        <Link to="/"> <img src={Logo} className='h-full'/> </Link>
      </div>
      <div className='w-5/6 flex justify-center items-center'>
        <div className='bg-[#0a0a0a3a] w-fit flex h-fit p-[10px] gap-10 rounded-full'>
          <span className="bg-[#353535] py-[1px] px-[10px] rounded-full text-[#E0E0E0] font-thin text-sm hover:cursor-pointer">Filter</span>
          <input type="text" placeholder='Search movies...' className='w-[320px] bg-[transparent] text-[#E0E0E0] focus: outline-none font-thin'/>
          <BiSearchAlt className='text-[#f6511d] text-xl mr-3 hover:cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Header