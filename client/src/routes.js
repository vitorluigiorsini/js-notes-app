import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/home'
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'

import PrivateRoute from './components/auth/private_route'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path="/register" element={<RegisterScreen />} />
      <Route exact path="/login" element={<LoginScreen />} />
      <Route element={<PrivateRoute />}>
        <Route exact path="/notes" element={<NotesScreen />} />
        <Route exact path="/users/edit" element={<UserEditScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
