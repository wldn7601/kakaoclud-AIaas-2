import {useEffect} from 'react';
import {useState} from 'react';

const UseEffectDemo = () => {


    const [count, setCount] = useState(0);
    const handleClick = () => {
        // ++count;
        setCount((prevState) => prevState+1);
        // setState(currentState) prevState => currentState
        // console.log(count);
    }

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
    
    useEffect(() => {
        // 마운트시 한번 실행
        // 초기 API 데이터 Fetching
        console.log("ComponentDidMount");
    }, []);
    useEffect(() => {
        // 처음 렌더링 + 리렌더링 될 때마다 실행
        console.log("ComponentDidMount + ComponentDidUpdate");
    });
    useEffect(() => {
        // 의존성 배열 안에 값이 별함에 따라 동작하는 함수
        console.log("ComponentDidMount + ComponentDidUpdate(Count만 변경시)");
    }, [count]);
    useEffect(() => {
        // 의존성 배열 안에 값이 별함에 따라 동작하는 함수
        console.log("ComponentDidMount + ComponentDidUpdate(userInput.title만 변경시)");
    }, [userInput.title]);
    
    
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
}

export default UseEffectDemo