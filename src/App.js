import React, { Component } from 'react';
import {useFormik} from 'formik';
import * as yup from "yup"
import './App.css';
import { min, values } from 'lodash';
import {motion} from "framer-motion";
import Image1 from "./images/img2.gif"

// Formik and Yup
// npm install formik yup --save

// const validate = values => {
//   const errors = {};
//   if(!values.name){
//     errors.name = "Name is required"
//   } else if (values.name.length >15){
//     errors.name = "Maximum 15 charecters only"
//   } else if (values.name.length < 5){
//     errors.name = "Minimum 5 charecters required"
//   }
//   return errors;
// }

const App = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      list:"",
      password:"",
      confirmpassword:""
    },
    validationSchema:yup.object({
      name:yup.string()
      .required("Name is required")
      .strict()
      .trim()
      .min(5 , "Minimum 5 characters required")
      .max(15 ,"Maximum 15 charecters only" ),
      email:yup.string()
      .email()
      .required("Email is required"),
      list:yup.string()
      .required("List is required"),
      password:yup.string()
      .required("Password is required"),
      confirmpassword:yup.string()
      .oneOf([yup.ref('password'), null], "Confirm password and  password must be same")
      .required("Confirmpassword is required")
      
      
    }),
    
    onSubmit:(userInputData) => {
      console.log(userInputData);
    }
  })
  return(
    <div className='container mt-3'> 
    <div className='jumbotron'>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <div className='form-group'>
        <label>Name:</label>
        <input 
        className='form-control'
        type="text" 
        name='name' 
        onChange={formik.handleChange} 
        value = {formik.values.name}
        />
        {formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}
        </div>

        <div className='form-group'>
        <label>Email:</label>
        <input 
        className='form-control'
        type="text" 
        name='email' 
        onChange={formik.handleChange} 
        value = {formik.values.email}
        />
        {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
        </div>
        <div className="form-group">
  <label >Select list:</label>
  <select
  name='list' 
  onChange={formik.handleChange} 
  value = {formik.values.list}
  
  className="form-control" id="sel1">
    <option value="">-- Select one --</option>
    <option value="1">MBA</option>
    <option value="2">BCA</option>
    <option value="3">GED</option>
  </select>
  {formik.errors.list ? <div className='text-danger'>{formik.errors.list}</div> : null}
</div>

<div className='form-group'>
        <label>Password:</label>
        <input 
        className='form-control'
        type="text" 
        name='password' 
        onChange={formik.handleChange} 
        value = {formik.values.password}
        />
        {formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
        </div>

        <div className='form-group'>
        <label>Confirm password:</label>
        <input 
        className='form-control'
        type="text" 
        name='confirmpassword' 
        onChange={formik.handleChange} 
        value = {formik.values.confirmpassword}
        />
        {formik.errors.confirmpassword ? <div className='text-danger'>{formik.errors.confirmpassword}</div> : null}
        </div>
        

        <button className='btn btn-primary'>Submit</button>
      </form>
      </div>
      <div className='card mt-3  ' >
      <img className="card-img-top" src={Image1} alt="Card image cap"/>
        <div className='card-body'>
          <h3 className='card-title'>Prathap</h3>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>

      </div>

      
      </div>
  )
}


export default App;
