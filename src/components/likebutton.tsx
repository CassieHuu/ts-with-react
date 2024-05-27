import React from "react";
import { useState, useEffect } from "react";
const Button:React.FC = () => {
    const [count, setCount] = useState(0)
    const [on, setOn] = useState(true)
    // 期望用户每次「点击按钮」就「更新页面标题」
    // 改变网页标题这个操作，就是「点击按钮」的副效应
    useEffect(()=> {
        console.log('add like button effect')
        document.title = `点击了${count}次` 
    }, [count]) 
    const onLikeClick = () => {
        setCount(count + 1)
    }
    const onSwitchClick = () => {
        setOn(!on)
    }
    return (
        <>
        <button onClick={onLikeClick}> {count} 👍🏻 </button>
        <button onClick={onSwitchClick}> {on ? 'On' : 'Off'} </button>
        </>
    )
}


export default Button