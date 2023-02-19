import React from 'react'
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromFav } from '../services/productSlice';

const FavCard = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={product?.image} height="100px" className='d-block mx-auto mb-3 ' alt="" />
        <h5> {product?.title.substring(0.2)}...</h5>
        <p className="fw-bold text-primary">${product?.price}</p>
        <button onClick={() => dispatch(removeFromFav(product))} className="btn btn-outline-danger">
            <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default FavCard