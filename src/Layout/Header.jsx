import React from 'react'
import logo from '../assets/268e6df2-6afb-485c-8df5-7af5c055fb8e-removebg-preview 1.png'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
     <div className='universal_container'>
        <div className='nav_wrapper'>
            <div className='nav_logo_img'>
                <img src={logo}/>
            </div>
            <div className='nav_links_wrapper'>
                <NavLink to={'/'} className={'nav_links'}>Trading Platform</NavLink>
                <NavLink to={'/cc'} className={'nav_links'}>Account Type</NavLink>
                <NavLink to={'/cc'} className={'nav_links'}>Education Assets</NavLink>
                <NavLink to={'/cc'} className={'nav_links'}>Firm</NavLink>
                <NavLink to={'/cc'} className={'nav_links'}>Vip</NavLink>
                <NavLink to={'/signin'} className={'nav_links'}>Sign In</NavLink>
            </div>
        </div>
     </div>
    </>
  )
}

export default Header
