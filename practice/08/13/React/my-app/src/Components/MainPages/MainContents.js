import {useState} from 'react';
import {useEffect} from 'react';
import Button from '../Atoms/Button';
import P from '../Atoms/P';
import H1 from '../Atoms/H1';
import IPhonePage from '../Pages/IPhonePage';
import MacBookAirPage from '../Pages/MacBookAirPage';
import WatchPage from '../Pages/WatchPage';
import HalfImageContent from '../Organisms/HalfImageContent';
// 슬라이드 이미지 링크들
import ImageAnimation from '../Pages/ImageAnimation';
// 절반 이미지 정보들
import halfImageContents from '../../Data/halfImageContents';

const MainContents = () =>{
    // test data
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
    // test data

    return(
        <main>
            {/* 회면을 다 채우는 컨텐츠 영역 */}
            <section>
                {/* 아이폰 화면 */}
                <IPhonePage/>

                {/* 맥북 화면 */}
                <MacBookAirPage/>

                {/* 와치 화면 */}
                <WatchPage/>
            </section>

            {/* 절반씩 채우는 컨텐츠 영역 */}
            {/* 하나의 컴포넌트로 만들어서 분기처리로 하기 */}
            <section>
                <div className="half-img-container">
                    {
                        halfImageContents.map((content) => {
                            console.log(content);
                            return <HalfImageContent key={content.url} {...content}/>
                        })
                    }
                </div>
            </section>

            {/* 이미지 애니메이션 영역 */}
            {/* gpt */}
            <section>
                <ImageAnimation/>
            </section>

            {/* test 내용 */}
            <section>
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