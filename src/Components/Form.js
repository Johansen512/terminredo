
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";
import { useForm } from "react-hook-form";
const Form = () => {


    const { userlog } = useContext(dataContext);
    

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {console.log (data.name, data.password);

        const userperson= {
            name:data.name,
            password:data.password
        }

       

        console.log (userperson)
        console.log (userlog)

        userperson !== userlog ? alert ("Du er allerede logget ind") : localStorage.setItem('Logged', JSON.stringify(userperson));

    }


    return ( 
<>
        <h1>Velkommen til Foreningen for dyrevelfærd</h1>

        <form  onSubmit={handleSubmit(onSubmit)}>
    
    
      
     
     
        <input type='name' name="name"  ref={register({ required: true })} />
        <input type='password'  name="password"  ref={register({ required: true })} />
      
        
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" value="Login"/>
      </form>
      </>

     );
}
 
export default Form;