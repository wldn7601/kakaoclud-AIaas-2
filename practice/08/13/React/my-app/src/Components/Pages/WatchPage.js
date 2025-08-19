import H1 from "../Atoms/H1";
import H2 from "../Atoms/H2";
import Button from "../Atoms/Button";
import TwoButtons from "./TwoButtons";
import SubDescription from "./SubDescription";


const WatchPage = () => {
    return (
        <div className = "Watch-img">
            {/* 제목과 부제목 */}
            <H1 className={"title center margin text-color"} text={" WATCH"}/>
            <p className="center margin text-color">SERIES 10</p>
            <H2 className={"subtitle center margin text-color"} text={"얇아진 두께. 더 커진 존재감."}/>


            {/* 버튼들 */}
            <TwoButtons className="btn-container" leftText="더 알아보기" rightText="쇼핑하기"/>
        </div>
    )
}

export default WatchPage;