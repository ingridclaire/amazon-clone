import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/VANS/Q22020/SHL_DetailPage_ILM_ShoppingList_ShoppingList_Desktop_2x._CB420387218_.png" alt=""/>
        {basket?.length === 0 ? (
          <div className="checkout__basket">
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click "Add to basket" below the item.
            </p>
          </div>
        ): (
          <div>
            <h2 className="checkout__basketMessage">Your Shopping Basket</h2>
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
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout;