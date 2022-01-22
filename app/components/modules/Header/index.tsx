import Logo from '~/components/elements/Logo';
import { MenuAlt4Icon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { Link } from 'remix';

function Header() {
  return (
    <div className='flex flex-row items-center justify-between py-4 px-10 -mt-16 bg-[#EDEDED]'>
      <button className='flex items-center justify-center p-2 bg-white rounded-md shadow-md'>
        <MenuAlt4Icon className='w-7 h-7' />
      </button>
      <Link to="/">
        <Logo extra='text-4xl' />
      </Link>
      <div className='flex space-x-3 items-centers'>
        <button className='flex items-center justify-center p-2 bg-white rounded-md shadow-md'>
          <ShoppingBagIcon className='w-7 h-7' />
        </button>
        <button className='flex items-center justify-center p-2 bg-white rounded-md shadow-md'>
          <UserIcon className='w-7 h-7' />
        </button>
      </div>
    </div>
  );
}

export default Header;
