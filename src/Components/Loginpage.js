/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Form from "../Components/Form";



//Denne side er ikke færdig


const Loginpage= () => {

    const loginpagestyle=css`
    display:block;
  
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