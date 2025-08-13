import Li from '../Atoms/Li'
import Button from '../Atoms/Button';

function MainHeader(){
    const imgUrl = "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Fapple-3215366-2673784.png&type=sc960_832";
    return(
    <header>
        <nav className = "nav-container">
            {/* <button className = "logo-button">
                <img className = "logo-img" 
                src = {imgUrl} alt = "Apple logo"></img>
            </button> */}
            <ul className = "nav-ul">
                <li>
                    <a href = "">
                        <img className = "logo-img" src = {imgUrl}></img>
                    </a>
                </li>
                <Li className = "text-font text-color" child={"Link 1"}/>
                <Li className = "text-font text-color" child={"Link 2"}/>
                <Li className = "text-font text-color" child={"Link 3"}/>
                <Li className = "text-font text-color" child={"Link 4"}/>
                <Li className = "text-font text-color" child={"Link 5"}/>
                <Li className = "text-font text-color" child={"Link 6"}/>
                <Li className = "text-font text-color" child={"Link 7"}/>
            </ul>
        </nav>
    </header>
    );
}

export default MainHeader;