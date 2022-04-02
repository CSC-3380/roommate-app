import React, { useState } from 'react';
import logo from './media/Roomie.png';
import pic from './media/roommates.jpg';
import './style.css';
import './RegistrationPage.js';


function LoginPage() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    return (
        <div className='login'>
        <img src={logo} className="logos" alt="Logo" />
        <div className='text-read'>
            <h2 className='header-one'>Welcome to Roomie!</h2>
            <form>
            <label>enter email: </label>
            <input 
                type="email" 
                name='email' 
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                />
            <br></br>
            <br></br>
            <label>enter password: </label>
            <input 
                type="password" 
                name='password' 
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <br></br>
            <br></br>
            <input className="acc-button" type="submit" id="button" value="Login" />
            </form>
            <h4>Dont have account? <a href='/RegistrationPage'><u>Sign Up</u></a></h4>
        </div>
        <img src={pic} className='picture' alt="picture"/>
        </div>
        
    )
}

export default LoginPage