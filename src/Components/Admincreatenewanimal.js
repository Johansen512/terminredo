import { navigate } from "@reach/router";
import {useContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";
import queryString from "query-string";


const Admincreatenewanimal = ({id}) => {


    /*const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [assetId, setAssetId] = useState("");*/
    const {token } = useContext(dataContext);
    const { register, errors, handleSubmit} = useForm();

    
        const onSubmit= (data) => { 
console.log (data)
        console.log (queryString.stringify(data));
        fetch(`http://localhost:4000/api/v1/animals/`, {
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Bearer ${ token }`,
  },
  "body": queryString.stringify(data) 
  /*`name=${name}&description=${description}&age${age}&assetId=${assetId}`*/
})
.then(response => {
    toast ("gemmer dyret ...");
    setTimeout (() => {
        navigate ("/admin/animals")
    }, 2500);
    
})
.catch(err => console.error(err));


    };


    /*const handleCreate = (e) => {

        e.preventDefault ();
        console.log (`name=${name}&description=${description}&age${age}&assetId=${assetId}`)
        fetch(`http://localhost:4000/api/v1/animals/`, {
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Bearer ${ token }`,
  },
  "body": `name=${name}&description=${description}&age${age}&assetId=${assetId}`
})
.then(response => {
    toast ("gemmer dyret ...");
    setTimeout (() => {
        navigate ("/admin/animals")
    }, 2500);
    
})
.catch(err => console.error(err));






    }*/

    const nameConfig = {
        required : {value: true, message: "Du mangler at indtaste navn"},
        minLength: { value: 2, message: "Navnet er for kort ... FOR KORT!!1"}
}

    const descriptionConfig = {
        required : {value: true, message: "Du mangler at indtaste noget"},
        maxLength: { value: 80, message: "Du har opbrugt dine tegn"}


    }

   


    return ( 

<div>
    <h2>Opret et nyt dyr </h2>
    <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name">Navn:</label>
        <input 
        type="text" 
        name="name" 
        id="name" 
      // defaultValue={animal?.name}
        
        ref={register( nameConfig )}/>
        {errors.name?.message}
        
        <label htmlFor="description">Beskrivelse:</label>
        <textarea 
        name="description" 
        id="description" 
       
        
        ref={register (descriptionConfig)}></textarea>
        {errors.description?.message}
        
        <label htmlFor="age">Antal dage:</label>
        <input type="number" 
        name="age" 
        id="age" 
      
        
        ref={register ({ required: true })}/>
        {errors.age && "Du mangler at indtaste antal dage"}
        
        <label htmlFor="assetId">Billed-id:</label>
        <input 
        type="number" 
        name="assetId" 
        id="assetId" 
        
        /*onChange={(e) => setAssetId(e.target.value)} */
        ref={register ({ required: true })}/>
        {errors.assetId && "Du mangler at indtaste id"}
    
        <button type="submit" >Opret!</button>

    </form>
</div>


     );
}
 
export default Admincreatenewanimal;