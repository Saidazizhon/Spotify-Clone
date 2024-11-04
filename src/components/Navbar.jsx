import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarItem from './NavbarItem'
import { HomeIcon, LibraryIcon, LikedIcon, PlayListIcon, SearchIcon } from '../assets/icons'

function Navbar() {
  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto bg-black'>
        <div className="pt-[70px] pl-[30px]">
            <NavbarItem extraStyle={" opacity-[60%]"} to={"/"} icon={<HomeIcon/>} title={"Home"} />
            <NavbarItem extraStyle={" opacity-[60%]"} to={"/search"} icon={<SearchIcon/>} title={"Search"} />
            <NavbarItem extraStyle={"mb-[49px] opacity-[60%]"} to={"#"} icon={<LibraryIcon/>} title={"Your Library"} />
            <NavbarItem extraStyle={" opacity-[60%]"} to={"#"} icon={<PlayListIcon/>} title={"Create Plalist"} />
            <NavbarItem spanStyle={"opacity-[60%]"} to={"/liked"} icon={<LikedIcon/>} title={"Liked Songs"} />

        </div>
    </div>
  )
}

export default Navbar
