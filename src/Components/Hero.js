/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";

import {useContext, useEffect, useState} from "react";

const Hero = () => {

//Data hentet fra context
const { herodata } = useContext(dataContext);

herodata && console.log("from context:", herodata.asset.url);




const herostyle=css`
    
    
   top:80px;
   position:absolute;
    height:200px;
    width: 100%;
    overflow:hidden;
    `;



const herotextstyle=css`
margin:0;

position: relative;
left: 215px;
z-index:10;
color:white;

`;

    
    return herodata &&( 
<>
       <div css={herotextstyle}>
        <h1>{herodata.title}</h1>
       <p>{herodata.content}</p>
        </div>

        <div css={herostyle}>
       <img  src={herodata.asset.url} alt="cats ... not the muscical" />

       </div>
       
        </>
     );
}
 
export default Hero;