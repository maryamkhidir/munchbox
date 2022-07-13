import React, { useState } from 'react';
import Images from '../assets/imports'
import { selectApp, setSelectedMeal, submitMailListThunk, submitPollThunk } from '../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Checked, Copy, PageBreak } from '../components/OtherComponents';
import PrimaryButton from '../components/PrimaryButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const FoodCard = ({meal}) => {
  const app = useSelector(selectApp)
  const isSelected = (app.selected.id === meal.id)
  const dispatch = useDispatch()

  return (
    <>
    {isSelected && <div className='meal-card__overlay'>
      <Checked />
      <div className='meal-card' style={{visibility:"hidden", marginBottom:0}}>
        <div style={{backgroundImage:`url(${Images[meal.image]})`}} className='meal-card__background'/>
        <div className='meal-card__desc'>
          <h3>{meal.title}</h3>
          <p>{meal.desc}</p>
        </div>
      </div>
    </div>}
    <button className='meal-card' onClick={() => dispatch(setSelectedMeal(meal))}>
      <div style={{backgroundImage:`url(${Images[meal.image]})`}} className='meal-card__background'/>
      <div className='meal-card__desc'>
        <h3>{meal.title}</h3>
        <p>{meal.desc}</p>
      </div>
    </button>
  </>
  )
}


const Content = () => {
  const app = useSelector(selectApp)
  const isSelected = Object.keys(app.selected).length

  return(
    <div className='content'>
     <h2 className='content-message'>You can only have one of these Nigerian meals. Which one will you go for?</h2>
     <div className={isSelected && app.showSummary ? 'content-container selected' : 'content-container'}>
      {app.meals.map((meal, key) => 
        <div className='meal' key={key}>
          <FoodCard meal={meal} />
          {(key < app.meals.length -1) && <PageBreak />}
        </div>
      )}
     </div>
    </div>
  );
}

const BottomNav = () => {
  const app = useSelector(selectApp)
  const meal = app.selected
  const dispatch = useDispatch()

  return(
    <div className='bottom-nav'>
      <div className='selected-card'>
        <div style={{backgroundImage:`url(${Images[meal.image]})`}} className='selected-card__background'/>
        <div className='selected-card__desc'>
          <h3>{meal.title}</h3>
          <p>{meal.desc}</p>
        </div>
      </div>
      <PrimaryButton label={"Proceed"} onClick={() => dispatch(submitPollThunk(meal))} />
    </div>
  )
}

const Dashboard = () => {
  const [showSurvey, handleShowSurvey] = useState(false)
  const app = useSelector(selectApp)
  const isSelected = Object.keys(app.selected).length ? true : false

  return ( 
    <main className="dashboard">
      {!showSurvey && <LandingPopup handleShowSurvey={() => handleShowSurvey(true)} />}
      <Content />
      {(isSelected && app.showSummary) && <BottomNav />}
      {(app.showForm) && <SignupForm />} 
      {(app.showDiscountCode) && <DiscountCode />}
    </main>
  );
}

const LandingPopup = ({handleShowSurvey}) => {
  return(
    <div className='landing'>
      <div className='landing-container'>
        <img className='landing-image' alt='munchbox polls' src={Images.landing} />
        <div className='landing-title'>Hello there, welcome!</div>
        <p className='landing-message'>
        At <strong>Munchbox Restaurants</strong>, we are constantly improving our menu and we would like your opinion on our classic Nigerian delicacies.
        <br/><br/>
        Let's get tasting! 
        </p>
        <PrimaryButton label={"Proceed"} onClick={handleShowSurvey} />

      </div>
    </div>
  )
}

const CustomInput = ({label, type="text", onChange, required=true}) => {
  return(
    <div className='custom-input'>
      <label>{label}</label>
      <input type={type} required={required} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

const SignupForm = () => {
  const app = useSelector(selectApp)
  const meal = app.selected
  const dispatch = useDispatch()
  const [address, setAddress] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form_details = {
      address, email, phone, chosen_meal: meal.title || "" 
    }
    dispatch(submitMailListThunk(form_details))
  }

  return(
    <div className='signup'>
      <div className='signup-container'>
        <div className='signup-title'>Thank you for your feedback!</div>
        <p className='signup-message'>
        To show our appreciation we would like to give you a discount on your next order.
        </p>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <CustomInput label={"Where are you located?"} onChange={setAddress} />
          <CustomInput label="Your email" type="email" onChange={setEmail}/>
          <CustomInput label="Your phone number" type="number" onChange={setPhone}/>
          <PrimaryButton label={"Submit"} type="submit" />
        </form>
      </div>
    </div>
  )
}

const DiscountCode = () => {
  const [isCopied, toggleCopy] = useState(false)
  return(
    <div className='discount'>
      <div className='discount-container'>
        <p className='discount-message'>Copy your discount code:
        </p>
        <div className={isCopied ? 'discount-code' : 'discount-code copied'}>MBPOLL10 
        <CopyToClipboard text={"MBPOLL10"} onCopy={() => toggleCopy(true)}>
          <button><Copy /></button>
        </CopyToClipboard>
        </div>
        {isCopied && <div  className='discount-info'>Copied!</div>}
        <PrimaryButton label={"Use on our website"} onClick={() => window.open("https://munchbox.ng", "_self")} />
      </div>
    </div>
  )
}
 
export default Dashboard;