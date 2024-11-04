import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarItem({to,title,icon,extraStyle,spanStyle}) {
    return (
        <NavLink className={`text-white flex items-center space-x-5 mb-6 text-[18px] font-bold  ${extraStyle}`} to={to} >
            {icon}
            <span className={`${spanStyle}`}>{title}</span>
        </NavLink>
    )
    
}

export default NavbarItem
