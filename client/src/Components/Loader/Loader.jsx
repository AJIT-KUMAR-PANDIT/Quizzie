const Loader = () => {

    const src="assets/img/QuizzieLoader.svg";

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img
        src={src}
        alt="QuizzieLoader"
      />
    </div>
  );
};

export default Loader;
