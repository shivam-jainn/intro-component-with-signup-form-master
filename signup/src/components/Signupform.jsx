import React from 'react'
import {useFormik} from 'formik'

import './signupform.css'

const validation = (values)=>{
    const errors = {};

    if(! values.firstname){
        errors.firstname = 'required'
    }

    if(! values.lastname){
        errors.lastname = 'required'
    }

    if(! values.email){
        errors.email = 'required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
}


const Signupform = () => {

    const formik = useFormik({
  initialValues:{
    email: '',
    firstname: '',
    lastname: '',
  },
  validation,
  onSubmit: values=>{
    alert(JSON.stringify(values, null, 2));
  },
})

  return (
      <form onSubmit={formik.handleSubmit} className='signupform'>

          <input type="email"
                 name='email'
                 id='email'
                 onChange={formik.handleChange}
                 value={formik.values.email}
                 onBlur={formik.handleBlur}
                 placeholder='Email Address'
          />


<input type="firstname"
                 name='firstname'
                 id='firstname'
                 onChange={formik.handleChange}
                 value={formik.values.firstname}
                 placeholder='First Name'
                 onBlur={formik.handleBlur}
                 
                 />
                 {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

<input type="lastname"
                 name='lastname'
                 id='lastname'
                 onChange={formik.handleChange}
                 value={formik.values.lastname}
                 placeholder='Last name'
                 onBlur={formik.handleBlur}
          
          />


<input type="password"
                 name='password'
                 id='password'
                 onChange={formik.handleChange}
                 value={formik.values.password}
                 placeholder='password'
                 onBlur={formik.handleBlur}
          
          />

          <button type='submit' className='signupbtn'>
            Submit
          </button>
      </form>
    );
}

export default Signupform