import React from 'react'

function PrimaryButton({onClick, label, type="button"}) {
  return (
    <button onClick={onClick} className='primary-button' type={type}>{label}</button>
  )
}

export default PrimaryButton