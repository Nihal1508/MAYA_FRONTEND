import './App.css'
import React from "react";
import {Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/signup";
import Addaname from "./components/addname";
import Storage from "./components/storage";
import ManageEvent from "./components/manageevent";
import Dashboard from "./components/dashboard";
import Addevent from "./components/addevent";
import Manageadmins from "./components/manageadmins";


function App() {
    return (

            <Routes>
                
                <Route path="/Login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/addname" element={<Addaname />} />
                <Route path='/storage' element={<Storage/>}/>
                <Route path='/manageevent' element={<ManageEvent/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/addevent' element={<Addevent/>}/>
                <Route path='/Manageadmins' element={<Manageadmins/>}/>
               


                
            </Routes>

    );
}

export default App;
