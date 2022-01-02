import { useEffect, useState } from 'react';
import logoImg from '../assets/images/logo.png';
import cartImg from '../assets/images/cart.svg';
import { SvgIcon } from "./Icon";
import { useSelector, useDispatch } from 'react-redux';
import { cartItems } from '../app/cart';


export const MainHeader = (props) => {
  const items = useSelector(cartItems);
  function mobileCartToggle() {
    const m = document.querySelector('.mobile-cart')
    if (m.classList.contains('active')) {
      m.classList.remove('active')
    } else {
      m.classList.add('active')
    }
  }
  const scrollTo = (elementId) => {
    const elementPos = document.querySelector(elementId).getBoundingClientRect().top
    window.scrollTo({
      top: elementPos + window.scrollY,
      behavior: 'smooth',
    })
  }
  return (
    <header className='main-header'>
      <div className="container">
        <img src={logoImg} id='logo' alt='logo' />
        <nav className="main-nav">
        {items.length !== 0 ? <div className='badge'>{items.length}</div> : null}
          <SvgIcon
            color='#ED3338'
            hoverColor='#333'
            width='35px'
            height='35px'
            image={cartImg}
            onClick={() => {
              scrollTo('.order .orderForm')
              // setmobileCartActive(state => !state)
              mobileCartToggle()
              }}
          />
        </nav>
      </div>
    </header>
  )
}

export const StickyHeader = (props) => {
  const [isSticky, setisSticky] = useState(false)
  const [scrollSelect, setscrollSelect] = useState(null)
  useEffect(() => {
    const stickyHeader = document.getElementById('sticky-header')
    const stickyPos = stickyHeader.getBoundingClientRect().top + window.scrollY
    const w = window.addEventListener('scroll', (e) => {
      const s = stickyHeader.getBoundingClientRect()
      if (s.top <= 0) {
        setisSticky(true)
      }
      if (window.scrollY <= stickyPos) {
        setisSticky(false)
      }
    })

    return () => {
      window.removeEventListener(w)
    }
  }, [])
  useEffect(() => {
    const w = window.addEventListener('scroll', () => {
      const mealsPos = document.getElementById('meals').getBoundingClientRect().top
      const sidesPos = document.getElementById('sides').getBoundingClientRect().top
      const grillsPos = document.getElementById('grills').getBoundingClientRect().top
      const swallowsPos = document.getElementById('swallows').getBoundingClientRect().top
      const combosPos = document.getElementById('combos').getBoundingClientRect().top
      const soupsPos = document.getElementById('soups').getBoundingClientRect().top
      const proteinPos = document.getElementById('protein').getBoundingClientRect().top
      const drinksPos = document.getElementById('drinks').getBoundingClientRect().top

      if (drinksPos < 1) {
        setscrollSelect('drinks')
      } else if (combosPos < 1) {
        setscrollSelect('combos')
      } else if (grillsPos < 1) {
        console.log("on mmee")
        setscrollSelect('grills')
      } else if (soupsPos < 1) {
        setscrollSelect('soups')
      } else if (proteinPos < 1) {
        setscrollSelect('protein')
      } else if (swallowsPos < 1) {
        setscrollSelect('swallows')
      } else if (sidesPos < 1) {
        setscrollSelect('sides')
      } else if (mealsPos < 1) {
        setscrollSelect('meals')
      } else {
        setscrollSelect(null)
      }
    })
    return () => {
      window.removeEventListener(w)
    }
  }, [])
  const scrollTo = (elementId) => {
    const elementPos = document.getElementById(elementId).getBoundingClientRect().top
    window.scrollTo({
      top: elementPos + window.scrollY,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <section id='sticky-header' className='sticky-header'>
        <div className='container'>
          <button onClick={() => scrollTo('meals')}>Meals</button>
          <button onClick={() => scrollTo('sides')}>Sides</button>
          <button onClick={() => scrollTo('swallows')}>Swallows</button>
          <button onClick={() => scrollTo('protein')}>Proteins</button>
          <button onClick={() => scrollTo('soups')}>Soups</button>
          <button onClick={() => scrollTo('grills')}>Grills & Barbecue</button>
          <button onClick={() => scrollTo('combos')}>Combos</button>
          <button onClick={() => scrollTo('drinks')}>Drinks</button>
        </div>
      </section>
      {isSticky ?
        <section id='sticky-header' className='sticky-header sticky'>
          <div className='container'>
            <button className={scrollSelect === 'meals' ? `${scrollSelect}` : null} onClick={() => scrollTo('meals')}>Meals</button>
            <button className={scrollSelect === 'sides' ? `${scrollSelect}` : null} onClick={() => scrollTo('sides')}>Sides</button>
            <button className={scrollSelect === 'swallows' ? `${scrollSelect}` : null} onClick={() => scrollTo('swallows')}>Swallows</button>
            <button className={scrollSelect === 'protein' ? `${scrollSelect}` : null} onClick={() => scrollTo('protein')}>Proteins</button>
            <button className={scrollSelect === 'soups' ? `${scrollSelect}` : null} onClick={() => scrollTo('soups')}>Soups</button>
            <button className={scrollSelect === 'grills' ? `${scrollSelect}` : null} onClick={() => scrollTo('grills')}>Grills & Barbecue</button>
            <button className={scrollSelect === 'combos' ? `${scrollSelect}` : null} onClick={() => scrollTo('combos')}>Combos</button>
            <button className={scrollSelect === 'drinks' ? `${scrollSelect}` : null} onClick={() => scrollTo('drinks')}>Drinks</button>
          </div>
        </section>
        : null}
    </>
  )
}