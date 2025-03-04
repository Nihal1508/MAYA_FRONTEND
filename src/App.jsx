import './App.css'
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Storage from "./pages/storage";
import ManageEvent from "./pages/manageevent";
import Dashboard from "./pages/dashboard";
import Addevent from "./pages/addevent";
import Manageadmins from "./pages/manageadmins";
import PrivateRoute from './components/PrivateRoute';
import Events from './pages/Events';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
                <Route path='/storage' element={<Storage />} />
                <Route path='/events' element={<Events />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/addevent' element={<Addevent />} />
                <Route path='/manageadmins' element={<Manageadmins />} />
            </Route>
        </Routes>
    );
}

export default App;
