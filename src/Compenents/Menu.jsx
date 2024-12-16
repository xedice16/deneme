import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <div className='menu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/examples'>Examples</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    )
}
