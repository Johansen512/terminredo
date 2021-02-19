/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";

const Dyrinod = () => {
//Data hentet fra context
const { dyrinoddata } = useContext(dataContext);

dyrinoddata && console.log("from context:", dyrinoddata);


const wrap = css`
margin: 40px 0;

h2{
margin-top:20px;
    font-size:40px;
}

p{
    margin-top:0;
}
`;

const dyrinodstyle=css`
    
    top:1260px;
   margin: 20px 0;
    position:absolute;
    
    height:200px;
    width: 100%;
    overflow:hidden;


    
    @media (max-width: 420px) {

top:2000px;
}
    
    `;



const dyrinodtextstyle=css`
margin:30px 0;
position: relative;
left: 300px;
z-index:10;
color:white;


@media (max-width: 420px) {

    left: 100px;
h2{
    font-size:1rem;
}

p{
    font-size:0.6rem;
}



}

`;





    return dyrinoddata && ( 

<div css={wrap}>
       <div css={dyrinodtextstyle}>
        <h2>{dyrinoddata.title}</h2>
       <p>{dyrinoddata.content}</p>
        </div>

        <div css={dyrinodstyle}>
       <img  src={dyrinoddata.asset.url} alt="Sonic? Er det dig?" />

       </div>
       
        </div>
     );
}
 
export default Dyrinod;