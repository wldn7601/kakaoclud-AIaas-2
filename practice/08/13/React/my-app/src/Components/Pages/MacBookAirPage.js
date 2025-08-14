import H1 from "../Atoms/H1";
import H2 from "../Atoms/H2";
import Button from "../Atoms/Button";

const MacBookAirPage = () => {
    return (
        <div>
            {/* 제목과 부제목 */}
            <H1 className={"title center margin"} text={"MaxBook Air"}/>
            <H2 className={"subtitle center margin"} text={"하늘빛 새 컬러."}/>
            <H2 className={"subtitle center margin"} text={"M4 칩 탑재로 성능도 하늘 높이."}/>
        </div>
    )
}

export default MacBookAirPage;