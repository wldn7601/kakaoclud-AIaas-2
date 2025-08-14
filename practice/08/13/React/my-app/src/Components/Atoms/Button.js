const Button = ({className, clickHandle, text}) =>{
    return(
        <button onClick = {clickHandle} className = {className}>{text}</button>
    );
}

export default Button;