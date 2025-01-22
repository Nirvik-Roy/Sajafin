import {React , useEffect }from 'react'
import Header2 from '../../Layout/Header2'
import './Dashboard.css'
import img from '../../assets/search-normal.png'
import date from '../../assets/clarity_date-line.png'
import down from '../../assets/Vector (33).png'
import img5 from '../../assets/image.png'
import img6 from '../../assets/image (3).png'
import img7 from '../../assets/image (4).png'
import arrowdown from '../../assets/Vector (34).png'
import arrowup from '../../assets/Vector (35).png'
const Transaction = () => {
      useEffect(()=>{
          window.scrollTo({top:0,behavior:'instant'})
        },[])
  return (
    <>
      <Header2 name={'Transactions'}/>
      <div className='dashboard-container' style={{
        paddingBottom:'30px'
      }}>
        <div className='transcation_search_date_wrapper'>
            <div className='transaction_search'>
                <input type='text' placeholder='Search'/>
                    <img  src={img}/>
            </div>
            <div className='transaction_calender'>
                 <img className='img1' src={date}/>
                 <div>
                    <p>Filter Periode</p>
                    <span>4 Jan 2025 - 20 feb 2025</span>
                 </div>
                 <img className='img2' src={down}/>
            </div>
        </div>
        <div className='transcation_table_wrapper' style={{
            overflow:'hidden'
        }}>
            <table>
                <thead>
                    <tr style={{
                        borderBottom:'1px solid black'
                    }}>
                        <th className='table_head_1'>
                            <input type='checkbox'/>
                        </th>
                        <th className='table_head_2'>
                            <p style={{
                                fontWeight:'500'
                            }}>Transaction ID</p>
                        </th>
                        <th className='table_head_3'>
                            <p style={{
                                fontWeight:'500'
                            }}>Date</p>
                        </th>
                        <th className='table_head_4'>
                            <p style={{
                                fontWeight:'500'
                            }}>From</p>
                        </th>
                        <th className='table_head_5'>
                            <p style={{
                                fontWeight:'500'
                            }}>To</p>
                        </th>
                        <th className='table_head_6'>
                            <p style={{
                                fontWeight:'500'
                            }}>Coin</p>
                        </th>
                        <th className='table_head_7'>
                            <p style={{
                                fontWeight:'500'
                            }}>Amount</p>
                        </th>
                        <th className='table_head_8'>
                            <p style={{
                                fontWeight:'500'
                            }}>Note</p>
                        </th>
                        <th className='table_head_9'>
                            <p style={{
                                fontWeight:'500'
                            }}>Status</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {[1,2,3,4,5,6,7,].map((e,i)=>{
                    return(
                        <>
                        <tr className='table_row' style={{
                            borderBottom:'1px solid black'
                        }}>
                        <td className='table_data_1'
                        >
                            <div className='green_div'>
                                <img src={arrowdown}/>
                            </div>
                        </td>
                        <td className='table_data_1'>#12415346563475</td>
                        <td className='table_data_1'>2/1/2025 06:23 AM</td>
                        <td className='table_data_1'>Thomas</td>
                        <td className='table_data_1'>
                            <div className='img_div_Wrapper'>
                            <img src={img6}/>
                                <p >Ashlynn</p>
                            </div>
                        </td>
                        <td className='table_data_1'>
                            <div className='img_div_Wrapper' style={{
                                columnGap:"5px"
                            }}>
                            <img style={{
                                width:'100%',
                                maxWidth:'20px',
                                minWidth:'20px',
                                height:'20px',
                                borderRadius:'50%'
                            }} src={img7}/>
                                <p >Bitcoin</p>
                            </div>
                        </td>
                        <td className='table_data_1 text-success'>
                        +$5,553
                        </td>
                        <td className='table_data_1'>
                      Lorem ipsum dol...More
                        </td>
                        <td className='table_data_1'>
                            <button style={{
                                borderRadius:'20px',
                                fontSize:'13px',
                                padding:'9px 20px'
                            }} className='btn-success btn'>COMPLETED</button>
                        </td>
                    </tr>
                        </>
                    )
                })}

                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Transaction
