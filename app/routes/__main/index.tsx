import ProductCard from "~/components/elements/ProductCard";

const Index = () => {
  return (
    <div className='px-4 py-4 md:px-10'>
      <section>
        <div title='section-header' className='mb-3'>
          <h3 className='flex text-xl md:text-3xl font-semibold text-[#292A2F]'>
            Featured This Month
          </h3>
        </div>
        <div className='grid grid-cols-2 gap-3 md:gap-0 md:grid-cols-3 lg:grid-cols-4'>
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default Index;
