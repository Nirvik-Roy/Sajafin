import React from 'react'
import challenge from '../../assets/Group 4534352.png'
import img from '../../assets/Rectangle 27.png'
const Solutions = () => {
  return (
    <>
      <div className='solutions_wrapper' style={{
        paddingBottom:'100px'
      }}>
      <div className='d-flex justify-content-center mt-3'>
      <p className='platform_button'>PLATFORM</p>
      </div>
    <h1 className='solutions_head'>Challenged & Solutions</h1>
<p className='solutions_head_para'>The digital asset and cryptocurrency landscape is one of the biggest wealth generation <br/>
opportunity of our lifetime. But it is a maze of complexities</p>

<div className='simple_advanced_div2'>
            <p className='active'>Challenged</p>
            <p className='active_not'>Solutions</p>
        </div>

        <div className='challenged_div_wrapper'>
            <div className='left_challenged_div'>
                <div className='left_challenge'>
                <div className='challenge_img'>
  <img src={challenge}/>

                </div>
                <p>Investors grapple with understanding deep technology startups,
dynamics of asset issuance and ever-changing market sentiments
fueled by global events and social media</p>
                </div>

                <div className='left_challenge'>
                <div className='challenge_img'>
  <img src={challenge}/>

                </div>
                <p>Investors grapple with understanding deep technology startups,
dynamics of asset issuance and ever-changing market sentiments
fueled by global events and social media</p>
                </div>


                <div className='left_challenge'>
                <div className='challenge_img'>
  <img src={challenge}/>

                </div>
                <p>Investors grapple with understanding deep technology startups,
dynamics of asset issuance and ever-changing market sentiments
fueled by global events and social media</p>
                </div>


                <div className='left_challenge'>
                <div className='challenge_img'>
  <img src={challenge}/>

                </div>
                <p>Investors grapple with understanding deep technology startups,
dynamics of asset issuance and ever-changing market sentiments
fueled by global events and social media</p>
                </div>
            </div>
            <div className='right_challenged_div'>
                <img src={img}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Solutions
