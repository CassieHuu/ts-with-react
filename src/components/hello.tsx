import React from "react";
interface IHelloProps {
    message: string
}
const Hello: React.FC<IHelloProps> = (props) => {
    return <h2>{props.message || 'hello Cassie'}</h2>
}
Hello.displayName = 'MyFirstHello'
export default Hello