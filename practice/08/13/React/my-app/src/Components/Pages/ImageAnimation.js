// gpt 도움

import React, { useState, useEffect, useRef } from "react";
// 이미지 링크들 임포트
import animationImages from "../../Data/animationImages";

const ImageAnimation = () => {

    // 왜 필요?
        // 슬라이드가 몇 번째인지 계속 추적해야 하기 때문에 상태가 필요합니다.  
        // 상태가 바뀌면 React가 자동으로 렌더링을 다시 해주므로 화면이 갱신됩니다.
    const [current, setCurrent] = useState(0);

    // 왜 필요?
        // 마지막 슬라이드에서 첫 번째 슬라이드로 순간 이동할 때, transition을 잠시 제거하고 transform을 직접 조작해야 합니다.
        // 이때 DOM 요소(.slider-track)를 직접 다루어야 하는데, 함수형 컴포넌트는 this가 없기 때문에 useRef를 사용합니다.
    const trackRef = useRef(null);

    // 처음 마운트 될 때만 실행 컴포넌트가 사라질 때 타이머를 클린업한다.
    useEffect(() => {
        const interval = setInterval(() => {
            // 다음 슬라이드
            setCurrent((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (current === animationImages.length) {
            // 마지막 이미지 뒤의 첫 이미지에 도착하면 1초 후 transition 없이 0으로 이동
            setTimeout(() => {
                track.style.transition = "none";
                setCurrent(0);
                // track.style.transform = `translateX(0%)`;
                // transition 다시 복원
                setTimeout(() => {
                    track.style.transition = "transform 1s ease-in-out";
                }, 50); 
            }, 1000); // transition 시간과 맞춰주기
        }
    }, [current]);


    return (
        <div className="img-animation-container">
            <div
                className="slider-track"
                ref={trackRef}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {animationImages.concat(animationImages[0]).map((src, idx) => (
                    <div className="slide-img" key={idx}>
                        <a href="">
                            <img src={src} alt={`slide-${idx}`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageAnimation;