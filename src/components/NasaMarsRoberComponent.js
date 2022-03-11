import React from "react";
import $ from 'jquery';

export default class NasaMarseRoberCompnent extends React.Component{
   

    constructor(props){
        super(props);
        this.state={
            Photo:[]
        }
    }

    componentDidMount(){
        this.fetch();
    }

    fetch(){
        var context=this;
        $.ajax({
            url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY',
            method:'GET',
            success:function(response){
                context.setState({
                    Photo:response.photos
                })
            }
        })
    }


    render(){
        return(
            <>
            <div className="container">
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>sol[date in mars]</th>
                        <th>Photo</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        this.state.Photo.map(mars=>
                            
                            <tr>
                                <td>{mars.id}</td>
                                <td>{mars.sol}</td>
                                <td>
                                    <img src={mars.img_src} width="300" height="200"/>
                                </td>

                            </tr>
                            )
                    }
                </tbody>
                </table>
            </div>
            </>
        )
    }
}

