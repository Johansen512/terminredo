/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useEffect, useState} from "react";

const Adopter = () => {

//Data hentet fra context
const { adoptdata } = useContext(dataContext);
const { data } = useContext(dataContext);

adoptdata && console.log("from context:", adoptdata);

const adoptblock=css`
margin: 5%;

`;

  const headsectionstyle=css`
  
  display:flex;
  flex-direction:column;
  margin: 0 20%;
 

  
  
  
  `;



  const adoptstyle=css`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  margin: 0  20%;
  max-width:100%;

  
  
  `;

  const articlegridstyle=css`
 display: grid;
 grid-template-columns:auto;
 border:black solid 1px;
 max-width:45%;
 margin: 0.1rem;
  
  
  `;

  const infotextstyle=css`
 
  
  `;


const articleblockstyle=css`

display:flex;
flex-direction: column;
margin: 0  20%;

`;

const imagestyle=css`
grid-column:1/2;
object-fit: cover;
max-width: 100%;
height: 100%;
overflow: hidden;


`;

const display = css`
height:200px;
`;


const infosectionstyle=css`
grid-column:2/4;

display:flex;
flex-direction:column;
margin:0.5rem;



`;


const textstyle=css`
margin:0;


`;


adoptdata && console.log (adoptdata.length)
    return adoptdata  && ( 

      <div css={adoptblock}>
<section css={headsectionstyle}>
   {data && <h2 css={textstyle}>{data[2].title}</h2>}

    {data &&  <p css={textstyle}>{data[2].content}</p>}
{data && <img css={display} src={data[2].asset.url} alt="beagle" />}
        </section>

<section css={articleblockstyle}>

  <h3 css={textstyle}>Dyr hos os </h3>
  <p css={textstyle}>Antal dyr: {adoptdata && (adoptdata.length)}</p>
  </section>


  

  <section css={adoptstyle}>
  { adoptdata.map (content => 
  
  <article css={articlegridstyle}>
    
    <img css={imagestyle} src={content.asset.url} alt="animal" />
    <section css={infosectionstyle}><h4>{ content.name}</h4>
    <p css={infotextstyle}>{ content.description}</p>
    <p>Været på internattet i { content.age} dage</p></section></article>)} 


 
 
  </section>

</div>



     );
}
 
export default Adopter;