import React from 'react';
import './Home.css';
import Product from './Product.js';

const Home = (props) => {
  return (
    <div className="home">
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
      <div className="home__row">
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/51VGjDH0-HL._AC_UY879_.jpg"
          title="Washable Face Masks"
          price={21.99}
          id="12321341"
          rating={5}
        />
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/51IhKToobiL._SX329_BO1,204,203,200_.jpg"
          title="I'm Still Here: Black Dignity in a World Made for Whiteness"
          price={16.48}
          id="12321342"
          rating={5}
        />
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/51JM3rldZCL._SX329_BO1,204,203,200_.jpg"
          title="How to Be an Antiracist"
          price={14.79}
          id="12321343"
          rating={5}
        />
      </div>
      <div className="home__row">
      <Product
          image="https://images-na.ssl-images-amazon.com/images/I/615ubcR4fJL._AC_SL1500_.jpg"
          title="Blue Yeti Nanto Premium USB Mic for Recording and Streaming"
          price={99.99}
          id="12321344"
          rating={5}
        />
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/61b%2Bn3cdS4L._AC_SL1441_.jpg"
          title="Stasher 100% Silicone Reusable Food Bag"
          price={11.62}
          id="12321345"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/61rP-DZeh4L._AC_SL1500_.jpg"
          title="Nebula Soundbar - Fire TV Edition"
          price={229.99}
          id="12321346"
          rating={5}
        />
      </div>
    </div>
  )
}

export default Home;