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

export default class ConditionalRendering extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Msg:'',
            Username:'',
            Password:''
        }
        this.SuccessClick=this.SuccessClick.bind(this);
        this.ErrorClick=this.ErrorClick.bind(this);
        this.ChangeUserName=this.ChangeUserName.bind(this);
        this.ChangePassWord=this.ChangePassWord.bind(this);
        this.LoginClick=this.LoginClick.bind(this);
        

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
    ChangeUserName(e){
        this.setState({
            Username:e.target.value,
            Password:this.state.Password
        })
    }
    ChangePassWord(e){
        this.setState({
            Username:this.state.Username,
            Password:e.target.value
        })
    }
    LoginClick(){
        if(this.state.Username=='john'&& this.state.Password=='john123'){
            this.setState({
                msg:<SuccessComponent/>
            })
        }
        else{
            this.setState({
                msg:<ErrorComponent/>
            })
        }
    }


    render(){
        return(
            <>
            <div className="container">
                <dl>
                    <dt>UserName</dt>
                    <dd>
                        <input type="text" onChange={this.ChangeUserName} name="Username"></input>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" onChange={this.ChangePassWord} name="Password"></input>
                    </dd>
                    <div>
                        <button onClick={this.LoginClick}>Register</button>
                    </div>

                </dl>
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