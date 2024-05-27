import React, { useEffect, useState } from "react";

const MouseTracker: React.FC = () => {
    // 记录鼠标位置
    const [position, setPosition] = useState({x: 0, y:0})
    // 修改鼠标位置
    const updatePosition = (target: MouseEvent) => {
        console.log('updatePosition')
        setPosition({x:target.clientX, y:target.clientY})
    }
    // 页面每次渲染都会调用useEffect的回调函数，会添加越来越多的click时间而未及时清除
    useEffect(() => {
        console.log('add mouse tracker effect111', position.x)
        document.addEventListener('click', updatePosition)
        // useEffect 返回一个函数的时候就意味着我们需要做一些清除副作用的工作
        // react 会在组件卸载的时候执行清除操作
        // 以及 react 会在执行下一个 useEffect 之前，对上一个 useEffect 副作用进行清除
        return () => {
            console.log('remove mouse tracker effect222', position.x)
            document.removeEventListener('click', updatePosition)
        }
    })
    // console.log('before render', position.x)
    return <p>X: {position.x}, Y:{position.y}</p>
}
export default MouseTracker