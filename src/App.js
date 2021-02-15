import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import DataContextProvider from './Contexts/DataContext';
import React from 'react';
import { Router } from '@reach/router';

function App() {
  
  return (
    <DataContextProvider>
    <div className="App">
      <header className="App-header">
       <Home />
      </header>

      <Footer />
    </div>

    </DataContextProvider>
  )
}

export default App;
