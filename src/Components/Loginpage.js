/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { navigate } from "@reach/router";
import Form from "../Components/Form";
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";


//Denne side er ikke færdig


const Loginpage= () => {

    const { userlog } = useContext(dataContext);

    

    const loginpagestyle=css`
    display:block;
  
    width:100%;
    height:6000px;
    background-color:red;
    position:absolute;
    
    
    `;

userlog && navigate("/Home")

 return ( 
       

      

        <div css={loginpagestyle}>


        <Form />
        
        </div>

        


    );
}
 
export default Loginpage;