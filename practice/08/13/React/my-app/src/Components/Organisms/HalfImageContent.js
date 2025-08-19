import Title from "../Molecules/Title";
import TwoButtons from "../Pages/TwoButtons";
import SubDescription from "../Pages/SubDescription";

const HalfImageContent = ({isInSubtitle, isDoubleButtons, isInDescription, url, title, subtitle}) => {
    const rightText = title === "이제 iPhone에 교통카드 도착." ? "iPhone 쇼핑하기" : "구입하기";

    return (
        <div 
        style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
        className="half-img">
            {/* 컨텐츠 컨테이너 */}
            <div className="half-img-content-container">

                <div className="half-img-top-content">
                    {/* 제목 부제목 */}
                    <Title title={title} subtitle={subtitle} isInSubtitle={isInSubtitle}/>

                    {/* 버튼 */}
                    {isDoubleButtons ? <TwoButtons leftText={"더 알아보기"} rightText={rightText}/> : 
                    <button className="first-btn style-btn">견적 확인하기</button>}
                </div>
                
                
                {/* 설명문 */}
                {isInDescription && <SubDescription plusClassName={"des-in-bottom"}/>}
            </div>
            
        </div>
    )
}

export default HalfImageContent;