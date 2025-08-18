import {UserContext} from '../Store/UserContext';
import {useContext} from 'react';


const Header = () => {
    const name = useContext(UserContext);

    return(
        // <UserContext.Consumer>
        //     {
        //         (name) => (
        //             <header className="header">
        //                 <p>
        //                     <span>{name}</span>님 환영합니다.{" "}
        //                 </p>
        //             </header>
        //         )
        //     }
        // </UserContext.Consumer>

        <header className="header">
            <p>
                <span>{name}</span>님 환영합니다.{" "}
            </p>
        </header>
    );

}

export default Header;