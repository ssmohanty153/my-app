import React from "react";
import { Link } from "react-router-dom";

export default class NavBarComponent extends React.Component{
    render(){
        return(
            <>
            <div className="m-3">
                <nav>
                    <ui className="list-unstyled">
                        <li className="m-2 d-grid"><Link to='/home' className="btn btn-primary">Home</Link></li>
                        <li className="m-2 d-grid"><Link to='/eletronics'className="btn btn-primary">Eletronics</Link></li>
                        <li className="m-2 d-grid"><Link to='/footWare'className="btn btn-primary">FootWare</Link></li>
                        <li className="m-2 d-grid"><Link to='/fashion'className="btn btn-primary">Fashion</Link></li>
                        <li className="m-2 d-grid"><Link to='/details'className="btn btn-primary">Details</Link></li>
                        <li className="m-2 d-grid"><Link to='/categories'className="btn btn-primary">Categories</Link></li>
                        
                    </ui>
                </nav>
            </div>
            </>
        )
    }
}