import React from 'react'
import Header2 from '../Layout/Header2'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation()
  return (
    <>
     {/* {location.pathname == '/mainlayout' ? <Header2 name='Dashboard'/> : location.pathname == '/statistics' ? <Header2 name={'Satistics'}/> : location.pathname == 'transactions' ? <Header2 name={'Transactions'}/> : location.pathname == 'trade' ? <Header2 name={'Trade'}/> : ''} */}
      <Outlet/>
    </>
  )
}

export default MainLayout
