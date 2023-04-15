import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import MainLayout from './Layouts/MainLayout'
import Error from './Screens/Error'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
            <Route path="" element={<Home/>}/>
            <Route path="signin" element={<SignIn/>}/>
            <Route path="signup" element={<SignUp/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App