const Button = ({ buttonAction, name, styles }) => {
  return (
    <>
      <button className={styles + " py-3 px-5 bg-white rounded-lg uppercase my-5 lg:my-0" } onClick={buttonAction}>
        {name}
      </button>
    </>
  );
};

export default Button;
