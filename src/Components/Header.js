/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import Navigation from "../Components/Navigation";

const Header = () => {


    const headerstyle=css`
     background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    padding:1rem;
    height: 5rem;

    @media (max-width: 420px) {
        height:2rem;
      }

    `;

    const sectionstyle=css`
    display: flex;
    flex-direction: row;

    @media (max-width: 420px) {
        h3{
            font-size:1rem
        }
      }
    
    `;

const logostyle =css`
height: 2rem;
padding:0.5rem;
@media (max-width: 420px) {
        height:0.5rem;
        padding:0.1rem;
      }
`;

    
    /*const footersubsstyle=css`

    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.1rem;
    
   

    
    `;*/
    
    /*const liststyle=css`
        list-style: none;
        border: black solid 4px;
       


        `;*/
    
    
    
   
    return ( 

<header css={headerstyle}>
       
<section css={sectionstyle}>
        <img css={logostyle} src="/logo.png" alt="logo" />
      <h3>Foreningen for Dyrevelfærd</h3>
      </section>

      <Navigation/>

        </header>
     );
}
 
export default Header;