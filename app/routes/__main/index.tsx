const Index = () => {
  return (
    <div className='px-4 py-4 md:px-10'>
      <section>
        <div title='section-header' className='mb-3'>
          <h3 className='flex text-xl md:text-3xl font-semibold text-[#292A2F]'>
            Featured This Month
          </h3>
        </div>
        <div
          title='section-content'
          className='grid grid-cols-2 gap-3 md:gap-0 md:grid-cols-3 lg:grid-cols-4'
        >
          <div
            title='product-card'
            className='px-[3vw] py-[4vw] md:p-0 w-max md:w-max bg-white border-2 border-transparent rounded-lg hover:border-indigo-600 md:hover:border-transparent md:bg-transparent'
          >
            <div
              title='product-img'
              className='flex items-center justify-center bg-transparent w-[36vw] md:w-[260px] md:h-80 md:bg-white border-2 border-transparent rounded-lg md:hover:border-indigo-600 hover:border-transparent'
            >
              <img src='https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-front?$Background_Large$' />
            </div>
            <h4 title='product-brand' className='mt-5 text-xs sm:text-sm md:text-sm'>
              Sony
            </h4>
            <h5 title='product-name' className='text-xs'>
              Playstation 5 Controller
            </h5>
            <span>$350.00</span>
          </div>
          <div>Hi Again</div>
        </div>
      </section>
    </div>
  );
};

export default Index;
