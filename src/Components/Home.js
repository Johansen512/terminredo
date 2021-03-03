
import Hero from "../Components/Hero"
import Omos from "../Components/Omos";
import Frivillig from "../Components/Frivillig";
import Dyrinod from "../Components/Dyrinod";
import Nyhedsbrev from "../Components/Nyhedsbrev";
import Adopter from "../Components/Adopter";

import { navigate } from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import {useContext, useEffect} from "react";



const Home = () => {
  
  const { userlog } = useContext(dataContext);



  
  userlog && console.log (userlog); 
  
  return ( 

      <div>

      <Hero />
        <Omos />
        <Frivillig />
        <Dyrinod />
        <Nyhedsbrev />
        
        <Adopter  />

        
        </div>
        
       
        )

        
}
 
export default Home;