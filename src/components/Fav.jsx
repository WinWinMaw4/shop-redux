import React from 'react'
import { useSelector } from 'react-redux'
import FavCard from './FavCard';

const Fav = () => {
  const favItems = useSelector(state => state.product.fav);
  console.log(favItems);
  return (
    <div className='d-flex flex-wrap gap-5'>
      {favItems?.map((item) =>  (
      <FavCard key={item.id} product={item} />
      ) )}
    </div>
  )
}

export default Fav