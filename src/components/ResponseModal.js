import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectApp, setResponse } from '../app/appSlice'
import { CloseThankYou, InfoIcon } from './OtherComponents'

function ResponseModal() {
  const app = useSelector(selectApp)
  const dispatch = useDispatch()
  const [status, title, message] = app.response
  const color = (status === "error") ? "#A53E00" : "#39C580"
  return (
    <div className='response-modal'>
      <div className='response-modal__container'>
        <button onClick={() => dispatch(setResponse([])) }><CloseThankYou /></button>
        <div className='response-modal__container--title' style={{color: color}}>
          <InfoIcon />
          <span>{title}</span>
        </div>
        <div className='response-modal__container--message'>{message}</div>
      </div>
    </div>
  )
}

export default ResponseModal