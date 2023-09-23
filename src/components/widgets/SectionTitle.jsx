import React from 'react'
import titleIcon from '../../assets/logo/MovieSter_Logo_Shapes.png'
const SectionTitle = ({title}) => {
  return (
    <h1 className='text-3xl text-[#cdcdcd] font-bold flex items-center gap-3 my-12'><img src={titleIcon} alt={title} className='w-[25px]'/>{title}</h1>
  )
}

export default SectionTitle