import React from 'react'
import img from '../../assets/image.png'
import img2 from '../../assets/image (1).png'
import img3 from '../../assets/image (2).png'
const Beginner = () => {
  return (
    <>
      <div className='beginner_wrapper'>
      <div className='simple_advanced_div2'>
            <p className='active'>Anbitious beginner</p>
            <p className='active_not'>Experienced trader</p>
        </div>
        <div className='guides_card_wrapper'>
            <div className='guide_card_1'>
          
                <div className='img_div_656'>
                <img src={img}/>
                </div>
                <h1 className='card_head'>Beginner Guides</h1>
                <p className='card_para'>Beginner guides offer essential insights, simplifying
complex topics into manageable steps, and 
providing newcomers with a roadmap to navigate
the initial stages of learning</p>
            </div>
            <div className='guide_card_2'>
            <div className='img_div_656'>
                <img src={img2}/>
                </div>
                <h1 className='card_head'>Intermediate Guides</h1>
                <p className='card_para'>Intermediate guides bridge the gap between basic
knowledge and advanced skills, equipping learners
with deeper insights, nuanced strategies and the
confidence to tackle more complex challenges</p>
            </div>
            <div className='guide_card_3'>
            <div className='img_div_656'>
                <img src={img3}/>
                </div>
                <h1 className='card_head'>Expert Guides</h1>
                <p className='card_para'>Expert guides propel seasoned practitioners to the
pinnacle of proficiency, offering advanced insights,
intricate methodologies, and specialized knowled
ge to refine skills and elevate their expertise</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Beginner
