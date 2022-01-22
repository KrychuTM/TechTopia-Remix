import Logo from '~/components/elements/Logo';
import { MenuAlt4Icon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { Link } from 'remix';

function Header() {
  return (
    <nav className='grid grid-cols-3 items-center py-4 px-4 md:px-10 -mt-16 bg-[#EDEDED] justify-items-stretch'>
      <div className='flex flex-row items-center justify-self-start'>
        <button className='flex items-center justify-center'>
          <MenuAlt4Icon className='w-7 h-7' />
        </button>
        <div className='flex-row hidden mx-10 space-x-6 text-lg lg:flex'>
          <p className='cursor-default link-underline'>New</p>
          <p className='cursor-default link-underline'>Sales</p>
          <p className='cursor-default link-underline'>Brands</p>
          <p className='cursor-default link-underline'>Categories</p>
        </div>
      </div>
      <Link to='/' className='justify-self-center'>
        <Logo extra='text-4xl' />
      </Link>
      <div className='flex space-x-3 justify-self-end'>
        <button className='flex items-center justify-center p-2'>
          <ShoppingBagIcon className='w-7 h-7' />
        </button>
        <button className='items-center justify-center hidden p-2 md:flex'>
          <UserIcon className='w-7 h-7' />
        </button>
      </div>
    </nav>
  );
}

export default Header;
