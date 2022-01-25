import { PlusIcon } from "@heroicons/react/outline";

const ProductCard = () => {
  return (
    <div className='card-container'>
      <div className='card-image-container'>
        <div title="Add to Cart" className='add-to-cart group'>
          <PlusIcon className="w-4 h-4 group-hover:text-white"/>
        </div>
        <img
          src='https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-front?$Background_Large$'
          className='max-w-full max-h-full'
        />
      </div>
      <div title='details-container' className=''>
        <span
          title='product-seller'
          className='relative font-sans text-sm font-semibold text-indigo-600'
        >
          Samsung Electronics
        </span>
        <p title='product-name' className='text-lg font-pt text-[#292A2F] leading-none'>
          Playstation 5 DualSense Controller
        </p>
        <p title='product-price' className='mt-1 text-xl font-bold font-lato'>
          $1099.99
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
