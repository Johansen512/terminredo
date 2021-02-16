/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";

const Frivillig = () => {

const frivilligstyle=css`
background-color: #e2edff;
margin:0.5rem 0;


`;

  const sectionstyle=css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding:0.5rem;

`;
  const articlestyle=css`
  
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.1rem;
  
  `;
const h3style=css`
background-color:#f7f7f7;
width:100%;



`;


    return ( 
<div css={frivilligstyle}>
        
<h2>Bliv frivillig</h2>
        <section css={sectionstyle}>
          
        <article css={articlestyle}><h3 css={h3style}>DYREREDDER</h3>
        <p> Flyf Flaf Fluf  Flyf Flaf Fluf  Flyf Flaf Fluf  
   </p>
        <div css={h3style}><p>Desværre desværre</p></div>
        </article>

<article css={articlestyle}><h3 css={h3style}>KREDSFORMAND</h3>
<p>Flyf Flaf Fluf  Flyf Flaf Fluf  Flyf Flaf Fluf   </p>
<div css={h3style}><p></p></div>
</article>

<article css={articlestyle}><h3 css={h3style}>BLIV INTERNATFRIVILLIG</h3>
        <p>Flyf Flaf Fluf  Flyf Flaf Fluf  Flyf Flaf Fluf   </p>
        <div css={h3style}><p></p></div>
        </article></section>
        
        
        </div>
     );
}
 
export default Frivillig;