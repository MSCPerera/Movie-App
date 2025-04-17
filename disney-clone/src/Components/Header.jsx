import React from 'react'
import logo from './../assets/Images/DisneyLogo.png'
import { HiHome, 
    HiMagnifyingGlass, 
    HiStar, 
    HiPlayCircle, 
    HiTv } from 'react-icons/hi2';
import { HiPlus, 
    HiDotsVertical } from 'react-icons/hi';

function Header() {
    const menu=[
        {
            name: 'Home',
            icon:HiHome
        },
        {
            name: 'Search',
            icon:HiMagnifyingGlass
        },
        {
            name: 'Watchlist',
            icon:HiPlus
        },
        {
            name: 'Originals',
            icon:HiStar
        },
        {
            name: 'Movies',
            icon:HiPlayCircle
        },
        {
            name: 'Series',
            icon:HiTv
        }
    ]
  return (
    <div>
        <img src={logo} className='w-[80px]
        md:w-[115px] object-cover' />
    </div>
  )
}

export default Header