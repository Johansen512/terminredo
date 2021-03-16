/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";
import Slider from "../Components/Slider";
import { navigate } from "@reach/router";

const Adopter = () => {

//Data hentet fra context
const { adoptdata } = useContext(dataContext);
const { data } = useContext(dataContext);

const { userlog } = useContext(dataContext);

  
userlog && console.log (userlog);  

adoptdata && console.log("from context:", adoptdata);

const adoptblock=css`
margin: 5%;

`;

  



  const adoptstyle=css`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  margin: 0  10%;
  max-width:100%;
  
  @media (max-width: 420px) {
    flex-direction:column;
      }
  
  
  `;

  const articlegridstyle=css`
 display: grid;
 //grid-template-columns:auto;
 grid-template-columns:repeat (auto-fit, minmax(400, 1fr));
 border:black solid 1px;
 max-width:45%;
 margin:0.5rem;

 @media (max-width: 420px) {
    flex-direction:column;
    max-width:100%;
      }
  
 
  
  `;

  const infotextstyle=css`
 
  
  `;


const articleblockstyle=css`

display:flex;
flex-direction: column;
margin-top:80px;
margin-bottom: 20px;
margin-left:10%;
margin-right:0;
color:black;

h2{
  margin:1rem 0;
color:black;
}

p{

  margin:0;
color:black;
}

`;

const imagestyle=css`
grid-column:1/2;
object-fit: cover;
width: 100%;
height: 100%;
overflow: hidden;



`;




const infosectionstyle=css`
grid-column:2/4;

display:flex;
flex-direction:column;
margin:0.5rem;



`;

const headsectionstyle=css`
  
  display:flex;
  flex-direction:column;
  margin: 0 20%;
  //z-index:200;
  //position:relative;
  
  `;


const display = css`
height:200px;
//position:absolute;
//top:1610px;
width: 100%;
overflow:hidden;
margin:1rem 0;
object-fit:cover;


`;

const textstyle=css`
margin:0;
color:white;


`;


adoptdata && console.log (adoptdata.length)
    return adoptdata  && ( 

      

      <div css={adoptblock}>
<section css={headsectionstyle}>
   {data && <h2 css={textstyle}>{data[2].title}</h2>}

    {data &&  <p css={textstyle}>{data[2].content}</p>}
    </section>
    <section>
{data && <img css={display} src={data[2].asset.url} alt="beagle" />}
        </section>

<section css={articleblockstyle}>

  <h2 >Dyr hos os </h2>
  <p >Antal dyr: {adoptdata && (adoptdata.length)}</p>
  </section>


  

  <section css={adoptstyle}>
  { adoptdata.slice(0,8).map (content => 
  
  <article css={articlegridstyle}>
    
    <img css={imagestyle} src={content.asset.url} alt="animal" />
    <section css={infosectionstyle}><h4>{ content.name}</h4>
    <p css={infotextstyle}>{ content.description}</p>
    <p>Været på internattet i { content.age} dage</p></section></article>)} 


 
 
  </section>

  <Slider />

</div>

     );
}
 
export default Adopter;