/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import '../App.css';

const Footer = () => {


    const footerstyle=css`
    background-color: #e2edff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:flex-end;
    padding:0.5rem;



    `;
    const footersubsstyle=css`

    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.1rem;
    
   

    
    `;

const textstyle=css`
margin:0;

a{
    text-decoration:none;
    color:blue;
}


`;
    
    /*const liststyle=css`
        list-style: none;
        border: black solid 4px;
       


        `;*/
    
    
    
   
    return ( 

<footer>
        <section css={footerstyle}>
            <div css={footersubsstyle}>
        <h2 css={textstyle}>KONTAKT</h2>
        <p css={textstyle}>Tornebuskvej 22, 1.</p>
        <p css={textstyle}>1131 København K</p>
        <p css={textstyle}>CVR: 22446187</p>
        <p css={textstyle}>Husk at du kan få fradag for donationer på op til 16.600</p>
         </div>

         <div>© 2020 - Foreningen for Dyrevelfærd</div>

    <div css={footersubsstyle} >
        <h2 css={textstyle}>PARTNERE</h2>
        
        <p css={textstyle}><a href="https://anima.dk/">Anima</a></p>
        <p css={textstyle}><a href="https://www.worldanimalprotection.dk/">World Animal Protection</a></p>
        <p css={textstyle}><a href="https://www.foedevarestyrelsen.dk/">Fødevarestyrelsen</a></p>
        <p css={textstyle}><a href="https://faktalink.dk/">Faktalink</a></p>

        
    </div>
</section>


        </footer>
     );
}
 
export default Footer;