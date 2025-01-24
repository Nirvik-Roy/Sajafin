import React from 'react'
import img from '../../assets/Group 4534344.png'
import img2 from '../../assets/Group 4534345.png'
import img3 from '../../assets/Group 4534346.png'
import img4 from '../../assets/Group 4534347.png'
import img5 from '../../assets/Group 4534348.png'
const HomeMarkets = () => {
  return (
    <>
    <div className='home_market_wrapper'>
        <div className='left_market_div'>
            <div className='left_market_div1'>
            <img src={img4} style={{
                width: '100%',
                height: '100%',
          
              }} />
            </div>
            <div className='left_market_div2'>
              <img src={img} style={{
                width: '100%',
                height: '100%',
          
              }} />
               
            </div>
            <div className='left_market_div3'>
            <img src={img2} style={{
                width: '100%',
                height: '100%',
               
              }} />
            </div>
            <div className='left_market_div4'>
            <img src={img3} style={{
                width: '100%',
                height: '100%',
             
              }} />
            </div>
        </div>
        <div className='right_market_div'>
        <p className='right_market_div-market-btn'>MARKETS</p>
        <h1>Explore top-tier
         

 <br/>
          <span>Trading</span>   conditions<br/>
          today! </h1>
          <span className='span_para'>Discover why Mega Markets is among the World’s <br/>
fastest-growing Forex brokerages, Explore the essential <br/>
benefits awating</span>
<div className='guide_lines_div_wrapper'>
  <div className='list_one_div'>
    <img src={img5}/>
    <span>One-One-One Personal Trading Guidance</span>
  </div>

  <div className='list_one_div'>
    <img src={img5}/>
    <span>Award-Winning Trading Platform</span>
  </div>

  <div className='list_one_div'>
    <img src={img5}/>
    <span>The Lowest Pricing - Guaranted</span>
  </div>

  <div className='list_one_div'>
    <img src={img5}/>
    <span>The fastest Execution Times</span>
  </div>

  <div className='list_one_div'>
    <img src={img5}/>
    <span>Outstanding Customer Support</span>
  </div>

  <div className='list_one_div'>
    <img src={img5}/>
    <span>Deep Liquidity</span>
  </div>
</div>
        </div>
    </div>
    </>
  )
}

export default HomeMarkets
