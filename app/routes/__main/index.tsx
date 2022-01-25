import ProductCard from '~/components/elements/ProductCard';

const Index = () => {
  return (
    <section>
      <div className='flex flex-col w-full'>
        <div title='section-header' className='flex justify-start w-full mb-5'>
          <h3 className='flex text-xl md:text-2xl font-semibold text-[#292A2F]'>
            Featured This Month
          </h3>
        </div>
        <div className='flex flex-row flex-wrap gap-x-10'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Index;
