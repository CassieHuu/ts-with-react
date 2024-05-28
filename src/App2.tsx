import './App.css';
import React from 'react'
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}
const App: React.FC = () => {
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  const dogRes = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        {loading ? "dog数据读取中" : <img src={dogRes && dogRes.message} alt=""></img>}
      </header>
    </div>
  );
}

export default App
