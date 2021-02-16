/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";

const Omos = () => {


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
  
  
  
  
  
    return ( 
<section css={sectionstyle}>
        <article css={articlestyle}><h2>Om os</h2>
        <p> gnyf gnyf gnyf gnyf gnyf 
   </p>
        
        </article>

<article css={articlestyle}><h2>DYR & MENNESKER</h2>
<p>gnyf gnyf gnyf gnyf gnyf </p>

</article>

<article css={articlestyle}><h2>MAD & FORBRUG</h2>
        <p>gnyf gnyf gnyf gnyf gnyf </p>
        
        </article></section>
     );
}
 
export default Omos;