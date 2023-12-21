import React from 'react';
import {Routes,Route} from 'react-router-dom'

import User from './Pages/User'
import AddUser from './Pages/AddUser'
import EditUser from './Pages/EditUser'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/AddUser' element={<AddUser/>}/>
      <Route path='/EditUser/:id' element={<EditUser/>}/>
    </Routes>
    </>
  )
}

export default App;

