import React, { useState } from 'react'
import './SignIn.css'
import google from '../../assets/Ellipse 2196.png'
import facebook from '../../assets/Ellipse 2196 (1).png'
import twitter from '../../assets/Ellipse 2196 (2).png'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
 const [show,setshow] = useState(false)
 const navigate =useNavigate()
 const toggleShow = () => {
  setshow(!show)
 }
  return (
    <>
          <section>
            <div className='all-wrapper-div'>
             <div className='sign-in-background-main'>
                <div className='sign-in-box-main'>
                    <div className='sign-in-form-box'>
                        <h3 className='text-center sign-in-head'>Sign in</h3>
                        <form>
                            <div className='form-div mt-3'>
                            <label className='email-label'>Enter Your E-Mail</label>
                            <div className='input-div'>
                                <input type='email' className='email-input'/>
                            </div>
                            </div>

                            <div className='form-div mt-4'>
                            <label className='email-label'>Enter Your Password</label>
                            <div className='input-div relative'>
                                <input type={show == true ? 'text' : 'password'} className='password-input'/>
                            { !show && <i onClick={toggleShow} class="fa-solid fa-eye-slash fa-flip-horizontal text-dark"></i>}
                              { show &&  <i onClick={toggleShow} class="fa-solid fa-eye fa-flip-horizontal text-dark"></i>}
                            </div>
                            <div className='forgot-password-div'>
                                <p className='forgot-password-para'>Forgot Password</p>
                            </div>
                            </div>

                            <div className='login-btn-div'>
                                <button className='login-btn' onClick={(()=>navigate('/dashboard'))}>Login</button>
                            </div>
                            <div className='or-div'>
                                <p>OR</p>
                            </div>
                            <div className='social-icons-div'>
                            <div className='social-img'>
                            <img src={google}></img>
                            </div>
                            <div className='social-img'>
                            <img src={facebook}></img>
                            </div>
                            <div className='social-img'>
                            <img src={twitter}></img>
                            </div>
                             
                                
                         
                            </div>
                        </form>
                      
                    </div>
                    <div className='create-account-button-div'>
                            <button className='create-account-btn'>Create an account</button>
                        </div>
                </div>
             </div>    
            </div>
          </section>
    </>
  )
}

export default SignIn
