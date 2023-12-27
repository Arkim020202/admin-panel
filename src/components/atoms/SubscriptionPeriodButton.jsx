import React from 'react'

function SubscriptionPeriodButton({children, ...props}) {
  return (
    <button {...props} >{children}</button>
  )
}

export default SubscriptionPeriodButton