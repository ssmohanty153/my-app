import React from "react";

 export default class LifecycleComponent extends React.Component{
     constructor(props){
         super(props);
         this.state={
             date:new Date(),
             msg:''
         }
         this.componentWillUnmount=this.componentWillUnmount.bind(this);
     }
     timer(){
         this.setState({
             date:new Date(),
             msg:''
         })
     }
     displaytime;
     componentDidMount(){
         this.displaytime=setInterval(()=>this.timer(),1000);
         this.setState({
             msg:'component mounted'
         })
         alert("component Mounted");
     }
     componentWillUnmount(){
         clearInterval(this.displaytime);
         this.setState({
             msg:'component unmount and clean up'
         })
     }
     render(){
         return(
             <>
             <div className="container">
                 <button onClick={this.componentWillUnmount}>Unmount</button>
                 <p>{this.state.date.toLocaleTimeString()}</p>
                 <p>{this.state.msg}</p>
             </div>
             </>
         )
     }
 }