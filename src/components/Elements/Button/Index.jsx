const Button = (props) => {

  // Deafult 
  const { classname = "bg-black", type = "button", onclick = () => {} } = props;

  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} onClick={() => onclick()} type={type}>
      {props.children}
    </button>
  );
};

export default Button;
