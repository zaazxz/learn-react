const Button = (props) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${props.classname} text-white`}>
      {props.children}
    </button>
  );
};

export default Button;
