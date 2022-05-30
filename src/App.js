import { useEffect, useState } from "react";
import { CartContext } from "./app/cart";
import { MainHeader, StickyHeader } from "./components/Headers";
import locationImg from './assets/images/location.svg';
import mailImg from './assets/images/mail.svg';
import callImg from './assets/images/call.svg';
import starImg from './assets/images/star.svg';
import { SvgIcon } from "./components/Icon";
import { ProductItem } from "./components/Items";
import { StickyForm } from "./components/Forms";
import { products } from "./app/api";


function App() {
  const [pageLoading, setPageLoading] = useState(true)
  const [mobileCartActive, setmobileCartActive] = useState(false)
  function mobileCartToggle() {
    const m = document.querySelector('.mobile-cart')
    if (m.classList.contains('active')) {
      m.classList.remove('active')
    } else {
      m.classList.add('active')
    }
  }
  return (
    <div className="App" onLoad={() => setPageLoading(false)}>
      { pageLoading? <div className='loader'>
        <div className="loader-icon"></div>
      </div>: null }
      {/* Header */}
      <MainHeader />
      {/* Header End */}
      <section className="hero-order">
        <div className="container">
          <div className="col-1">
            <hr />
            <h1>Munchbox</h1>
            <h5>Your munch box for great food delicacies and fast deliveries</h5>
            <div className="contact-info">
              <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/tAqaUvwv2CDtstEKA"><SvgIcon
                color='#ED3338'
                hoverColor='#ED3338'
                width='14px'
                height='14px'
                image={locationImg}
                onClick={() => alert('clicked')}
              /> Ilero Estate, Tipper Garage, Off Akala Exp. Ib
              </a>
              <a href="tel:+2348165260450"><SvgIcon
                color='#ED3338'
                hoverColor='#ED3338'
                width='14px'
                height='14px'
                image={callImg}
                onClick={() => alert('clicked')}
              /> +2348165260450
              </a>
              <a href="mailto:munchboxnaija@gmail.com" style={{textTransform:'lowercase'}}><SvgIcon
                color='#ED3338'
                hoverColor='#ED3338'
                width='14px'
                height='14px'
                image={mailImg}
                onClick={() => alert('clicked')}
              /> munchboxnaija@gmail.com
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="score">
              <div className="col-1">
                <h5>Excellent <br /><span>Based on 305 reviews</span></h5>
              </div>
              <div className="col-2">
                <SvgIcon
                  color='white'
                  hoverColor='white'
                  width='15px'
                  height='15px'
                  image={starImg}
                  onClick={() => alert('clicked')}
                />
                4.9</div>
            </div>
          </div>
        </div>
      </section>

      <StickyHeader />
      <section className="order">
        <div className="container">
          <div className="col-1">
            <section id="meals" className="items-container">
              <h2>Meals</h2>
              <div className="items">
                {products.meals.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            <section id="sides" className="items-container">
              <h2>Sides</h2>
              <div className="items">
                {products.sides.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            <section id="swallows" className="items-container">
              <h2>Swallows</h2>
              <div className="items">
                {products.swallows.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            <section id="protein" className="items-container">
              <h2>Proteins</h2>
              <div className="items">
                {products.protein.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            <section id="soups" className="items-container">
              <h2>Soups</h2>
              <div className="items">
                {products.soups.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            <section id="grills" className="items-container">
              <h2>Grills & Barbecue</h2>
              <div className="items">
                {products.grills.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            {/* <section id="combos" className="items-container">
              <h2>Combos</h2>
              <div className="items">
                {products.combos.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section> */}
            <section id="drinks" className="items-container">
              <h2>Drinks</h2>
              <div className="items">
                {products.drinks.map((item) =>
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            
          </div>
          <div className="col-2">
            <StickyForm />
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="container">
          <div className="col-1 links">
            <div className="links-container">
              <header>Contacts</header>
              <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/tAqaUvwv2CDtstEKA">Address: Opp. Central Mosque, Zone D, Ilero Estate Tipper Garage, Off Akala Express, Ibadan</a>
              <a href="mailto:munchboxnaija@gmail.com">E-Mail: munchboxnaija@gmail.com</a>
              <a href="tel:+2348165260450">Phone: +2348165260450</a>
            </div>
            <div className="links-container">
              <header>Find Us On</header>

            </div>
          </div>
          <div className="col-2">
            <button>Terms and conditions</button>
            <button>© 2021 Munchbox</button>
          </div>
        </div>
      </footer>
      <div className="mobile-cart">
        <StickyForm  onClick={() => mobileCartToggle()} />
      </div>
    </div>
  );
}

export default App;
