/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useEffect, useState} from "react";

const Frivillig = () => {

  //Data hentet fra context
const { frivilligdata } = useContext(dataContext);

frivilligdata && console.log("from context:", frivilligdata);

const frivilligstyle=css`
background-color: #e2edff;
width:100%;
margin:20px;
 


`;

  const sectionstyle=css`
 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding:0.5rem;
  margin: 2rem 20%;

`;
  const articlestyle=css`
   background-color:white;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.5rem;
    padding:0.5rem;
    
  
  `;
const h2style=css`

margin: 2rem 20%;



`;


    return frivilligdata && ( 
<div css={frivilligstyle}>
        
<h2 css={h2style}>Bliv frivillig</h2>
        <section css={sectionstyle}>

        { frivilligdata.map (content => <article css={articlestyle}><h3>{ content.title}</h3><p>{ content.content}</p></article>)} 
          
</section>
        
        
        </div>
     );
}
 
export default Frivillig;