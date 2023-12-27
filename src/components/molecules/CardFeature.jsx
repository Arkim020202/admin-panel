import React from 'react'
import CheckIcon from '../atoms/CheckIcon'

function CardFeature({children}) {
  return (
    <div className='flex items-center justify-start gap-x-[11px] mb-[11px]  '>
        <CheckIcon/>
        <p className='text-[14px] font-normal text-[#637381] flex items-center justify-center gap-1 cursor-default '>{children}</p>
    </div>
  )
}

export default CardFeature