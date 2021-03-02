/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";
import { navigate } from "@reach/router";


const Frivillig = () => {

  //Data hentet fra context
const { frivilligdata } = useContext(dataContext);

const { userlog } = useContext(dataContext);

  
userlog && console.log (userlog); 

frivilligdata && console.log("from context:", frivilligdata);

const frivilligstyle=css`
background-color: #e2edff;
width:100%;
margin:20px 0;


 


`;

  const sectionstyle=css`
 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  
  margin: 2rem 10%;
  font-weight:400;

  
  @media (max-width: 420px) {

flex-direction: column;
}

`;


const imagestyle=css`
margin:0.2rem;
max-width:90%;
background-color:white;

`;
  const articlestyle=css`
  
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.5rem;

   
    
  
  `;

  const backgroundstyle=css`
  background-color:#f7f7f7;
  width:100%;
  
  
  
  `;

const backgroundstyle2=css`
background-color:white;
width:100%;

p{
  padding:0.5rem;
}

`;


const h2style=css`

margin: 2rem 10%;



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