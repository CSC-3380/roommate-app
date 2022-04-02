import React from 'react'
import LoginPage from './front-end/LoginPage'
import ChoreList from './front-end/ChoreList'
import RoommateFinder from './front-end/RoommateFinder'
import Settings from './front-end/Settings'
import RegistrationPage from './front-end/RegistrationPage'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
<<<<<<< HEAD
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/RegistrationPage" element={<RegistrationPage />} />
                    <Route path="/ChoreList" element={<ChoreList />} />
                    <Route path="/RoommateFinder" element={<RoommateFinder />} />
                    <Route path="/Settings" element={<Settings />} />
                </Routes>
            </div>
    );
=======
     <LoginPage></LoginPage>
    )
>>>>>>> 53ed1d163477b2d9922cc5c931cd20f8afc07706
}

export default App;
