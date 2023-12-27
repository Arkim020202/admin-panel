import React from 'react'
import CardTitle from '../atoms/CardTitle'
import CardDescription from '../atoms/CardDescription'

function CardDescriptionMol({children}) {
  return (
    <div className='w-full pl-[26px] pr-[15px] '>
        {children}
    </div>
  )
}

export default CardDescriptionMol