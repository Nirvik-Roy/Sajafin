import {React , useEffect} from 'react'
import Header2 from '../../Layout/Header2'
import img from '../../assets/image (4).png'
import TradeChart from './TradeChart'
import plus from '../../assets/Vector.jpg'
import tradeimg from '../../assets/image 1 (1).png'
const Trading = () => {
      useEffect(()=>{
          window.scrollTo({top:0,behavior:'instant'})
        },[])
  return (
    <>
     <Header2 name={"Trade"}/>
     <div className='dashboard-container'>
        <div className='trader_wrapper'>
            <div className='trader_div_left' >
                <p className='bitcoin_para'><img src={img}/>Bitcoin / U.S. Dollar - 1D - BITSTAMP</p>
                <TradeChart/>
               {/* <img className='trading_img55' src={tradeimg}/> */}
            </div>
            <div className='trader_div_right d-flex justify-content-center' >
                <div className='current_balance_div'>
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
                    }} className='btn btn-success trade-chart-button'>Withdraw</button>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Trading
