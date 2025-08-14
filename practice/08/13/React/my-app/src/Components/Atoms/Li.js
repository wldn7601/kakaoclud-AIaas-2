const Li = (props) => {
    return (
        <li className = {props.className}>
            <a href = "" className = "text-color">{props.text}</a>
        </li>
    );
}

export default Li;