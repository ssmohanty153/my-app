import React from "react";
import axios from "axios";

export default class AxiosApiComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Photos:[]
        }
    }
    componentDidMount(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(responce=>{
            this.setState({
                Photos:responce.data.photos
            })

            })
    }
    render(){
        return(
            <>
            <div className="container-fluid">
                <h2>Nasa Mars Rower Photos</h2>
                <div className="cards-group">
                    {
                        this.state.Photos.map(mars=>
                           <div className="d-flex" key={mars.id}>
                                <div className="card">
                                <img src={mars.img_src} alt={mars.id} height="50" width="50" className="card-img-top"/>
                                <div className="card-header">
                                    <h3>{mars.id}</h3>
                                    <p>{mars.sol}</p>
                             </div>

                            </div>
                               </div>

                        )

                    }
                </div>
            </div>
            </>
        )
    }
}