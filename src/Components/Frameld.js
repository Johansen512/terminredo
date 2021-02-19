/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";
import {useContext} from "react";




const Frameld= () => {
    const { checkedperson } = useContext(dataContext);
    

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {console.log (data.email, data.password);

        const person= {
            email:data.email,
            password:data.password
        }
        
        checkedperson === person ?  localStorage.removeItem('User', JSON.stringify(person)) : alert("Der er ingen med det navn og email tilmeldt!")
        
        
        
        navigate("/Unsplash")

        
      


    };

    const wrap=css`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;

    @media (max-width: 420px) {

        flex-direction:row;
            }
    
    h2{
        margin:1px 1px;
        @media (max-width: 420px) {

font-size:0.7rem;
    }

    }

    p{
        margin:0;
        padding-bottom:1rem;

        @media (max-width: 420px) {

font-size:0.5rem;
    }
        
    }

    form{

        margin-left:3rem;

        @media (max-width: 420px) {
            height:40px;
        width:40px;
        }


    }
    
    `;








    return ( 
<div css={wrap}>

<div>
        <h2>Afmeld vores nyhedsbrev</h2>
        <p>du kan altid komme tilbage</p>
        </div>

        <form  onSubmit={handleSubmit(onSubmit)}>
    
    
      
     
     
    <input type='email' name="email"  ref={register({ required: true })} />
    <input type='password' step="1" name="password"  ref={register({ required: true })} />
  
    
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" value="Afmeld"/>
  </form>
</div>

     );
}
 
export default Frameld;