import React from 'react'
import Description  from "../atoms/SubjectOrDescription"
import TalkToUs from '../atoms/TalkToUs'

function Consultation() {
  return (
    <div className='flex w-[40%] items-center justify-between ml-[50px] mt-[8px]  '>
      <Description className="text-[14px] font-normal text-[#637381] w-[80%] pl-[3px]  pt-[2px] tracking-[0.1px] cursor-default " >Or simply leverage the expertise of our consultation team.</Description>
      <TalkToUs >Talk to us</TalkToUs>
    </div>
  )
}

export default Consultation