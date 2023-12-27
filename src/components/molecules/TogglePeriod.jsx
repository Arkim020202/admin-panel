import React from 'react'
import SubscriptionPeriodButton from '../atoms/SubscriptionPeriodButton'
import { Period } from '../../service/atom'
import { useRecoilState } from 'recoil'

function TogglePeriod() {
  const[period, setPeriod] = useRecoilState(Period)

  function handleToggle (e){
    if(e.target.firstChild.textContent === "Annual"){
      setPeriod("Annual")
    }
    else{
      setPeriod("Monthly")
    }
  }
  return (
    <>
    {
      period === "Annual" ? (<div className='ml-[50px] w-[164px] h-[30px] rounded-[30px] flex justify-between  mt-[41px] '>
      <SubscriptionPeriodButton onClick={handleToggle} className="w-[48.8%] h-full bg-primary text-white rounded-[30px] text-[14px] font-bold " >Annual</SubscriptionPeriodButton>
      <SubscriptionPeriodButton onClick={handleToggle} className="w-[48.8%] h-full text-[#637381] font-bold rounded-[30px] " >Monthly</SubscriptionPeriodButton>
  </div>) : (<div className='ml-[50px] w-[164px] h-[30px] rounded-[30px] flex justify-between  mt-[41px] '>
        <SubscriptionPeriodButton onClick={handleToggle} className="w-[48.8%] h-full  text-[#637381] rounded-[30px] text-[14px] font-bold " >Annual</SubscriptionPeriodButton>
        <SubscriptionPeriodButton onClick={handleToggle} className="w-[48.8%] h-full  bg-primary text-white  font-bold rounded-[30px] " >Monthly</SubscriptionPeriodButton>
    </div>)
    }
    </>
    
  )
}

export default TogglePeriod