import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/authentication/Register'
<<<<<<< HEAD
import DisasterDetail from './components/DisasterDetail'
import Navbar from './components/Navbar/Navbar'
import TrainingPage from './components/TrainingPage'

=======
import Login from './components/authentication/Login'
import ForgotPassword from './components/authentication/ForgotPassword'
<<<<<<< HEAD
import ResetPassword from './components/authentication/resetPassword'
=======
>>>>>>> ceb016e5e7132b24de4d19a2942690adc2199707
>>>>>>> f8bd992fccd4cea7dd1aeb82e438486190b05e69
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/disaster/:id" element={<DisasterDetail />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
<<<<<<< HEAD
        <Route path={'/password/reset/:token'} element={<ResetPassword />} />
=======
>>>>>>> ceb016e5e7132b24de4d19a2942690adc2199707
>>>>>>> f8bd992fccd4cea7dd1aeb82e438486190b05e69
      </Routes>
    </BrowserRouter>
  )
}

export default App
