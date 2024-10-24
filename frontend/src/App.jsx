import React from 'react'























//yevin
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';  
import Register from './components/Register/Register';
import Questions from './components/Register/OnePageForm';
import Q1 from './components/Register/Q1';
import UserProfile from './components/Profile/UserProfile';
import QuestionsDisplay from './components/Profile/QuestionsPage';
import Card from './components/Card/Card';
import ForgotPassword from './components/ForgotPwd/ForgotPassword';
import ResetPassword from './components/ForgotPwd/ResetPassword';









const App = () => {
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
  
  
  
  
  <Router>
    <div>
    {/*yevin */}
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />      
    <Route path='/questions' element={<Questions/>}/>
    <Route path ='/q1' element={<Q1/>}/>
    <Route path='/uProfile' element={<UserProfile/>}/>
    <Route path='/qDisplay' element={<QuestionsDisplay/>}/>
    <Route path='/card' element={<Card/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>  
    <Route path="/reset-password/:token" element={<ResetPassword />} />



    
    </Routes>


     </div>
    </Router>
  )
}

export default App
