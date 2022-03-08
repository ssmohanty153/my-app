import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const YapValidationCopmonent=()=>{
    const formik=useFormik({
        initialValues:{
            Name:'',
            Salary:'',
            Email:''
        },
        validationSchema:yup.object({
        Name:yup.string()
                .required("user name required")
                .min(4,"Name too sort")
                .max(10,"name too big"),
         Salary:yup.number()
                   .required("Salary required"),
         Email:yup.string()
                 .email("invalid email")


        }),
        onSubmit:values=>{
            document.write(JSON.stringify(values));
        }
                            


    })
    return(
        <>
        <div>
            <form className="container" onSubmit={formik.handleSubmit}>
                <h2>Registation Form</h2>
                <dl>
                    <dt>Name
                    </dt>
                    <dd>
                        <input type="text" className="form-control" name="Name" {...formik.getFieldProps("Name")} />
                    </dd>
                    <dd className="text-danger">{(formik.touched.Name&&formik.errors.Name)?formik.errors.Name:null}</dd>
                    <dt>Salary
                    </dt>
                    <dd>
                        <input type="text" className="form-control" name="Salary" {...formik.getFieldProps("Salary")} />
                    </dd>
                    <dd className="text-danger">{(formik.touched.Salary&&formik.errors.Salary)?formik.errors.Salary:null}</dd>

                    <dt>Email
                    </dt>
                    <dd>
                        <input type="text" className="form-control" name="Email" {...formik.getFieldProps("Email")} />
                    </dd>
                    <dd className="text-danger">{(formik.touched.Email&&formik.errors.Email)?formik.errors.Email:null}</dd>

                </dl>
                <div className="d-grid">
                    <button className="btn btn-primary">Register</button>
                </div>

            </form>
        </div>
        </>
    )

}
export default YapValidationCopmonent;