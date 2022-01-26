function SectionHeader(props: {title: string}) {
  return (
    <div className='flex flex-col justify-start w-full mb-3'>
      <h3 className='flex text-xl md:text-2xl font-semibold text-[#292A2F]'>
        {props.title}
      </h3>
    </div>
  );
}

export default SectionHeader;
