import React from 'react'
import img from '../../assets/Vector (30).png'
import img2 from '../../assets/Group (9).png'
import img3 from '../../assets/Vector (31).png'
import phoneimg from '../../assets/Group 4534343 (1).jpg'
import smallimg1 from '../../assets/Group 2 (2).png'
import smallimg2 from '../../assets/Group 3 (1).png'
import Header2 from '../../Layout/Header2'
const TradeCompromise = () => {
  return (
    <>
   
      <div style={{
        paddingBottom:"100px"
      }} >
      <div className='d-flex justify-content-center mt-3'>
      <p className='platform_button'>Trade</p>
      </div>
    <h1 className='solutions_head margin_bottom_none' >Trade Without Compromise</h1>
<p className='solutions_head_para' >Our app and platforms give you every possible edge</p>
<div className='compromise_wrapper'>
    <div className='left_compromise_div'>
    <div className='d-flex left_compromise'>
    <div className='compromise_logo'>
            <img src={img}/>
        </div>
        <div className='compromise_details'>
            <h3>Mobile App</h3>
            <p>Intuitive and packed with tools and features, trade on the go with one-swipe<br/>
            trading. Tradingview charts and our exclusive performance Analytics tool</p>
        </div>
    </div>


    <div className='d-flex left_compromise'>
    <div className='compromise_logo'>
            <img src={img2}/>
        </div>
        <div className='compromise_details'>
            <h3>Web trading</h3>
            <p>Access TradingView charts will over 80 indicators, Reuters news feeds,<br/>
            behavioural science technology and much more</p>
        </div>
    </div>


    <div className='d-flex left_compromise'>
    <div className='compromise_logo'>
            <img src={img3}/>
        </div>
        <div className='compromise_details'>
            <h3>Mobile App</h3>
            <p>The powerful Meta Trader platform comes packed with tools, features,<br/>
            and the type of execution that has made it popular among experienced<br/>
            traders - and unlike most Meata Trader 5 platforms, You’ll have access<br/>
            to integrated Reuters news as standard</p>
        </div>
    </div>


    
       
    </div>
    <div className='right_compromise_div'>
         <div className='right_phone'>
                <div className='simple_advanced_div'>
                    <p className='active'>Simple</p>
                    <p className='active_not'>Advanced</p>
                </div>
                <h3>$114,45</h3>
                <h6>34,775$ (43,65%)</h6>
                <div className='phone_inside_img'>
                    <img src={phoneimg}/>
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
                        <img src={smallimg1}/>
                    </div>
                    <div className='right_small_img1'>
                        <img src={smallimg2}/>
                    </div>
                </div>
    </div>
</div>
      </div>
    </>
  )
}

export default TradeCompromise
