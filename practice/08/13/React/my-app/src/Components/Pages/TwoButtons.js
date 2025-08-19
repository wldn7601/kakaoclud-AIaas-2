import Button from "../Atoms/Button";

const TwoButtons = ({className, leftText, rightText}) => {
    return(
        <div className={className}>
            <Button className={"first-btn style-btn margin"} text={leftText}/>
            <Button className={"second-btn style-btn margin"} text={rightText}/>
        </div>
    )
}

export default TwoButtons;