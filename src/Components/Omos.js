/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useEffect, useState} from "react";

const Omos = () => {
//Data hentet fra context
const { omosdata } = useContext(dataContext);

omosdata && console.log("from context:", omosdata);

  const sectionstyle=css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding:0.5rem;
  margin: 2rem 20%;

`;
  const articlestyle=css`
  
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.1rem;
    border:2px solid blue;
  
  `;
  
  
  
  
  
    return omosdata && ( 
<section css={sectionstyle}>
{ omosdata.map (content => <article css={articlestyle}><h2>{ content.title}</h2><p>{ content.content}</p></article>)} 


  
        
       
</section>
     );
}
 
export default Omos;