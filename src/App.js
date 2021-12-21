import { useContext, useState } from "react";
import { CartContext } from "./app/cart";
import { MainHeader, StickyHeader } from "./components/Headers";
import locationImg from './assets/images/location.svg';
import mailImg from './assets/images/mail.svg';
import callImg from './assets/images/call.svg';
import starImg from './assets/images/star.svg';
import { SvgIcon } from "./widgets/Icon";
import { ProductItem } from "./widgets/Items";
import { StickyForm } from "./widgets/Forms";
import { products } from "./app/api";


function App() {
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
    <div className="App">
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
              <a href="/#"><SvgIcon
                color='#ED3338'
                hoverColor='#ED3338'
                width='14px'
                height='14px'
                image={locationImg}
                onClick={() => alert('clicked')}
              /> Ilero Estate, Tipper Garage, Off Akala Exp. Ib
              </a>
              <a href="/#"><SvgIcon
                color='#ED3338'
                hoverColor='#ED3338'
                width='14px'
                height='14px'
                image={callImg}
                onClick={() => alert('clicked')}
              /> +2348165260450
              </a>
              <a href="/#" style={{textTransform:'lowercase'}}><SvgIcon
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
            <section id="starters" className="items-container">
              <h2>Starters</h2>
              <div className="items">
                {products.starters.map((item, index) =>
                  <ProductItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    price={item.price}
                    image={item.image}
                  />
                )}
              </div>
            </section>
            <section id="main_meal" className="items-container">
              <h2>Main Meal</h2>
              <div className="items">
                {products.main_meal.map((item) =>
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
            <section id="desserts" className="items-container">
              <h2>Desserts</h2>
              <div className="items">
                {products.desserts.map((item) =>
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
              <a href="/#">Address: Opp. Central Mosque, Zone D, Ilero Estate Tipper Garage, Off Akala Express, Ibadan</a>
              <a href="/#">E-Mail: munchboxnaija@gmail.com</a>
              <a href="/#">Phone: +2348165260450</a>
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
