import React, { useState } from 'react'
import SidebarLogo from '../assets/268e6df2-6afb-485c-8df5-7af5c055fb8e-removebg-preview 1 (1).png'
import DashboardLogo from '../assets/box1.png'
import StatisticLogo from '../assets/wpf_statistics.png'
import TransactionLogo from '../assets/decred.png'
import TradeLogo from '../assets/trade.png'
import SettingLogo from '../assets/Vector.png';
import LogOut from '../assets/Vector (32).png'
import {NavLink} from 'react-router-dom'
const Sidebar = ({openSidebar}) => {
  
  return (
    <>
       <div className="sidebar-section">
      <div className="cross-btn" onClick={openSidebar}><i class="fa-solid fa-circle-xmark"></i></div>
      <div className="sidebar-wrapper">
      
        <div className="sidebar-logo"><img src={SidebarLogo} alt="" /></div>
        <div className="side-menubar" style={{
            marginTop:'30px'
        }}>
          <div><NavLink to = '/dashboard' className="menu ">
          {/* <img src={DashboardLogo} alt="" /> */}
          <i class="fa-solid fa-cube"></i>
          <span>Dashboard</span></NavLink></div>
          <div><NavLink to = '/stats' className="menu">
          {/* <img src={StatisticLogo} alt="" /> */}
          <i class="fas fa-chart-line"></i>
          <span>Statistics</span></NavLink></div>
          <div ><NavLink to = '/transaction' className="menu">
          {/* <img src={TransactionLogo} alt="" /> */}
          <i class="fa-solid fa-money-bill-transfer"></i>
          <span>Transaction</span></NavLink></div>
          <div><NavLink to = '/trade' className="menu">
          <img src={TradeLogo} alt="" />
          <span>Trade</span></NavLink></div>
          <div><NavLink to = '/accountdetails' className="menu">
          {/* <img src={SettingLogo} alt="" /> */}
          <i class="fa-solid fa-sliders"></i>
          <span>Account Setting</span></NavLink></div>
          <div><NavLink to = '/' className="menu">
          {/* <img src={LogOut} alt="" /> */}
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Log out</span></NavLink></div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
