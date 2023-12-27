import React from 'react'
import EditIcon from '../atoms/EditIcon'

function BuildEfficiently({children, className}) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default BuildEfficiently