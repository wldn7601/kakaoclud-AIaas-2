import {useState} from 'react';
import {useEffect} from 'react';
import Button from '../Atoms/Button';
import P from '../Atoms/P';
import H1 from '../Atoms/H1';


function MainContents(){
    const iPhoneURL = "https://www.apple.com/kr/iphone/home/images/meta/iphone__kqge21l9n26q_og.png";
    const [elapsedTime, setElapsedTime] = useState(0);
    const [time, setTime] = useState("00:00:00");

    let timerInterval = false;
    let startTime = 0;

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor(ms / 1000) % 60;
        const milliSeconds = Math.floor(ms % 1000 / 10);

        const mStr = String(minutes).padStart(2, "0");
        const sStr = String(seconds).padStart(2, "0");
        const millisS = String(milliSeconds).padStart(2, "0");
        return `${mStr}:${sStr}:${millisS}`;
    }
    const updateTime = (ms) => {
        const timeText = formatTime(ms);
        setTime((prevState) => timeText);
    }

    const startBtnClick = () => {
        if(!timerInterval){
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(() => {
                setElapsedTime((prevState) => Date.now() - startTime);
                // elapsedTime = Date.now() - startTime;
                updateTime(elapsedTime);
            }, 10)
        }
    };

    const stopBtnClick = () => {
        clearInterval(timerInterval);
        timerInterval = null;
        updateTime(elapsedTime);
    }
    const resetBtnClick = () => {
        clearInterval(timerInterval);
        timerInterval = null;
        setElapsedTime((prevState) => 0);
        updateTime(elapsedTime);
    }
    useEffect(()=>{
        console.log("time이 바뀜");
    }, [time]);
    useEffect(()=>{
        console.log("elapsedTime이 바뀜")
    }, [elapsedTime]);

    return(
        <main>

            <section className = "iPhone-section">
                <div className = "iPhone-background-img">
                </div>
            </section>

            <section>
                <div className = "">
                    <P text={"content1"}/>  
                    <P text={"content2"} />
                    <P text={"content3"} />
                </div>
                <H1 className="timer-h1 text-color" text={time}/>
                <div className = "button-container">
                    <Button clickHandle={startBtnClick} text={"시작"} />
                    <Button clickHandle={stopBtnClick} text={"종료"}/>
                    <Button clickHandle={resetBtnClick} text={"리셋"}/>
                </div>
            </section>
        </main>
    );
}



export default MainContents;