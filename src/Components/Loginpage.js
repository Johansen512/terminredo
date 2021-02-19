/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import Hero from "../Components/Hero"
import Omos from "../Components/Omos";
import Frivillig from "../Components/Frivillig";
import Dyrinod from "../Components/Dyrinod";
import Nyhedsbrev from "../Components/Nyhedsbrev";
import Adopter from "../Components/Adopter";
import Form from "../Components/Form";

import {useContext, useEffect, useState} from "react";

var diss = "block"


const Loginpage= () => {

    const loginpagestyle=css`
    display:block;
    z-index:1000;
    width:100%;
    height:6000px;
    background-color:red;
    position:absolute;
    
    
    `;


    return ( 
        <div css={loginpagestyle}>
        <Form />
        
        </div>


    );
}
 
export default Loginpage;