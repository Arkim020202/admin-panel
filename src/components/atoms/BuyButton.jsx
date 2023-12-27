import React from 'react'

function BuyButton({children, className}) {
  return (
    <button className={className} >{children}</button>
  )
}

export default BuyButton