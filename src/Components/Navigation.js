/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import '../App.css';
import { Link } from "@reach/router";

const Navigation = () => {


    const navistyle=css`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    padding:1rem;
    height: 5rem;
    border: solid 4px red;
    margin: 0 3rem;

    `;



    
    const linkstyle=css`

    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-end;
    margin: 0.1rem;
    border: solid 4px black;
    
   

    
    `;
    
    /*const liststyle=css`
        list-style: none;
        border: black solid 4px;
       


        `;*/
    
    
    
   
    return ( 

<nav css={navistyle} >
        
<Link to="/" css={linkstyle}> Hjem</Link>  
<Link to="/Omos" css={linkstyle}> Om os </Link> 
<Link to="/Frivillig"css={linkstyle} > Bliv frivillig </Link> 
<Link to="/Dyrinod" css={linkstyle}> Dyr i nød? </Link> 
<Link to="/Adopter"css={linkstyle} > Adoptér et dyr </Link> 
     



      </nav>
     );
}
 
export default Navigation;