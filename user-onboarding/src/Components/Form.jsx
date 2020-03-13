import React from 'react';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

const FormContainer = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="name" />
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="email" />
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="password" />
      <label>
        <Field type="checkbox" name="tos" />
        Accept Terms of Service
      </label>
      <button>Submit</button>
    </Form>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Your name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(12, "Password must be 12 characters or longer")
      .required("Password is required")
  })
})(FormContainer)

export default FormikLoginForm;