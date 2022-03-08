import React from 'react';
import { useFormik } from 'formik';

const ValidateFormData=(props)=>{
    const errors = {
        Name: '',
        Price: '',
        Code: ''
    }
    if (!props.Name) {
        errors.Name = "Product Name Required";
    }
    else if(props.Name.length<5){
        errors.Name = "Product Name too sort";

    }
    if (!props.Price) {
        errors.Price = "Product Price Required";
    }
    if (!props.Code) {
        errors.Code = "Product Code Required";
    }else if(!/[A-Z]{3}[0-9]{2}/.test(props.Code)){
        errors.Code = "Product Code not matching";
    }
    return errors;
}

const FormValidationComponent = () => {
   
    const formik = useFormik({
        initialValues: {
            Name: '',
            Price: '',
            Code: ''
        },
        validate:ValidateFormData,

        onSubmit:values=>{
            document.write(JSON.stringify(values));
    
        }
    })

    return (
        <>
            <div className="container-fluid">
               
                <form className="container" onSubmit={formik.handleSubmit}>
                <h2 className='center'>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>
                            <input className="form-control"  type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Name} name="Name" />
                        </dd>
                        <dd className='text-danger'>{(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}</dd>
                        <dt>Price</dt>
                        <dd>
                            <input type="text" className='form-control' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Price} name="Price" />
                        </dd>
                        <dd className='text-danger'>{(formik.touched.Price && formik.errors.Price)?formik.errors.Price:null}</dd>
                        <dt>Code</dt>
                        <dd>
                            <input type="text" className='form-control' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Code} name="Code" />
                        </dd>
                        <dd className='text-danger'>{(formik.touched.Code && formik.errors.Code)?formik.errors.Code:null}</dd>
                        
                    </dl>
                    <div className='d-grid'>
                    <button className='btn btn-primary'>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormValidationComponent;