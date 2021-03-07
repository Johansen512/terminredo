import './App.css';
import Home from "./Components/Home";
import Omos from "./Components/Omos";
import Frivillig from "./Components/Frivillig";
import Dyrinod from "./Components/Dyrinod";
import Adopter from "./Components/Adopter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Newssplash from "./Components/Newssplash";
import Unsplash from "./Components/Unsplash";
import Loginpage from "./Components/Loginpage";
import DataContextProvider from './Contexts/DataContext';
import React from 'react';
import { Router } from '@reach/router';
import Admin from './Components/Admin';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <DataContextProvider>


   <>
   <Header />
   <Router>
      
      <Home path="/" />
      <Omos path="Omos" />
      <Frivillig path="Frivillig" />
      <Dyrinod path="Dyrinod" />
      <Adopter path="Adopter" />
      <Newssplash path="Newssplash" />
      <Unsplash path="Unsplash" />
      <Admin path="admin/*" />
       
      </Router>
      <ToastContainer 
      position="top-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
      <Footer />
    </>
        
    </DataContextProvider>
  )
}

export default App;
