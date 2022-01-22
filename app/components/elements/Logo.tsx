function Logo(props: {extra: string}) {
  return (
    <span className={`flex font-semibold capitalize pointer-events-none font-bebas ${props.extra}`}>
      <p>Tech</p>
      <p className="text-indigo-600">Topia</p>
      <p >.</p>
    </span>
  );
}

export default Logo;
