/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";

const Navigation = () => {

    

    const { userlog } = useContext(dataContext);

    

    const navistyle=css`
   
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    padding:1rem;
    height: 5rem;
    margin: 0 3rem;

    `;



    
    const linkstyle=css`

    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-end;
    margin: 0.1rem;
    
    
   

    
    `;
    
  
        

  
        
     
   
    return ( 


        <div>
            
              
        
<nav css={navistyle} >


<Link to="/" css={linkstyle}> Hjem</Link>  
<Link to="/Omos" css={linkstyle}> Om os </Link> 
<Link to="/Frivillig"css={linkstyle} > Bliv frivillig </Link> 
<Link to="/Dyrinod" css={linkstyle}> Dyr i nød? </Link> 
<Link to="/Adopter"css={linkstyle} > Adoptér et dyr </Link> 
<Link to="/Andenside" css={linkstyle} > En anden side </Link> 
<Link to="/Dentredjeside" css={linkstyle} > En tredje side </Link> 
<Link to="/Search" css={linkstyle} > Søg </Link> 
<Link to="/admin"css={linkstyle} > Admin </Link> 


 </nav> 
 
 

</div>

     
);
}
 
export default Navigation;