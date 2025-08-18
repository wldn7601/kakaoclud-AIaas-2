import {useState} from 'react';

const UseStateDemo = () => {    
    // let count = 0;

    const [count, setCount] = useState(0);
    const handleClick = () => {
        // ++count;
        setCount((prevState) => prevState+1);
        // setState(currentState) prevState => currentState
        // console.log(count);
    }

    /*
    const[arr, setArr] = useState([1,2,3]);
    const handleClick = () => {
        setArr([...arr, 4]);
    }
    */

    const [userInput, setUserInput] = useState({
        title : "",
        content: "",
        date: ""
    });

    const handlechange = (e) => {
        setUserInput((prevState) => {
            return{...prevState, title:e.target.value};
        })
    };

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick = {handleClick}>Increse Count</button>
            <p>Title : {userInput.title}</p>
            <input
            value = {userInput.title}
            onChange = {(e) => handlechange(e)}
            />

        </div>
    );
};

export default UseStateDemo;