import Li from '../Atoms/Li'
import Button from '../Atoms/Button';

const MainHeader = () => {
    const imgUrl = "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Fapple-3215366-2673784.png&type=sc960_832";
    const liListText = ["", "스토어", "Mac", "iPad", "iPhone", "Watch", "Vision", "Airpods", 
        "TV 및 홈", "엔터테이먼트", "액세서리", "고객지원", "🔍", "🛒"];
    return(
    <header className = "main-header">
        <nav className = "nav-container">
            {/* <button className = "logo-button">
                <img className = "logo-img" 
                src = {imgUrl} alt = "Apple logo"></img>
            </button> */}
            <ul className = "nav-ul">

                {/* 로고 이미지 하이퍼 링크 */}
                {/* <li>
                    <a href = "">
                        <img className = "logo-img" src = {imgUrl}></img>
                    </a>
                </li> */}

                {/* map으로 텍스트 링크들 생성 */}
                {
                liListText.map((liText, index) => 
                    <Li className = "text-font text-color margin"
                    text = {liText} key = {liText + index}/>
                )
                }
            </ul>
        </nav>
    </header>
    );
}

export default MainHeader;