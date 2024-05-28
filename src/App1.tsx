import './App.css'
import React from 'react'
import withLoader from './components/withLoader'
import useMousePosition from './hooks/useMousePosition'

interface IShowResult {
  message: string;
  status: string;
}
const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
  return (
    <>
    <h2>Dog show: {data.status}</h2>
    <img src={data.message} alt="" />
    </>
  )
}
const App: React.FC = () => {
  const { position } = useMousePosition()
  const WraapedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <p>X: {position.x}, Y:{position.y}</p>
        <WraapedDogShow></WraapedDogShow>
      </header>
    </div>
  );
}

export default App;

// Q1: 为什么鼠标移动就会触发图片重新加载？
// 当鼠标移动时会触发 useMousePosition 中的 updatePosition 函数，从而更新鼠标位置信息。
// 而在 App 组件中，每次渲染时（包括鼠标移动导致的重新渲染），都会创建一个新的 WraapedDogShow 组件实例，这是因为 withLoader 函数会返回一个新的包装组件。
// 在 withLoader 函数中，组件挂载后会通过 axios.get(url) 去获取图片数据，每次创建新的包装组件实例都会触发这个数据获取过程，也就导致了看起来像是鼠标移动就会触发图片重新加载。


// Q2: 为什么 当鼠标移动时，App 组件会重新渲染？而不是 只重新渲染 postion ?
// 当鼠标移动时，App组件会重新渲染，是因为useMousePosition钩子函数中的useEffect钩子监听了鼠标移动事件，并在每次鼠标移动时更新了鼠标位置的状态。这导致了App组件的状态发生变化，从而触发了组件的重新渲染。
// 在useMousePosition钩子函数中，当组件挂载时，通过useEffect添加了一个鼠标移动的监听器。当鼠标移动时，updatePosition函数会被调用，更新position的状态。由于App组件使用了position状态，所以当position状态发生变化时，App组件会重新渲染。
// 如果你只想重新渲染position，可以考虑将position作为一个单独的组件来渲染，并在该组件中使用useEffect来监听鼠标移动事件。这样，只有当position组件的状态发生变化时，才会重新渲染该组件，而不会影响其他组件。
