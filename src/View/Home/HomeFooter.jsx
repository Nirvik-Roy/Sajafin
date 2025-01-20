import React from 'react'
import img from '../../assets/Group 74579.png'
const HomeFooter = () => {
  return (
    <>
      <div className='footer_wrapper'>
      <div className='universal_container'>
            <div className='footer_content_Wrapper'>
                <div className='footer_div1'>
                  <div className='footer_logo_img'>
                    <img src={img}/>
                  </div>
                  <p>Sajafi TRADE for stock ,Forex, Options
Futures, Futures Options and Crypto day
traders</p>
<div className='footer_social_media'>
<i class="fa-brands fa-x-twitter"></i>
<i class="fa-brands fa-youtube"></i>
<i class="fa-brands fa-instagram"></i>
</div>
                </div>
                <div className='footer_div2'>
                    <div className='footer_div_content_1'>
                        <h6>About</h6>
                        <p>About Us</p>
                        <p>Reviews</p>
                        <p>Sign Up</p>
                        <p>Login</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Blog</p>
                        <p>FAQ</p>
                        <p>Software Updates</p>
                        <p>Terms of Use</p>
                        <p>Risk Disclosure</p>
                        <p>Privacy Policy</p>
                        <p>Billing, Cancellation
                        and Refund Policy</p>
                    </div>
                    <div className='footer_div_content_1'>
                    <h6>Solutions</h6>
                    <p>Spreadsheet Trading Journal</p>
                        <p>Option Trading Journal</p>
                        <p>Stock Trading Journal</p>
                        <p>Crypto Trading Journal</p>
                        <p>Referral Program</p>
                        
                    </div>
                    <div className='footer_div_content_1'>
                    <h6>Support</h6>
                    <p>Supported Brokers
Exchanges/
Applications</p>
                        <p>Journal Tutorials</p>
                        <p>Replay Tutorials</p>
                        <p>Help Center</p>
                        <p>How-To</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
     </div>
      </div>
    </>
  )
}

export default HomeFooter
