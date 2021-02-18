/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import Hero from "../Components/Hero"
import Omos from "../Components/Omos";
import Frivillig from "../Components/Frivillig";
import Dyrinod from "../Components/Dyrinod";
import Nyhedsbrev from "../Components/Nyhedsbrev";
import Adopter from "../Components/Adopter";
import Slider from "../Components/Slider";
import {useContext, useEffect, useState} from "react";

const Home = () => {


    return ( 
<>
      <Hero />
        <Omos />
        <Frivillig />
        <Dyrinod />
        <Nyhedsbrev />
        <Slider />
        <Adopter  />
        </>
     );
}
 
export default Home;