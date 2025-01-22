import {React,useEffect} from 'react'
import Header2 from '../../Layout/Header2'
import plus from '../../assets/Vector.jpg'
import tradelogo from '../../assets/image (6).png'
import pattern from '../../assets/Vector 16.png'
import arrowup from '../../assets/Vector (36).png'
import pattern2 from '../../assets/Vector 16 (1).png'
import tradelogo2 from '../../assets/image (7).png'
import tradelogo3 from '../../assets/image (8).png'
import tradelogo4 from '../../assets/image (9).png'
import tradelogo5 from '../../assets/image (10).png'
import tradelogo6 from '../../assets/image (11).png'
import tradelogo7 from '../../assets/image (12).png'
import tradelogo8 from '../../assets/image (13).png'
import arrowdown from '../../assets/Vector (37).png'
import { useNavigate } from 'react-router-dom'
const Trade2 = () => {
  const navigate = useNavigate()
   useEffect(()=>{
      window.scrollTo({top:0,behavior:'instant'})
    },[])
  return (
    <>
      <Header2 name={"Trade"}/>
      <div className='dashboard-container' style={{
        paddingBottom:"50px"
      }}>
      <div className="d-flex justify-content-start align-items-center" style={{
        columnGap:'20px'
      }}>
          <div className="small-div2"><p>Number of Trade</p>
          <p>120</p></div>
          <div className="small-div2"><p>Successful Trade</p><p>40</p></div>
          <div className="small-div2"><p>Profit earned</p><p>60</p></div>
          <div className="small-div2"><p>Lifetime Withdrawal</p><p>60</p></div>
           <div className='current_balance_div2'>
                              <div className='current_balance_head_wrapper'>
                                  <h2>Current Balance</h2>
                                  <img src={plus}/>
                                 
                              </div>
                              <h3>$55,698.48 <span className='text-success'>+1.2%</span></h3>
                              <button style={{
                                  backgroundColor:'rgb(56, 189, 106)',
                                  padding:'15px 20px',
                                  borderRadius:"10px",
                                  border:'none',
                                  marginTop:"15px"
                              }} className='btn btn-success'>Withdraw</button>
                          </div>
        </div>
        <div className='traders_wrapper mt-4'>
            <h4 style={{
                fontWeight:'600'
            }}>Trading</h4>
            <div className="crypto-buttons">
                <div className="crypto-btn">Current Trade </div>
                <div className="crypto-btn active">Watchlist</div>
                <div className="crypto-btn">New on Cashbase</div>
                <div className="crypto-btn">All assests</div>
              </div>
              <div className='trader_cards_wrapper'>
{[tradelogo,tradelogo2,tradelogo3,tradelogo4,tradelogo5,tradelogo6,tradelogo7,tradelogo8,tradelogo,tradelogo2,tradelogo3,tradelogo4,tradelogo5,tradelogo6,tradelogo7,tradelogo8].map((e,i)=>{
    return(
        <>
        <div className='trader_card' onClick={(()=>{navigate('/trading')})}>
                    <div className='trader_logo_wrapper'>
                       <div className='trader_logo'>
                        <img src={e}/>
                       </div>
                       <div className='trade_details_wrapper'>
                        <h5>XAUUSD</h5>
                        <p>Comodity</p>
                       </div>
                    </div>
                    <div className='trade_pattern_div'>
                       {i % 2 ?  <img src={pattern2}/> : <img src={pattern}/>}
                    </div>
                    <div className='trade_details_wrapper'>
                        <h5>120.45</h5>
                       { i % 2 ?  <p className='text-danger d-flex' style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            columnGap:"10px",
                            marginTop:'5px',
                            marginLeft:'3px',
                        }}>1.24% <img src={arrowdown}/></p> : <p className='text-success d-flex' style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            columnGap:"10px",
                            marginTop:'5px',
                            marginLeft:'3px',
                        }}>1.24% <img src={arrowup}/></p>}
                       </div>
                </div>
        </>
    )
})}
             
                
              </div>
        </div>
      </div>
    </> 
  )
}

export default Trade2
