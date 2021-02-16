/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";

const Adopter = () => {


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

  
  
  `;

  const articlegridstyle=css`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 border:black solid 1px;
  
  
  `;


const articleblockstyle=css`

display:flex;
flex-direction: column;



`;


const infosectionstyle=css`
grid-column:2/4;

display:flex;
flex-direction:column;



`;
    return ( 

      <div >
<section css={headsectionstyle}>
        <h2>Adoptér et dyr</h2>

        <p>gnyf gnyf gnyf</p>

        </section>

<section css={articleblockstyle}>

  <h3>Dyr hos os</h3>
  <p>Antal dyr </p>

  <section css={adoptstyle}>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section css={infosectionstyle}>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />
<section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>

  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>
  <article css={articlegridstyle}>
  <img src="/placeholderhorse.jpg" alt="animal" />

  <section>
  <h4>Sophie</h4>

  <p>tekst bla bla</p>
  <p>Har været her i X uger</p>
  </section>
  </article>
  </section>
</section>
</div>



     );
}
 
export default Adopter;