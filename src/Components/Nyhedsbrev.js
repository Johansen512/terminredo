/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";


const Nyhedsbrev = () => {


    const sectionstyle=css`
    display:flex; 
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    background-color:#e2edff;
    height: 100px;
    margin: 10px 0;
    width:100%auto;    
    `;

    const articlestyle=css`
    
    margin: 0 20%auto;
    padding:0;
    
    
    `;



    return ( 
        <section css={sectionstyle}>
            <article css={articlestyle}>
        <h2>Tilmed dig vores nyhedsbrev</h2>
        <p>Få inspiration og nyheder ...juuhhuu bla bla</p>
        </article>
        <form></form>
        </section>
     );
}
 
export default Nyhedsbrev;