import {useState} from 'react';
import {useEffect} from 'react';
import Button from '../Atoms/Button';
import P from '../Atoms/P';
import H1 from '../Atoms/H1';
import IPhonePage from '../Pages/IPhonePage';
import MacBookAirPage from '../Pages/MacBookAirPage';
import Watch from '../Pages/WatchPage';


const MainContents = () =>{
    const iPhoneURL = "https://www.apple.com/kr/iphone/home/images/meta/iphone__kqge21l9n26q_og.png";
    const [count, setCount] = useState(0);    

    const increaseCount = () => {
        setCount((prevState) => prevState+1);
    }
    const decreaseCount = () => {
        setCount((prevState) => prevState-1);
    }
    const resetCount = () => {
        setCount((prevState) => 0);
    }

    return(
        <main>
            {/* 회면을 다 채우는 컨텐츠 영역 */}
            <section>
                {/* 아이폰 화면 */}
                <IPhonePage/>

                {/* 맥북 화면 */}
                <MacBookAirPage/>

                {/* 와치 화면 */}
                <Watch/>
            </section>

            <section>
                {/* 더미 컨텐츠 내용 */}
                <div className = "">
                    <P text={"content1"}/>  
                    <P text={"content2"} />
                    <P text={"content3"} />
                </div>

                {/* 카운트 숫자 */}
                <H1 className="count-h1 text-color" text={count} />
                {/* 증가, 감소, 리셋 버튼 컨테이너 */}
                <div className = "btn-container">
                    <Button className={"test-btn text-font text-color"} 
                    clickHandle={increaseCount} text={"Count 증가"} 
                    />
                    <Button className={"test-btn text-font text-color"}
                    clickHandle={decreaseCount} text={"Count 감소"}
                    />
                    <Button className={"test-btn text-font text-color"}
                     clickHandle={resetCount} text={"Reset Count"}/>
                </div>
            </section>
        </main>
    );
}



export default MainContents;