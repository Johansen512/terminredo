
import Hero from "../Components/Hero"
import Omos from "../Components/Omos";
import Frivillig from "../Components/Frivillig";
import Dyrinod from "../Components/Dyrinod";
import Nyhedsbrev from "../Components/Nyhedsbrev";
import Adopter from "../Components/Adopter";
import Admincreatenewanimal from "../Components/Admincreatenewanimal"
import { navigate } from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import {useContext, useEffect} from "react";



const Home = () => {
  
  const { userlog } = useContext(dataContext);



  
  userlog && console.log (userlog); 
  
  return ( 

      <div>

      {/*os />
        <Frivillig />
        <Dyrinod />
        <Nyhedsbrev />
        
      <Adopter  />*/}
<Admincreatenewanimal />
        
        </div>
        
       
        )

        
}
 
export default Home;