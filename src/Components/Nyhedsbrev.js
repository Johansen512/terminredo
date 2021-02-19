/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";
import Tilmeld from "../Components/Tilmeld";
import Frameld from "../Components/Frameld";


const Nyhedsbrev = () => {
    const { checkedperson } = useContext(dataContext);
    

  

        
      


    


    const sectionstyle=css`
    display:flex; 
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    background-color:#e2edff;
    height: 100px;
    margin: 100px 0;
    width:100%;
    
    @media (max-width: 420px) {
        height: 50px;
        margin-top:150px;

    }
    `;

    const articlestyle=css`
    
    margin: 0 20%;
    padding:0;
    
    
    `;



    return ( 
        <section css={sectionstyle}>
            <article css={articlestyle}>
            {checkedperson ? <Frameld /> : <Tilmeld/>}
       
        </article>

       






        </section>
     );
}
 
export default Nyhedsbrev;