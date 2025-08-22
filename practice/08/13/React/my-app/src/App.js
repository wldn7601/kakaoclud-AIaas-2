import logo from './logo.svg';
import './App.css';
import MainHeader from './Components/MainPages/MainHeader';
import MainContents from './Components/MainPages/MainContents';
import MainFooter from './Components/MainPages/MainFooter';


function App() {
  return (
    <>
      <MainHeader userName = "홍길동"/>
      <MainContents/>
      <hr/>
      <MainFooter/>
    </>

  );
}

export default App;
