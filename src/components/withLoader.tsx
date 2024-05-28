import React from "react";
import axios from 'axios';
interface ILoaderState {
    data: any,
    isLoading: boolean
}
interface ILoaderProps {
    data: any
}
// HOC 高阶组件：是一个接收组件作为参数并返回一个新组件的函数
const withLoader = <P extends ILoaderState>(WraaperCompent: React.ComponentType<P>, url: string) => {
    return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILoaderState> {
        constructor(props: any) {
            super(props)
            this.state = {
                data: null,
                isLoading: false
            }
        }
        componentDidMount() {
            this.setState({
                isLoading: true
            })
            axios.get(url).then(result => {
                this.setState({
                    data: result.data,
                    isLoading: false
                })
            })
        }
        render() {
            const { data, isLoading } = this.state
            return (
                <>
                {
                    (isLoading || !data) ? <p>data is loading</p>: 
                    <WraaperCompent {...this.props as P} data={data}></WraaperCompent>
                }
                </>
            )
        }
    }
}

export default withLoader