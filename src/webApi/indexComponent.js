 import React, { useEffect, useState } from "react";
 import axios from "axios";
 import { BrowserRouter as Router,Route,Routes,Link,Navigate, useParams,useNavigate } from "react-router-dom";
 import { useFormik } from "formik";


 export class CatagoriesComponent extends React.Component{

     constructor(props){
         super(props);
         this.state={
             categories:[]
         }
     }
     componentDidMount(){
        axios.get('http://127.0.0.1:8080/getcatagory')
        .then(res=>{
            this.setState({
                categories:res.data
            })
        })
     }
     render(){
         return(
             <>
             <div>
                 <h3>catagories</h3>
                 <ol>
                     {
                         this.state.categories.map(category=>
                            <li key={category.catagoryId}><Link to={'/products/'+category.catagoryId}>{category.catagoryName}</Link></li>
                            )
                     }
                 </ol>
             </div>
             </>
         )
     }
     
 }

 const HomeComponent=()=>{
 
       return(
        <>
        <div>
            <h2>Amazone Home-Online Shoping</h2>
   
        </div>
        </>
       )
   }


//    export class ProductComponent extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             products:[]
//         }
//     }
//     componentDidMount(){
//        axios.get('http://127.0.0.1:8080/getproduct')
//        .then(res=>{
//            this.setState({
//             products:res.data
//            })
//        })
//     }
//     render(){
//         return(
//             <>
//             <div>
//                 <h3>products</h3>
//                 <ol>
//                     {
//                         this.state.products.map(product=>
//                            <li key={product.ProductId}>{product.Name}</li>
//                            )
//                     }
//                 </ol>
//                 <div>
//                     <Link to="/categories">Back to Categories</Link>
//                 </div>
//             </div>
//             </>
//         )
//     }
    
// }


 const ProductComponent=()=>{

    const {id}=useParams();
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8080/getproduct/${id}`)
        .then(res=>{
            setProducts(res.data);
        })

    },[])
    return(
        <>
        <div>
            <h3>Product list</h3>
            <ol>
                {
                    products.map(product=>
                        <li key={product.ProductId}><Link to={'/product/'+product.ProductId}>{product.Name}</Link></li>
                   )
                }
            </ol>
            <div>
                <Link to={'/categories'}>Back to catagories</Link>
            </div>
        </div>
        </>
    )
}



const CatagoryComponent=()=>{

    const {id}=useParams();
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8080/getproductDetail/${id}`)
        .then(res=>{
            setProduct(res.data);
        })

    },[])
    return(
        <>
        <div>
            <h3>Product details</h3>
            <dl>
                {
                    product.map(items=>
                       <>
                       <dt>Name</dt>
                       <dd>{items.Name}</dd>
                       <dt>Price</dt>
                       <dd>{items.Price}</dd>
                       <div>
                       <Link to={'/products/'+items.CatagoryId}>Back to product</Link>
                      </div>
                       
                       </>
                       
                   )
                }
            </dl>
            <div>
               
            </div>
        </div>
        </>
    )
}


export const RegisterProduct=()=>{

    const[catagories,setCatagories]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8080/getcatagory`)
        .then(res=>{
            setCatagories(res.data);
        })

    },[])


    const formik=useFormik({
        initialValues:{
            ProductId:0,
            Name:'',
            Price:0,
            CatagoryId:0
        },
        onSubmit:values =>{
            axios.post('http://127.0.0.1:8080/addproduct',values);
            alert("record inserted");
            navigate('/categories');
        }
    })
return(
    <>
    <form onSubmit={formik.handleSubmit}>
        <h3>Register Product</h3>
        <dl>
            <dt>Product Id</dt>
            <dd><input name="ProductId" onChange={formik.handleChange} value={formik.values.ProductId} type="text" className="form-control" /></dd>
            <dt>Name</dt>
            <dd><input name="Name" onChange={formik.handleChange} value={formik.values.Name} type="text" className="form-control" /></dd>
            <dt>Price</dt>
            <dd><input type="text" name="Price" onChange={formik.handleChange} value={formik.values.Price} className="form-control" /></dd>
            <dt>CatagoryId</dt>
            <dd><select className="form-select" name="CatagoryId" onChange={formik.handleChange} value={formik.values.CatagoryId}>
               {
                   catagories.map(category=>
                       <option  key={category.catagoryId} value={category.catagoryId}>{category.catagoryName}</option>
                   )
               }
                </select>
            </dd>
        </dl> 
       <button className="btn btn-primary">Add Product</button>
    </form>
    </>
)
}



 export default class IndexComponents extends React.Component{
     render(){
         return(
             <>
              <div className="container-fluid">
                  <Router>
                      <header className="bg-danger text-white text-center p-2 mt-2">
                          <h1><span className="bi bi-cart4"></span>Amazone Shoping</h1>
                      </header>

                      <div className="row mt-2">
                          <div className="col-3">
                          <div className="mt-2 d-grid">
                            <Link className="btn btn-danger" to="/home">Home</Link>
                            </div>
                            <div className="mt-2 d-grid">
                            <Link className="btn btn-danger" to="/categories">Categories</Link>
                            </div>
                            {/* <div className="mt-2 d-grid">
                            <Link className="btn btn-danger" to="/products">products</Link>
                            </div> */}
                             <div className="mt-2 d-grid">
                            <Link className="btn btn-danger" to="/register">Add Product</Link>
                            </div>

                          </div>
                          <div className="col-9">
                              <Routes>
                              <Route exact path="/" element={<HomeComponent />} />  
                            <Route path="/home" element={<Navigate replace to="/" />} /> 
                            <Route path="/categories" element={<CatagoriesComponent />} />
                            <Route path="/products/:id" element={<ProductComponent />} />
                            <Route path="/product/:id" element={<CatagoryComponent />} />
                            <Route path="/register" element={<RegisterProduct />} />
                              </Routes>

                          </div>

                      </div>
                  </Router>

              </div>
             </>
            
         )
     }
 }