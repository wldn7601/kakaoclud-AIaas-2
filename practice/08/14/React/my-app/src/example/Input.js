import {useState, useEffect} from 'react';
import { useInput } from '../Hooks/UseInput';

const Input = (props) => {
    // const [inputValue, setInputValue] = useState("");
    const [inputValue, handleChange, handleSubmit] = useInput("");

    // const handleChange = (e) => {
    //     setInputValue(e.target.value)
    // }

    useEffect(()=>{
        console.log(inputValue);
    },[inputValue]);

    // const handleSubmit = () => {
    //     if(inputValue !== ""){
    //         window.alert("전송완료");
    //     }
    // }
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="텍스트를 입력하세요"
            />
            <button onClick={handleSubmit}>전송</button>
        </div>
    );

}

export default Input;