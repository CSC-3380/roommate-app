<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 53ed1d163477b2d9922cc5c931cd20f8afc07706
import logo from './media/Roomie.png';
import pic from './media/roommates.jpg';
import './style.css';
import './RegistrationPage.js';
import Axios from "axios";
import '../back-end/User';
import mongoose from 'mongoose';
const UserModel = require('../back-end/models/Users');


function LoginPage() {
<<<<<<< HEAD
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
=======

    const [user, setUser] = useState([]);
    const [inputVal, setInputVal] = useState('');

    let user1 = (userId) => {
        UserModel.find({ id : userId }, (error, data) => {
            if (error)
                console.log(error)
            else
                console.log(data)
        })
        setUser(user1);
    }

>>>>>>> 53ed1d163477b2d9922cc5c931cd20f8afc07706
    return (
        <div className='login'>
        <img src={logo} className="logos" alt="Logo" />
        <div className='text-read'>
            <h2 className='header-one'>Welcome to Roomie!</h2>
            <form>
<<<<<<< HEAD
            <label>enter email: </label>
            <input 
                type="email" 
                name='email' 
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                />
=======
            <label>enter id: </label>
            <input 
            type="id" id='id' value = {inputVal} onChange = {e =>
            setInputVal(e.target.value)}>
            </input>
            <button onClick = {user1(inputVal)}> Submit </button>
>>>>>>> 53ed1d163477b2d9922cc5c931cd20f8afc07706
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
<<<<<<< HEAD
            <h4>Dont have account? <a href='/RegistrationPage'><u>Sign Up</u></a></h4>
=======
            <h4>Don't have an account? <a href='RegistrationPage.js'><u>Sign Up</u></a></h4>
>>>>>>> 53ed1d163477b2d9922cc5c931cd20f8afc07706
        </div>
        <img src={pic} className='picture' alt="picture"/>
        </div>
        
    )
}

export default LoginPage