import React from 'react'
import SidebarLogo from '../assets/268e6df2-6afb-485c-8df5-7af5c055fb8e-removebg-preview 1 (1).png'
import DashboardLogo from '../assets/box1.png'
import StatisticLogo from '../assets/wpf_statistics.png'
import TransactionLogo from '../assets/decred.png'
import TradeLogo from '../assets/trade.png'
import SettingLogo from '../assets/Vector.png';
import LogOut from '../assets/Vector (32).png'
const Sidebar = () => {
  return (
    <>
      <div className='sidebar-section'>
      <div className="sidebar-wrapper">
        <div className="sidebar-logo"><img src={SidebarLogo} alt="" /></div>
        <div className="side-menubar" style={{
            marginTop:'30px'
        }}>
          <div><a href="#" className="menu active"><img src={DashboardLogo} alt="" /><span>Dashboard</span></a></div>
          <div><a href="#"  className="menu"><img src={StatisticLogo} alt="" /><span>Statistics</span></a></div>
          <div ><a href="#" className="menu"><img src={TransactionLogo} alt="" /><span>Transaction</span></a></div>
          <div><a href="#" className="menu"><img src={TradeLogo} alt="" /><span>Trade</span></a></div>
          <div><a href="#"  className="menu"><img src={SettingLogo} alt="" /><span>Account Setting</span></a></div>
          <div><a href="#"  className="menu"><img src={LogOut} alt="" /><span>Log out</span></a></div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
