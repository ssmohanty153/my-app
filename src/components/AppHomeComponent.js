import React from 'react';

import { BrowserRouter as  Router, Link, Route, Routes } from 'react-router-dom';
import { Navigate  } from "react-router-dom";

import Login  from './loginPage'


function HomeComponent() {
    return (
        <>
            <h2>Amazone Home</h2>
            <p>Online Shoping</p>
        </>

    )
}


const ContactComponet = () => (
    <>
        <h2>contact us</h2>
        <p>help@amazone.in</p>
    </>
)
const NotFoundCompnent=()=>{
    return(
        <>
        <h2>Page not found</h2>
        </>
    )
}

function AppHomeComponent() {
    return (
        <>
            <Router>
                
                    <header>
                    <span>
                        <Link to="/home">Home</Link>
                    </span>
                    <span>|</span>
                    <span><Link to="/contact">Contact</Link></span>
                    <span>|</span>
                    <span><Link to="/login">Login</Link></span>


                    </header>
                    <HomeComponent/>
                    <Routes>
                   
                    {/* <Route path="/home" element={<HomeComponent/>} />
                    <Route path="/contact" element={<ContactComponet />} />
                    <Route path='/login' element={< Login/>}/> */
                    }

                      <Route  path="/" element={<HomeComponent />} />
                     <Route  path="/home" element={<Navigate replace to="/" />} /> 
                     <Route path="/contact" element={<ContactComponet />} />
                    <Route exact path='/login' element={< Login/>}/> 
                    <Route path='*' element={< NotFoundCompnent/>}/> 
                </Routes>
            </Router>
        </>
    )
}
export default AppHomeComponent;