import {SiShopware} from 'react-icons/si'
import {RiShoppingCartFill} from 'react-icons/ri'


const Navbar = () => {
  return (
   <nav className='container my-2 shadow-sm py-2 rounded'>
    <div className='w-100 d-flex justify-content-between align-items-center'>
    <p className="text-info mb-0">
      <SiShopware /> My Shop
    </p>
    <button className="btn btn-primary">
      <RiShoppingCartFill /> 10
    </button>
    </div>
   </nav>
  )
}

export default Navbar