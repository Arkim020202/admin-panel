import React from 'react'
import CardFeature from '../molecules/CardFeature'
import TitleFeature from '../atoms/TitleFeature'

function FeatureDescription({children}) {
  return (
    <div className='w-full px-8 h-[214px] mt-7 mb-[30px]'>
      {children}
    </div>
  )
}

export default FeatureDescription