import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/A4-1000_Amazon_GRD_DesktopHero_Usescase_Breakfast_DT_3000x1200_EN_V2._CB430591228_.jpg" alt=""/>
      {basket?.length === 0 ? (
        <div className="checkout__basket">
          <h2 className="checkout__title">Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click "Add to basket" below the item.
          </p>
        </div>
      ): (
        <div>
          <h2>Your Shopping Basket</h2>
          <div className="checkout__items">
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout;