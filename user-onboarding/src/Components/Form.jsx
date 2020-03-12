import React from 'react';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

const FormContainer = () => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="name" />
      <Field type="email" name="email" placeholder="email" />
      <Field type="password" name="password" placeholder="password" />
      <label>
        <Field type="checkbox" name="tos" />
        Accept Terms of Service
      </label>
      <button>Submit</button>
    </Form>
  )
}

export default FormContainer;