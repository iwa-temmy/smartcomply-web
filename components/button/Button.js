const Button = ({ buttonAction, name, styles }) => {
  return (
    <>
      <button
        className={styles + " py-3 px-5 bg-white rounded-lg uppercase"}
        onClick={buttonAction}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
