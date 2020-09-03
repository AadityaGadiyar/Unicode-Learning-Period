import React from 'react'

function Display(props) {
    return (
        <div>
            <p className='lead text-center '>First Name:{props.name}</p>
            <br></br>
            <p className='lead text-center'>Last Name:{props.lastName}</p>
            <br></br>
            <p className='lead text-center'>Email:{props.email}</p>
            <br></br>
            
        </div>
    )
}

export default Display
