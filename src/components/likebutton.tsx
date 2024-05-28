import React from "react";
import { useState, useEffect, useRef } from "react";
// import useMousePosition from "../hooks/useMousePosition"; // hook 可多文件复用
const Button:React.FC = () => {
    const [count, setCount] = useState(0)
    const likeRef = useRef(0)
    // const [on, setOn] = useState(true)
    // const {position} = useMousePosition()
    // 期望用户每次「点击按钮」就「更新页面标题」
    // 改变网页标题这个操作，就是「点击按钮」的副效应
    useEffect(()=> {
        console.log('document title effect is running')
        document.title = `点击了${count}次`
    }, [count])
    
    const didMountRef = useRef(false)
    useEffect(()=> {
        if (didMountRef.current) {
            console.log('this is updated')
        } else {
            console.log('Mount')
            didMountRef.current = true
        }
        return () => {
            console.log('unmount')
        }
    }, [])

    function handleAlertClick() {
        setTimeout(() => {
            alert('you have clicked on ' + likeRef.current)
        }, 3000)
    }
    const onLikeClick = () => {
        setCount(count + 1)
        likeRef.current++
    }
    // const onSwitchClick = () => {
    //     setOn(!on)
    // }

    const domRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus()
        }
    })
    return (
        <>
        <input type="text" ref={domRef}/>
        {/* <h2>X: {position.x}, Y:{position.y}</h2> */}
        <button onClick={onLikeClick}> {count} 👍🏻 </button>
        {/* <button onClick={onSwitchClick}> {on ? 'On' : 'Off'} </button> */}
        <button onClick={handleAlertClick}> Alert! </button>
        </>
    )
}


export default Button