/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";

const Nyhedsbrev = () => {


    const sectionstyle=css`
    
    background-color:lightblue;
    height: 100px;
    margin: 10px 22%;
    border:solid blue 4px;
    
    
    `;
    return ( 
        <section css={sectionstyle}>
        <h2>Tilmed dig vores nyhedsbrev</h2>
        <p>Få inspiration og nyheder ...juuhhuu bla bla</p>
        <form></form>
        </section>
     );
}
 
export default Nyhedsbrev;