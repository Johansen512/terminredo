import { navigate } from "@reach/router";
import {useContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";


const Admincreatenewanimal = ({id}) => {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [assetId, setAssetId] = useState("");
    const {token } = useContext(dataContext);
    const { register, handleSubmit} = useForm();

    
        const onSubmit= (data) => { 

        console.log (data);
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
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} ref={register}/>
        <label htmlFor="description">Beskrivelse:</label>
        <textarea name="description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} ref={register}></textarea>
        <label htmlFor="age">Antal dage:</label>
        <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} ref={register}/>
        <label htmlFor="assetId">Billed-id:</label>
        <input type="number" name="assetId" id="assetId" value={assetId} onChange={(e) => setAssetId(e.target.value)} ref={register}/>

    <button type="submit" >Opret!</button>

    </form>
</div>


     );
}
 
export default Admincreatenewanimal;