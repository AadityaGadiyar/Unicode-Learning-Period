import React,{useState} from 'react'
import useForm from './useForm'
import validate from './ValidateLogin'
import Display from './Display'

function Form() {
    
    const { handleSubmit, handleChange,
        values,errors,isSubmitting} = useForm(submit, validate)
    

    function submit() {
        console.log('Submit Successful')
        console.log(isSubmitting)
        console.log(Object.keys(errors).length)
    }

    let display = null;

    if (isSubmitting && Object.keys(errors).length===0){
        display = (
            <Display name={values.firstName}
            lastName={values.lastName}
            email={values.email}
            />
        )
    }

    return (
        <div className='container'>

            <form onSubmit={handleSubmit}
             noValidate>
                {/* FirstName */}
                <div>
                    
                    <label>First Name</label>
                    <div>
                        <input type='text' name='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                        className='form-control'
                        ></input>
                        {errors.firstName && <p className='text-danger'>{errors.firstName}</p>}
                    </div>
                </div>
                {/* LastName */}
                <div>
                    <label>Last Name</label>
                    <div>
                        <input type='text' name='lastName'
                            value={values.lastName}
                            onChange={handleChange}
                            className='form-control'
                        ></input>
                        {errors.lastName && <p className='text-danger'>{errors.lastName}</p>}
                    </div>
                </div>
                 {/* email */}
                <div>
                <label>Email</label>
                <div>
                <input type='email' name='email' value={values.email}
                            onChange={handleChange} className='form-control'
                ></input>
                        {errors.email && <p className='text-danger'>{errors.email}</p>}
                </div>
                </div>
                {/* password */}
                <div>
                <label>Password</label>
                <div>
                <input type='password' name='password'
                value={values.password}
                onChange={handleChange}
                className='form-control'
                ></input>
                {errors.password && <p className='text-danger'>{errors.password}</p>}
                </div>
                </div>
                <button type="submit" className='btn btn-primary mt-3'>Submit</button>
            </form>
             {display}
        </div>
    )
}

export default Form