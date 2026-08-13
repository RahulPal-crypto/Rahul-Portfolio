import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Intro from './pages/Intro'

function HomeGate(){
  return sessionStorage.getItem('portfolioIntroSeen') ? <Home /> : <Navigate to="/intro" replace />
}

export default function App(){
  return (
    <Routes>
      <Route path='/intro' element={<Intro/>} />
      <Route path='/' element={<HomeGate/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/projects/:id' element={<ProjectDetails/>} />
      <Route path='/admin/login' element={<AdminLogin/>} />
      <Route path='/admin' element={<AdminDashboard/>} />
    </Routes>
  )
}
