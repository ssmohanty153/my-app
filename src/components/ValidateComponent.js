import React from "react";
import { Formik,Form,ErrorMessage,Field, yupToFormErrors } from "formik";
import * as yup from "yup";

const ValidateComponent=()=>{
    return(
        <Formik
        initialValues={
            {
                Name:'',
                Age:'',
                Salary:'',
                Email:''
            }
        }
        validationSchema={
            yup.object({
                Name:yup.string()
                         .required("Name most be required")
                         .min(4,"Minimum user name atleast 4 char")
                         .max(10,"atleast 5 char"),
                Age:yup.number()
                       .lessThan(60,"most be les then 60 ")
                       .required("salary required")
                       .max(18,"maximum 18 "),
                Salary:yup.number()
                          .required("salary required"),
                Email:yup.string()
                          .required("email rewiired")
                          .email("please enter valid email")
                                    
                            
            })
        }
        onSubmit={
            values=>{
                alert(JSON.stringify(values))
            }
        }
        
        
        
        >
            {
                props=>(
                    <>
                    <div className="container-fluid">
                        <h2>Registation Form</h2>
                        <Form >
                            <dl>
                                <dt> Name
                                </dt>
                                <dd>
                                    <Field className="form-control" type="text" name="Name"></Field>
                                </dd>
                                <dd><ErrorMessage name="Name"></ErrorMessage></dd>
                                <dt> Age</dt>
                                <dd>
                                    <Field className="form-control" type="text" name="Age"></Field>
                                </dd>
                                <dd><ErrorMessage name="Age"></ErrorMessage></dd>
                                <dt> Salary</dt>
                                <dd>
                                    <Field className="form-control" type="text" name="Salary"></Field>
                                </dd>
                                <dd><ErrorMessage name="Salary"></ErrorMessage></dd>
                                <dt> Email</dt>
                                <dd>
                                    <Field className="form-control" type="text" name="Email"></Field>
                                </dd>
                                <dd><ErrorMessage name="Email"></ErrorMessage></dd>

                            </dl>
                            <div>
                            <button disabled={props.isValid==false} className="btn btn-primary m-3">register</button>
                            <button disabled={props.dirty==false} className="btn btn-primary">Save</button>
                            </div>
                        </Form>
                    </div>
                    </>
                )
            }

        </Formik>
    )

}
export default ValidateComponent;