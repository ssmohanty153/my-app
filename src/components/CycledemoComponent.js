import React from "react";

class SuccessComponent extends React.Component {
    componentWillMount() {
        alert("Success component Requested");
    }
    componentDidMount() {
        alert("success component mount...")
    }
    componentWillUnmount() {
        alert("Success Component destroy and Unmount")
    }
    render() {
        return (
            <>
                <h2>Login success....</h2>
            </>
        )
    }
}
class ErrorComponent extends React.Component {
    componentWillMount() {
        alert("Error component Requested");
    }
    componentDidMount() {
        alert("Error component  mount...")
    }
    componentWillUnmount() {
        alert("Error Component destroy and Unmount")
    }
    render() {
        return (
            <>
                <h2>invalid password....</h2>
            </>
        )
    }
}

export default class CycleDemocomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:''
        }
        this.SuccessClick=this.SuccessClick.bind(this);
        this.ErrorClick=this.ErrorClick.bind(this);
        

    }
    SuccessClick(){
        this.setState({
            msg:<SuccessComponent />
        })
    }
    ErrorClick(){
        this.setState({
            msg:<ErrorComponent />
        })
    }

    render(){
        return(
            <>
            <div className="container">
                <button onClick={this.SuccessClick} className="btn btn-success m-3">success</button>
                <button onClick={this.ErrorClick} className="btn btn-danger m-3">error</button>
                <div className="text-center">
                <p>
                    {this.state.msg}
                </p>
                </div>

            </div>
            </>
        )
    }
}