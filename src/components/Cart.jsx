import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../services/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const [total, setTotal] = useState
    (0);
    const calculateTotal = () => {
        const result = cart.reduce((a,c) => a+c?.price, 0);
        setTotal(result);
    }

    useEffect(()=>{
        calculateTotal()
    },[total])

  return (
    <div className="my-5">
      <div className="row">
        <div className="col-7">
          <div className="">
            {cart?.map((c) => (
              <div key={c.id} className="mb-5">
                <img src={c?.image} height="100px" alt="" />
                <p>${c?.title}</p>
                <p>${c?.price}</p>
                <button
                  onClick={() => dispatch(removeFromCart(c))}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-5">
          <h3 className="text-primary">Total Price</h3>
          <h2 className="text-warning">${total}</h2>
        </div>
      </div>
    </div>
  );
}

export default Cart