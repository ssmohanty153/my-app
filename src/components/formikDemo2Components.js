import React from "react";

import { useFormik } from "formik";
const FormikDemo2Component =()=>{

    const formik=useFormik({
        initialValues:{
            Name:'',
            Price:'',
            City:'',
            stock:'false'


        },
        onSubmit:values=>{
            document.write(`
            <h2>Product Details</h2>
            <table width="400">
            <tr>
            <th>Name</th>
            <td>${values.Name}</td>
            </tr>
            <tr>
            <th>Price</th>
            <td>${values.Price}</td>
            </tr>
            <tr>
            <th>City</th>
            <td>${values.City}</td>
            </tr>
            <tr>
            <th>stock</th>
            <td>${values.stock}</td>
            </tr>
            </table>
            
            `

            );

        }


    })
    
    return(
        <>
        <form className="container" onSubmit={formik.handleSubmit}>
            <h2>Register Product</h2>
            <div className="mt-2">
                <label className="form-label">Product Name</label>
                <div>
                    <input type="text"  className="form-control" onChange={formik.handleChange} name="Name" value={formik.values.Name}/>
                </div>
            </div>
            <div className="mt-2">
                <label className="form-label">Price</label>
                <div>
                    <input type="text" className="form-control"  onChange={formik.handleChange} name="Price" value={formik.values.Price}/>

                </div>

            </div>
            <div className="mt-2">
                <label className="form-label">City</label>
                <div>
                    <select className="form-select"  onChange={formik.handleChange} name="City" value={formik.values.City}>
                        <option >Delhi</option>
                        <option>bangalore</option>
                        <option>Hydrabad</option>
                        <option>Pune</option>
                    </select>
                </div>

            </div>
            <div className="mt-2">
                <label className="form-label">In stock</label>
                <div>
                   <input type="checkbox" name="stock"  onChange={formik.handleChange} value={formik.values.stock} className="form-check-input"/> Yes
                </div>

            </div>
            <div className="mt-2">
                <div className="d-grid">
                <button className="btn btn-primary">register</button>
                </div>
            </div>



        </form>
        </>
    )

}
export default FormikDemo2Component;