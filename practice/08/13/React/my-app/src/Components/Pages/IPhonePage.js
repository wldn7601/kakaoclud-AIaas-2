import Button from "../Atoms/Button";
import H1 from "../Atoms/H1";
import H2 from "../Atoms/H2";

const IPhonePage = () => {
    return (
        <div>

            {/* 제목과 부제목 */}
            <H1 className={"title center margin"} text={"IPhone"}/>
            <H2 className={"subtitle center margin"} text={"IPhone 16 라인업을 만나볼까요?"}
            />

            <div className={"btn-container"}>
                {/* 버튼들 */}
                <Button className={"first-btn style-btn margin"} text={"더 알아보기"}/>
                <Button className={"second-btn style-btn margin"} text={"쇼핑하기"}/>
            </div>
            

        </div>
    );
}

export default IPhonePage;