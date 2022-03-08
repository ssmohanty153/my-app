import React from "react";

import {useFormik} from 'formik';


 const FormikDemoComponent=()=>{

const formik=useFormik({
    initialValues:{
        ProductId:'',
        Product:'',
        price:'',
        brand:''
    },
    onSubmit:values=>{
        document.write(JSON.stringify(values));

    }
})

    return(
        <>
        <div>
            <form className="container" onSubmit={formik.handleSubmit}>
                <dl>
                    <dt className="form-label">Product Id</dt>
                    <dd>
                        <input name="ProductId" onChange={formik.handleChange} value={formik.values.ProductId} className="form-control" type="text"></input>

                    </dd>
                    <dt className="form-label">Product</dt>
                    <dd>
                        <input name="Product" onChange={formik.handleChange} value={formik.values.Product} className="form-control" type="text"></input>

                    </dd>
                    <dt className="form-label">Price</dt>
                    <dd>
                        <input name="price" onChange={formik.handleChange} value={formik.values.price} className="form-control" type="text"></input>

                    </dd>
                    <dt className="form-label">Brand</dt>
                    <dd>
                        <input name="brand" onChange={formik.handleChange} value={formik.values.brand} className="form-control" type="text"></input>

                    </dd>
                </dl>
                <div className="d-grid">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
        </>
    )
}
export default FormikDemoComponent;