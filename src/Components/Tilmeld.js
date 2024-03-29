/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";
import {useContext} from "react";






const Tilmeld= () => {

    const { checkedperson } = useContext(dataContext);
    

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {console.log (data.email, data.password);

        const person= {
            email:data.email,
            password:data.password
        }
        
        checkedperson === person ?  console.log ("Du er allerede tilmeldt") : localStorage.setItem('User', JSON.stringify(person))
      
        navigate("/Newssplash")

        
      


    };

    const wrap= css`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    
    h2{
        margin:1px 1px;
        
    }

    p{
        margin:0;
        padding-bottom:1rem;
        
    }

    form{

        margin-left:3rem;


    }
    
    `;



    return ( 
<div css={wrap}>

    <div>
        <h2>Tilmed dig vores nyhedsbrev</h2>
        <p>Få inspiration og nyheder ...juuhhuu bla bla</p>
        </div>
        <form  onSubmit={handleSubmit(onSubmit)}>
    
    
      
     
     
    <input type='email' name="email"  ref={register({ required: true })} />
    <input type='password' step="1" name="password"  ref={register({ required: true })} />
  
    
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" value="Tilmeld"/>
  </form>

</div>

     );
}
 
export default Tilmeld;