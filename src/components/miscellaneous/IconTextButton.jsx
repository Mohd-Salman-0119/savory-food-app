import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const IconTextButton = ({icon, text, className}) => {
  return (
    <div className={`items-center py-1 gap-2 flex ${className}`}>
      <FontAwesomeIcon icon={icon}/>
      <h1>{text}</h1>
    </div>
  )
}

export default IconTextButton
