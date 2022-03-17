import React from "react";
import { BrowserRouter as Router,Route,Routes,Link,Navigate } from "react-router-dom";
import EletronicComponent from "./EletronicComponent";
import FooterComponent from "./FooterComponent";
import FootwareComponent from "./FootwareComponent";
import HeaderComponent from "./HeaderComponent";
import NavBarComponent from "./NavBarComponent";
import HomeComponent from "./HomeComponent";
import FashionComponent from "./FashionComponent";
import DetailsComponent from "./DetailsComponents";
import CatagoriesComponents from "./CatagoriesComponents";
import ProductDetails from "./ProductDetils";

export default class IndexComponent extends React.Component{
    render(){
        return(
            <>
            <Router>
                <HeaderComponent/>
                <div className="row" style={{height:'530px'}}>
                    <div className="col-3">
                        <NavBarComponent />

                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route exact path="/" element={<HomeComponent />} />
                            <Route path="/home" element={<Navigate replace to="/" />} /> 
                            <Route path="/eletronics" element={<EletronicComponent />} />
                            <Route path="/footWare" element={<FootwareComponent />} />
                            <Route path="/fashion" element={<FashionComponent />} />
                            <Route path="/details/:id/:name/:price" element={<DetailsComponent />} />
                            <Route path="/categories" element={<CatagoriesComponents />} />
                            <Route path="/products/:id" element={<ProductDetails />} />
                        </Routes>

                    </div>
                </div>


                <FooterComponent/>
                
            </Router>
            </>
        )
    }
} 