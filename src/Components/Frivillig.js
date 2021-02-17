/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useEffect, useState} from "react";
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';

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


const imagestyle=css`
margin:0.2rem;
max-width:80%;
background-color:white;

`;
  const articlestyle=css`
  
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.5rem;
    padding:0.5rem;
    
  
  `;

  const backgroundstyle=css`
  background-color:lightgray;
  width:100%;
  
  
  `;

const backgroundstyle2=css`
background-color:white;
width:100%;


`;


const h2style=css`

margin: 2rem 20%;



`;


    return frivilligdata && ( 
<div css={frivilligstyle}>
        
<h2 css={h2style}>Bliv frivillig</h2>
        <section css={sectionstyle}>
        

        { frivilligdata.map (content => <article css={articlestyle}><div css={backgroundstyle}><h3>{ content.title}</h3></div>
          <div css={backgroundstyle2}><img css={imagestyle} src={content.asset.url} alt="beagle" />
        
        <p >{ content.content}</p></div><div css={backgroundstyle}>gnyf</div></article> )} 
          
</section>
        
        
        </div>
     );
}
 
export default Frivillig;