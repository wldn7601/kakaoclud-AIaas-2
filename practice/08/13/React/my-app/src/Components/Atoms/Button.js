function Button({buttonHandler, child}){
    return(
        <button onClick = {buttonHandler} className = "test-button text-font text-color">{child}</button>
    );
}

export default Button;