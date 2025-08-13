import Button from '../Atoms/Button';
import P from '../Atoms/P';

function MainContents(){
    return(
        <main>
            <div className = "">
                <P child={"content1"}/>  
                <P child={"content2"} />
                <P child={"content3"} />
            </div>
            <div className = "button-container">
                <Button child={"시작"} />
                <Button child={"종료"}/>
                <Button child={"리셋"}/>
            </div>
        </main>
    );
}



export default MainContents;