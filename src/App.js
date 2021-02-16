import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import DataContextProvider from './Contexts/DataContext';
import React from 'react';
import { Router } from '@reach/router';

function App() {
  
  return (
    <DataContextProvider>
   <>
   <Header />
   <router>
      <Home />
      </router>
      <Footer />
    </>

    </DataContextProvider>
  )
}

export default App;
