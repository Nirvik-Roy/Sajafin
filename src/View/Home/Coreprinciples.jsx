import React from 'react'
import img from '../../assets/Group 4534350.png'
import img2 from '../../assets/Group 4534351.png'
import img3 from '../../assets/Group 4534346.png'
import img4 from '../../assets/Group 4534349.png'

import arrow from '../../assets/Arrow 1.png'
const Coreprinciples = () => {
  return (
    <>
      <div className='core_principles_wrapper'>
  <div className='right_market_div'>
        <p>SMART MONEY</p>
        <h1>Core Principles of
         

 <br/>
          <span>Smart Money</span>   Management<br/>
          for Success </h1>
          <span className='span_para'>The core principles of smart money management are the  cornerstone of <br/>
          financial success. These principles revolve around strategic planning. <br/>
          disciplined spending, and prudent decision-making. </span>


<div className='trading_btn_wrapper' style={{
    marginTop:'30px'
}}>
    <button>Start Trading</button>
    <div className='yellow_circle'>
   <img src={arrow}/>
    </div>
</div>
        </div>

                <div className='left_market_div252'>
                    <div className='left_market_div1' style={{
                        display:'flex',
                        justifyContent:'center',
                        padding:'15px 0px'
                    }}>
                    <img src={img4} style={{
                        width: '105%',
                        height: '100%',
                  
                      }} />
                    </div>
                    <div className='left_market_div2' style={{
                        padding:'20px'
                    }}>
                      <img src={img} style={{
                        width: '100%',
                        height: '100%',
                  
                      }} />
                       
                    </div>
                    <div className='left_market_div3'
                    style={{
                        padding:'20px'
                    }}>
                    <img src={img2} style={{
                        width: '100%',
                        height: '100%',
                       
                      }} />
                    </div>
                  
                </div>
      </div>
    </>
  )
}

export default Coreprinciples
