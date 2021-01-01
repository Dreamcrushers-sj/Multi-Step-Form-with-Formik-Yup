import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export const Payment = ({submit, setFormValues, preValues}) => {
    return (
        <Formik
            initialValues={preValues}
            validationSchema={Yup.object({
                cardName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                cardNumber: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .min(12, 'Must be 12 characters or more')
                    .required('Required'),
            })}
            onSubmit={(values) => {
            submit(2);
            setFormValues({...values, ...preValues}) 
            }}
        >
            <Form>
                <label htmlFor="cardName">Card Name</label>
                <Field name="cardName" type="text" />
                <ErrorMessage name="cardName" />
                <br/>
                <br/>
                <label htmlFor="cardNumber">Card Number</label>
                <Field name="cardNumber" type="text" />
                <ErrorMessage name="cardNumber" />
                <br/>
                <br/> 
                <button onClick={() =>submit(0)}>Back</button>                           
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};