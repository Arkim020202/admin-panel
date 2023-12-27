import React from 'react'

function PricePerTime({children}) {
  return (
    <p className='text-[14px] font-bold text-[#637381] pt-[22px] text-start pr-2 '>/{children}</p>
  )
}

export default PricePerTime