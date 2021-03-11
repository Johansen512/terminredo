import { navigate } from "@reach/router";
import {useContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";
import queryString from "query-string";


const Admincreatenewanimal = ({id}) => {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [assetId, setAssetId] = useState("");
    const {token } = useContext(dataContext);
    const { register, errors, handleSubmit} = useForm();

    
        const onSubmit= (data) => { 

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
    return ( 

<div>
    <h2>Opret et nyt dyr </h2>
    <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name">Navn:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} ref={register({ required: true })}/>
        {errors.name && "Du mangler at indtaste navn"}
        <label htmlFor="description">Beskrivelse:</label>
        <textarea name="description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} ref={register ({ required: true })}></textarea>
        {errors.description && "Du mangler at indtaste beskrivelse"}
        <label htmlFor="age">Antal dage:</label>
        <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} ref={register ({ required: true })}/>
        {errors.age && "Du mangler at indtaste antal dage"}
        <label htmlFor="assetId">Billed-id:</label>
        <input type="number" name="assetId" id="assetId" value={assetId} onChange={(e) => setAssetId(e.target.value)} ref={register ({ required: true })}/>
        {errors.assetId && "Du mangler at indtaste id"}
    <button type="submit" >Opret!</button>

    </form>
</div>


     );
}
 
export default Admincreatenewanimal;