/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useEffect, useState} from "react";

const Dyrinod = () => {
//Data hentet fra context
const { dyrinoddata } = useContext(dataContext);

dyrinoddata && console.log("from context:", dyrinoddata);

const dyrinodstyle=css`
    
    top:1300px;
   margin: 0 10px;
    border: red solid 4px;
    
    height:200px;
    width: 100%;
    overflow:hidden;
    `;



const dyrinodtextstyle=css`
margin:0;
position: relative;
left: 300px;
z-index:10;
color:white;

`;





    return dyrinoddata && ( 

<>
       <div css={dyrinodtextstyle}>
        <h1>{dyrinoddata.title}</h1>
       <p>{dyrinoddata.content}</p>
        </div>

        <div css={dyrinodstyle}>
       <img  src={dyrinoddata.asset.url} alt="Sonic? Er det dig?" />

       </div>
       
        </>
     );
}
 
export default Dyrinod;