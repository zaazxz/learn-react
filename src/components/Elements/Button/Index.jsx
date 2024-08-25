const Button = (props) => {

    const { children = 'Click Me', type = 'button', variant = 'bg-sky-500' } = props; 

    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type={type}>
            {children}
        </button>
    )
}

export default Button