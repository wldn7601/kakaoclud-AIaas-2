document.addEventListener("DOMContentLoaded",function() {
    const clock = document.getElementById("timer");
    const startBtn = document.getElementById("start-button");
    const stopBtn = document.getElementById("stop-button");
    const resetBtn = document.getElementById("reset-button");
    const btns = document.getElementsByClassName("button");

    let startTime = 0; // 시작 시간
    let elapsedTime = 0; // 경과 시간
    let timerInterval = null;

    // Array.from(btns).forEach(btn => {
    //     btn.addEventListener("click", () => {
    //         btn.classList.add("active");
    //     })
    //     setTimeout(() => {
    //     btn.classList.remove("active");
    //   }, 500); // 0.5초 유지 (transition 길이에 맞춰 조정)
    // });

    function formatTime(ms){
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor(ms / 1000) % 60;
        const milliSeconds = Math.floor(ms % 1000 / 10);

        const mStr = String(minutes).padStart(2, "0");
        const sStr = String(seconds).padStart(2, "0");
        const millisS = String(milliSeconds).padStart(2, "0");
        return `${mStr}:${sStr}:${millisS}`;
    }
    function updateTime(){
        clock.textContent = formatTime(elapsedTime);
    }

    function startBtnHandler(){
        if(!timerInterval){
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(() =>{
                elapsedTime = Date.now() - startTime;
                updateTime();
            }, 10)
        }
    }
    function stopBtnHandler(){
        clearInterval(timerInterval);
        timerInterval = null;
    }
    function resetBtnHandler(){
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedTime = 0;
        updateTime();
    }

    startBtn.addEventListener("click", startBtnHandler);
    stopBtn.addEventListener("click", stopBtnHandler);
    resetBtn.addEventListener("click",resetBtnHandler);

})