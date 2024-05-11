import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import TopBar from './components/TopBar'; // TopBar 컴포넌트를 임포트
import BottomBar from './components/BottomBar'; // TopBar 컴포넌트를 임포트



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <TopBar /> 
      <Quiz />
      <BottomBar />
    </div>
  );
}

export default App;
