import {useState} from 'react';
import {callbackify} from 'util';

const useForm = (callback,validate) =>
{
    const [values, setValues] = useState({ firstName: '', lastName:'', email: '', password: '' });
    const [errors, setErrors] = useState({ });
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChange = event => {
        const { name, value } = event.target;
        setValues(
            {
                ...values,
                [name]: value
            }
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //handling errors
        
        setErrors(validate(values));
        setIsSubmitting(true);
        callback();
    };

    return{
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting
    };
        
    
};

export default useForm;