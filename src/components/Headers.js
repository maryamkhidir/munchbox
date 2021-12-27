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
      const startersPos = document.getElementById('starters').getBoundingClientRect().top
      const mainMealPos = document.getElementById('main_meal').getBoundingClientRect().top
      const dessertsPos = document.getElementById('desserts').getBoundingClientRect().top
      if (dessertsPos < 1) {
        setscrollSelect('desserts')
      } else if (mainMealPos < 1) {
        setscrollSelect('main_meal')
      } else if (startersPos < 1) {
        setscrollSelect('starters')
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
          <button onClick={() => scrollTo('starters')}>Starters</button>
          <button onClick={() => scrollTo('main_meal')}>Main Meals</button>
          <button onClick={() => scrollTo('desserts')}>Desserts</button>
        </div>
      </section>
      {isSticky ?
        <section id='sticky-header' className='sticky-header sticky'>
          <div className='container'>
            <button className={scrollSelect === 'starters' ? `${scrollSelect}` : null} onClick={() => scrollTo('starters')}>Starters</button>
            <button className={scrollSelect === 'main_meal' ? `${scrollSelect}` : null} onClick={() => scrollTo('main_meal')}>Main Meals</button>
            <button className={scrollSelect === 'desserts' ? `${scrollSelect}` : null} onClick={() => scrollTo('desserts')}>Desserts</button>
          </div>
        </section>
        : null}
    </>
  )
}