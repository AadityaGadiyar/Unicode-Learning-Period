export default function validate(values){
    let errors = {};
    //first name and last name should not be empty
    if(!values.firstName){
        errors.firstName='First Name Required'
    }
    else if (!/^[a-zA-Z]+$/.test(values.firstName)){
        errors.firstName='Invalid First Name'
    }
    if (!values.lastName) {
        errors.lastName = 'Last Name Required'
    }
    else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
        errors.lastName = 'Invalid Last Name'
    }
    //names should not contain numbers
    //email
    //string to be more than 0 chars
    if(!values.email){
        errors.email='Email address is required'
    } 
    //need the string to be an email
    else if  (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
    {
        errors.email='Email address is invalid'
    }
    //password
    if (!values.password){
        errors.password="Password is required"
    }
    //the string to be more than 10 chars
    else if(values.password.length < 10){
        errors.password='Password length insufficient'
    }
    return errors;
    
    
    

}

