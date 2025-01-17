import React from 'react'
import img from '../../assets/Group 4534344.png'
import img2 from '../../assets/Group 4534345.png'
import img3 from '../../assets/Group 4534346.png'
import img4 from '../../assets/Group 4534347.png'
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
        <div className='right_market_div'></div>
    </div>
    </>
  )
}

export default HomeMarkets
