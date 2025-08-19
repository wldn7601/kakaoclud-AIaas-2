import Button from "../Atoms/Button";
import H1 from "../Atoms/H1";
import H2 from "../Atoms/H2";
import TwoButtons from "./TwoButtons";
import SubDescription from "./SubDescription";

const IPhonePage = () => {
    const iPhoneImgURL = "https://www.apple.com/kr/iphone/home/images/meta/iphone__kqge21l9n26q_og.png";
    return (
        <div className="iPhone-img">

            {/* 제목과 부제목 */}
            <H1 className={"title center margin text-color"} text={"iPhone"}/>
            <H2 className={"subtitle center margin text-color"} text={"iPhone 16 라인업을 만나볼까요?"}/>

            {/* 버튼들 */}
            <TwoButtons className="btn-container" leftText="더 알아보기" rightText="쇼핑하기"/>
            {/* <div className={"btn-container"}>
                <Button className={"first-btn style-btn margin"} text={"더 알아보기"}/>
                <Button className={"second-btn style-btn margin"} text={"쇼핑하기"}/>
            </div> */}
            {/* <div className="iPhone-img"></div> */}
            
            <SubDescription/>
        </div>
    );
}

export default IPhonePage;