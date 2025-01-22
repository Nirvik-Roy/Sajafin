import React, { useEffect } from 'react'
import Header from '../../Layout/Header'
import arrow from '../../assets/Arrow 1.png'
import img1 from '../../assets/Group 2 (2).png'
import img2 from '../../assets/Group 3 (1).png'
import img3 from '../../assets/Group 4534343 (1).jpg'
import './Home.css'
import HomeMarkets from './HomeMarkets'
import Coreprinciples from './Coreprinciples'
import Solutions from './Solutions'
import GetStarted from './GetStarted'
import TradeCompromise from './TradeCompromise'
import Beginner from './Beginner'
import HomeFooter from './HomeFooter'
const Home = () => {
    useEffect(()=>{
       window.scrollTo({top:0,behavior:'instant'})
    },[])
  return (
    <>
        <Header/>
      <div className='universal_container'>
    
      <div className='home_container_wrapper'>
<div className='left_home_div'>
    <div className='left_home_content_div'>
        <p>FINANCE TRADE</p>
        <h1>The Leading Financed<br/>
          <span>Trading</span>  Enterprise within<br/>
the Industry </h1>
    </div>
    <div className='left_small_phone_wrapper'>
        <div className='small_phone_div'>
            <p>Trustpilot</p>
            <div className='small_phone_div_stars_wrapper'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div className='small_phone_details_div'>
            <p>At the forefront of the financial landscape stands our
esteemed trading enterprise, a beacon of excellence
in the industry</p>

<div className='trading_btn_wrapper'>
    <button>Start Trading</button>
    <div className='yellow_circle'>
   <img src={arrow}/>
    </div>
</div>
        </div>
    </div>
</div>
<div className='right_home_div'>
    <div className='right_phone'>
        <div className='simple_advanced_div'>
            <p className='active'>Simple</p>
            <p className='active_not'>Advanced</p>
        </div>
        <h3>$114,45</h3>
        <h6>34,775$ (43,65%)</h6>
        <div className='phone_inside_img'>
            <img src={img3}/>
        </div>
        <div className='phone_bottom_wrapper'>
            <p>D</p>
            <p>W</p>
            <p>M</p>
            <span>6M</span>
            <p>Y</p>
            <p>ALL</p>
        </div>
    </div>
    <div className='right_phone_small_img_wrapper'>
        <div className='right_small_img1'>
            <img src={img1}/>
        </div>
        <div className='right_small_img1'>
            <img src={img2}/>
        </div>
    </div>
</div>
</div>
<div className='total_trades_wrapper'>
    <div className='trade_div_1'>
        <h1>78</h1>
        <p>Total Trades</p>
    </div>
    <div className='trade_div_1'>
    <h1>14</h1>
    <p>Years in Trading</p>
    </div>
    <div className='trade_div_1'>
        <h1>500+</h1>
        <p>Supported Chain</p>
    </div>
</div>
<HomeMarkets/>
<Coreprinciples/>
<Solutions/>
<GetStarted/>
<TradeCompromise/>
<Beginner/>

      </div>
    <HomeFooter/>
    </>
  )
}

export default Home
