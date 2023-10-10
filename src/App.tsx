import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Update from './Pages/Update/Update';
import Navbar from './Components/Home/Navbar/Navbar';
import AddNewItem from './Pages/AddDishes/AddNewItem';
import UpdatedItems from './Pages/Update/UpdatedItems';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/update' element={<Update></Update>}></Route>
      <Route path='/addnew' element={<AddNewItem></AddNewItem>}></Route>
      <Route path='/update/:id' element={<UpdatedItems></UpdatedItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
