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








    return ( 
<>
        <h2>Afmeld vores nyhedsbrev</h2>
        <p>du kan altid komme tilbage</p>


        <form  onSubmit={handleSubmit(onSubmit)}>
    
    
      
     
     
    <input type='email' name="email"  ref={register({ required: true })} />
    <input type='password' step="1" name="password"  ref={register({ required: true })} />
  
    
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" value="Afmeld"/>
  </form>
</>

     );
}
 
export default Frameld;