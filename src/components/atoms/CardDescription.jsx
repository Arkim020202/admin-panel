import React from 'react'

function CardDescription({children}) {
  return (
    <p className=' w-[100%] h-[60px] text-[13px] font-normal text-[#637381]   '>
      {children}
    </p>
  )
}

export default CardDescription