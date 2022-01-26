import ProductCard from "../elements/ProductCard";
import SectionHeader from "./section-header";

function FeaturedSection() {
  return (
    <section>
      <div className='flex flex-col w-full'>
        <SectionHeader title="Featured This Month" />
        <div className='flex flex-row flex-wrap gap-x-10'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
