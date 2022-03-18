import React from 'react'
import logo from './media/Roomie.png'
import './style.css'

function RegistrationPage() {
    return(
        <>
        <img src={logo} className="logos" alt="logo" />
        <form className='registration'>
            <label>first name: </label>
            <input type="text" name='first' />
            <br></br>
            <br></br>
            <label>last name: </label>
            <input type="text" name='last' />
            <br></br>
            <br></br>
            <label>enter email: </label>
            <input type="email" name='email' />
            <br></br>
            <br></br>
            <label>enter password: </label>
            <input type="password" name='password' />
            <br></br>
            <br></br>
            <label>re-enter password: </label>
            <input type="password" name='password' />
            <br></br>
            <br></br>
            <input className="acc-button" type="submit" value="Create Account"/>
        </form>
        </>
    )
}

export default RegistrationPage