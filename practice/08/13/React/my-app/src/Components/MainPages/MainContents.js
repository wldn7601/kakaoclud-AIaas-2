import {useState} from 'react';
import {useEffect} from 'react';
import Button from '../Atoms/Button';
import P from '../Atoms/P';
import H1 from '../Atoms/H1';
import IPhonePage from '../Pages/IPhonePage';
import MacBookAirPage from '../Pages/MacBookAirPage';
import WatchPage from '../Pages/WatchPage';
import HalfImageContent from '../Organisms/HalfImageContent';


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

    // 절반 이미지 정보들
    const halfImageContents = [
        {isInSubtitle: false , isDoubleButtons: true, isInDescription: false,
            url: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F02%2Fapple-iphone-15-pro-max-rendering-images-ft.jpg?q=75&w=800&cbr=1&fit=max",
            title: "이제 iPhone에 교통카드 도착."
        }, 
        {isInSubtitle: true , isDoubleButtons: true, isInDescription: true,
            url: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F03%2Fapple-ipad-mini-6th-generation-rendering-images-made-by-michael-ma-04.jpg?q=75&w=800&cbr=1&fit=max",
            title: "iPad air", subtitle: "이제 막강한 성능의 M3 칩 탑재."
        }, 
        {isInSubtitle: true , isDoubleButtons: true, isInDescription: true,
            url: "https://image.zdnet.co.kr/2021/04/21/3408cbc939ef314715e5d9d988afde14.jpg",
            title: "iPad Pro", subtitle: "놀라우리만치 얇다. 엄청나게 강력하다."
        }, 
        {isInSubtitle: true , isDoubleButtons: true, isInDescription: true,
            url: "https://image.fnnews.com/resource/media/image/2023/09/06/202309060836171726_e.jpg",
            title: "MacBook Pro", subtitle: "예술의 경지에 오른 스마트함."
        }, 
        {isInSubtitle: true , isDoubleButtons: true, isInDescription: false,
            url: "https://www.techm.kr/news/photo/202209/101300_118757_1455.jpg",
            title: "AirPods 4", subtitle: "아이콘의 귀환. 사운드의 진화. 액티브 노이즈 캔슬링 탑재."
        }, 
        {isInSubtitle: true , isDoubleButtons: false, isInDescription: false,
            url: "https://i.namu.wiki/i/_XhYmWRzJUryEN4A1SwTbmk7XtSLUAYLepY3LgQeKz_xPpxRunel1hN3QEuZ8byu0jm5Ms5qJNyvL08EkdpYRA.webp",
            title: "Trade In", subtitle: "iPhone 12이상의 모델을 보상 판매하면 ₩180,000~₩1,030,000 상당의 크레딧이."
        }, 
            
    ];

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
            <section>
                
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