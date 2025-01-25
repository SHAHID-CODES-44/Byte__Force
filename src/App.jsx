import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Feedback from "./components/Feedback";
import Service from "./components/Service";
import LandingPage from "./components/Landing_page"
import About from "./components/About";
import Testimonials  from './components/Testimonials';
import Helpdesk from './components/Helpdesk';
import Supporters from './components/Supporters';
import Task from './components/Task';
import Live from './components/Live';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='Signup' element={<Signup />} />
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/Service' element={<Service/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/Testimonials' element={<Testimonials/>}/>
        <Route path='/Helpdesk' element={<Helpdesk/>}/>
        <Route path='Supporters' element={<Supporters/>}/>
        <Route path='Task'element={<Task/>}/>
        <Route path='Live'element={<Live/>}/>
      </Routes>
    </>
  )
}

export default App
