/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";
import {useContext, useEffect, useState} from "react";
import Tilmeld from "../Components/Tilmeld";
import Frameld from "../Components/Frameld";


const Nyhedsbrev = () => {
    const { checkedpassword } = useContext(dataContext);
    const { checkedemail } = useContext(dataContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {console.log (data.email, data.password);

        localStorage.setItem('myEmailinLocalStorage', data.email)
    localStorage.setItem('myPasswordinLocalStorage', data.password);
    navigate("/Newssplash");


    };


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
            {checkedpassword ? <Frameld /> : <Tilmeld/>}
       
        </article>

        <form  onSubmit={handleSubmit(onSubmit)}>
    
    
      
     
     
      <input type='email' name="email"  ref={register({ required: true })} />
      <input type='password' step="1" name="password"  ref={register({ required: true })} />
    
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value="Tilmeld"/>
    </form>






        </section>
     );
}
 
export default Nyhedsbrev;