import H1 from "../Atoms/H1";
import H2 from "../Atoms/H2";
import Button from "../Atoms/Button";
import TwoButtons from "./TwoButtons";
import SubDescription from "./SubDescription";


const MacBookAirPage = () => {
    return (
        <div className="MacBook-img">
            {/* 제목과 부제목 */}
            <H1 className={"title center margin text-color"} text={"MacBook Air"}/>
            <H2 className={"subtitle center margin text-color"} text={"하늘빛 새 컬러."}/>
            <H2 className={"subtitle center margin text-color"} text={"M4 칩 탑재로 성능도 하늘 높이."}/>

            {/* 버튼들 */}
            <TwoButtons className="btn-container" leftText="더 알아보기" rightText="쇼핑하기"/>

            <SubDescription plusClassName = "des-in-bottom"/>
        </div>
    )
}

export default MacBookAirPage;