import React from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';

function Routers() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<SignUp/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Routers
