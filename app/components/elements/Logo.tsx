function Logo(props: { extra: string }) {
  return (
    <div
      className={`flex font-semibold capitalize pointer-events-none font-bebas ${props.extra}`}
    >
      <p>
        Tech
        <span className='text-indigo-600'>Topia</span>
      .</p>
    </div>
  );
}

export default Logo;
