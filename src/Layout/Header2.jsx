import React from 'react'
import notification_btn from '../assets/Group 4534360.png'
import profile_img from '../assets/Ellipse 2.png'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'
const Header2 = ({name}) => {
    const location = useLocation()
  return (
    <>
    <Sidebar/>
      <div className="header-section">
          <div className="header-section-wrapper dashboard-container">
              <div className="header-left">
              <div className="header-text">
              <h2>{name}</h2>
             {location.pathname == '/mainlayout' && <p style={{
                marginBottom:'none',
                marginTop:"-5px"
              }}>Welcome Back <span>John Smith!</span></p>}
              </div>
                <div className="header-search-box">
                <i class="fa-solid fa-magnifying-glass text-secondary" style={{
                    fontSize:'25px'
                }}></i>
                </div>
              </div>
              <div className="header-right">
                <img src={notification_btn} alt="" className='notify-btn'/>
                <div className="profile-info" style={{
                    columnGap:'15px'
                }}>
                  <div className="profile-img"><img src={profile_img} alt="" /></div>
                  <p style={{
                    marginBottom:0
                  }}>John Smith</p>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Header2
