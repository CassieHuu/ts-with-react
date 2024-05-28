import './App.css';
import React from 'react'
import {useState} from 'react'
import Hello from './components/hello'
import Likebutton from './components/likebutton'
// import MouseTracker from './components/mouseTrackerDeps'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}
const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const { position } = useMousePosition()
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  const dogRes = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShow(!show)}>Toggle Tracker</button>
        {show && <p>X: {position.x}, Y:{position.y}</p>}
        <Hello message='hello world'></Hello>
        {show && <Likebutton></Likebutton>}
        {/* {show && <MouseTracker></MouseTracker>} */}
        {show && (loading ? "dog数据读取中" : <img src={dogRes && dogRes.message} alt=""></img>)}
      </header>
    </div>
  );
}

export default App;
