// import logo from './logo.svg';
// import './App.css';
// import NameChanger from './example/nameChanger';
// import LifecycleDemo from './example/lifeSycleDemo';
// import UseEffectDemo from './example/UseEffectDemo';
// import UseStateDemo from './example/UseStateDemo';
// import UseMemoDemo from './example/UseMemoDemo';
// import UseCallBackDemo from './example/UseCallBackDemo';

// import {UserContext} from './Store/UserContext';
// import Header from './Pages/Header';
// import Input from './example/Input';

// function App() {
//   return (
//     <div>
//       {/* <h1>UseEffectDemo</h1>
//       <UseEffectDemo/>
//       <hr/>
//       <h1>UseStateDemo</h1>
//       <UseStateDemo/>
//       <hr/>
//       <h1>LifecycleDemo</h1>
//       <LifecycleDemo/>
//       <hr/>
//       <h1>NameChanger</h1>
//       <NameChanger/>
//       <hr/>
//       <h1>UseMemoDemo</h1>
//       <UseMemoDemo/>
//       <hr/>
//       <h1>useCallBackDemo</h1>
//       <UseCallBackDemo/> */}

//       {/* <UserContext.Provider value="홍길동">
//         <Header/>
//       </UserContext.Provider> */}

//       <Input/>
//     </div>
//   );
// }

// export default App;


import { useFetch } from "./Components/UseFetch";

function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       if (!response.ok) {
  //         throw new Error("데이터를 가져오는데 실패했습니다");
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //  커스텀 훅
  const [data, loading, error] = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
