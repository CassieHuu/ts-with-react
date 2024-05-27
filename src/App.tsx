import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hello from './components/hello'
import Likebutton from './components/likebutton'
// import MouseTracker from './components/mouseTrackerDeps'

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <Hello message='hello world'></Hello> */}
        <Likebutton></Likebutton>
        <button onClick={() => setShow(!show)}>Toggle Tracker</button>
        {/* {show && <MouseTracker></MouseTracker>} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
