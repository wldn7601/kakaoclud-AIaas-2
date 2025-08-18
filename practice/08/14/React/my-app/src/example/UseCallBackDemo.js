import React, { useEffect, useState, useCallback } from "react";

const UseCallBackDemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // 해당 함수가 메모이제이션되어 의존성배열에 추가한 값이 바뀔 때만 함수가 호출된다.
    const getCount = useCallback(() => {
        console.log("getCount:", count);
        return;
    }, []);

    useEffect(() => {
        console.log("getCount 함수가 변경될 때 호출");
    }, [getCount]);

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={() => setCount((prev) => prev + 1)}>증가</button>

            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            />
        </div>
  );
    
}

export default UseCallBackDemo;