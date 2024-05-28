import { useEffect, useState } from "react"
// 方便公共逻辑抽离和复用
const useMousePosition = () => {
    // 记录鼠标位置
    const [position, setPosition] = useState({x: 0, y:0})
    // 修改鼠标位置
    const updatePosition = (target: MouseEvent) => {
        console.log('updatePosition', target.clientX)
        setPosition({x:target.clientX, y:target.clientY})
    }

    useEffect(() => {
        // 页面每次渲染都会调用 useEffect 的回调函数来添加副作用，如果不及时清除，这里会添加越来越多的 click事件
        console.log('add mouse tracker effect', position.x)
        document.addEventListener('mousemove', updatePosition)

        // useEffect 返回一个函数时，意味着我们会在这里做一些清除副作用的工作
        // react 会在执行下一个 useEffect 之前，对上一个 useEffect 副作用进行清除
        return () => {
            console.log('remove mouse tracker effect', position.x)
            document.removeEventListener('mousemove', updatePosition)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // 如果只是希望组件挂载和卸载的时候执行useEffect，可以传空数组
    return {
        position
    }
}
export default useMousePosition