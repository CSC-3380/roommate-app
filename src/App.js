import React from 'react'
import LoginPage from './front-end/LoginPage'
import ChoreList from './front-end/ChoreList'
import RoommateFinder from './front-end/RoommateFinder'
import Settings from './front-end/Settings'
import RegistrationPage from './front-end/RegistrationPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

function App() {
    return (
            <div className="App">
                <LoginPage />
                <ChoreList />
                <RoommateFinder />
                <Settings />
                <RegistrationPage />
            </div>
    )
}

export default App;
