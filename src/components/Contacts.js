import React from 'react'

const Contact = ({ contact}) => {
  return (
    <li className=''>
      {contact.name} - {contact.number} 
    </li>
  )
}

export default Contact