import {SiShopware} from 'react-icons/si'
import {RiShoppingCartFill} from 'react-icons/ri'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const cart = useSelector(state => state.cart.cart);
  return (
    <nav className="container my-2 shadow-sm py-2 rounded">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <Link to="/" className='text-decoration-none'>
          <p className="text-info mb-0">
            <SiShopware /> My Shop
          </p>
        </Link>
        <div className="">
         <Link to='/cart'>
         <button className="btn btn-primary btn-sm">
            <RiShoppingCartFill /> {cart?.length }
          </button>
         </Link>
          <Link to="/fav">
            <button className="btn btn-danger btn-sm ms-2">
              <AiFillHeart />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar