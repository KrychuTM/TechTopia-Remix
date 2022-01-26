import Logo from '~/components/elements/Logo';
import { MenuAlt4Icon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { Link } from 'remix';

function Header() {
  return (
    <header>
      <div className='w-screen bg-[#EDEDED] fixed top-0 left-0 z-10'>
        <div className='container'>
          <div className='flex flex-row items-center w-1/3'>
            <button className='flex items-center justify-center'>
              <MenuAlt4Icon className='w-7 h-7' />
            </button>
          </div>
          <div className='flex justify-center w-1/3'>
            <Link to='/'>
              <Logo extra='text-4xl' />
            </Link>
          </div>
          <div className='flex justify-end w-1/3 space-x-3'>
            <button className='flex items-center justify-center p-2'>
              <ShoppingBagIcon className='w-7 h-7' />
            </button>
            <button className='items-center justify-center hidden p-2 md:flex'>
              <UserIcon className='w-7 h-7' />
            </button>
          </div>
        </div>
      </div>
      <div className='flex mt-[76px] py-1 text-lg space-x-8 text-[#292A2F] lg:flex font-pt'>
        <p className='cursor-default link-underline'>All Products</p>
        <p className='cursor-default link-underline'>New</p>
        <p className='cursor-default link-underline'>Sales</p>
        <span className='relative flex items-center cursor-default link-underline group'>
          <p>Brands</p>
          <ChevronDownIcon className='relative transition duration-300 group-hover:rotate-180 h-5 top-[1px]' />
          <ul className='absolute z-10 w-full px-2 py-1 transition-transform duration-300 ease-in-out origin-top scale-y-0 bg-[#EDEDED] shadow-lg rounded cursor-default group-hover:scale-y-100 h-max group-hover:block group-hover:flex-col top-7'>
            <li>elllo</li>
            <li>elllo</li>
            <li>elllo</li>
            <li>elllo</li>
          </ul>
        </span>
        <span className='flex items-center cursor-default link-underline group'>
          <p>Categories</p>
          <ChevronDownIcon className='relative transition duration-300 group-hover:rotate-180 h-5 top-[1px]' />
        </span>
      </div>
    </header>
  );
}

export default Header;
