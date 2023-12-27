import React from 'react'
import DollarIcon from '../atoms/DollarIcon'
import Price from '../atoms/Price'
import PricePerTime from '../atoms/PricePerTime'

function PriceMol({children}) {
  return (
    <div className='w-[60%] h-[62px] flex items-center ml-[24px] mt-[44px] '>
        {children}
    </div>
  )
}

export default PriceMol