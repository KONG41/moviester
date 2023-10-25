import React from 'react'
import titleIcon from '../../assets/logo/MovieSter_Logo_Shapes.png'
const SectionTitle = ({title}) => {
  return (
    <h1 className='md:text-3xl text-xl text-[#cdcdcd] font-bold flex items-center gap-3 md:my-12 my-7'><img src={titleIcon} alt={title} className='md:w-[25px] w-[20px]'/>{title}</h1>
  )
}

export default SectionTitle