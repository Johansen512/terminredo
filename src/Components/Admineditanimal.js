import { navigate } from "@reach/router";
import {useContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";
import queryString from "query-string";

const Admineditanimal = ({id}) => {


    /*const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");*/
    const [assetId, setAssetId] = useState("");
    const {token } = useContext(dataContext);
    const [imgUrl, setImgUrl] = useState ("");
    const { register, errors, handleSubmit} = useForm();
    const [animal, setAnimal] = useState();

    useEffect(() => {

        fetch(`http://localhost:4000/api/v1/animals/${id}`)
.then(response => response.json())
.then ((result) => {
    
    setAnimal(result);
    /*setName(result.name);
    setDescription(result.description);
    setAge(result.age);
    setAssetId(result.assetId);*/
    setImgUrl(result.asset.url);
})

.catch(err => console.error(err));
        
    }, []);

useEffect(() => {
    fetch(`http://localhost:4000/api/v1/assets/${assetId}`)
      .then(response => response.json())
      .then (result => setImgUrl(result.url))
      .catch(err => console.error(err))

}, [assetId])

    const onSubmit = (animal) => {

        
        fetch(`http://localhost:4000/api/v1/animals/${id}`, {
  "method": "PUT",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Bearer ${ token }`,
  },
  "body": queryString.stringify(animal)
  
  /*`name=${name}&description=${description}&age${age}&assetId=${assetId}`*/
})
.then(response => {
    toast ("gemmer dyret ...");
    setTimeout (() => {
        navigate ("/admin/animals")
    }, 2500);
    
})
.catch(err => console.error(err));






    }
    return ( 

<div>
    <h2>Redigér dyret med id {id} </h2>
    <form onSubmit={handleSubmit(onSubmit)}>
<input
type="text" 
name="name" 
id="name" 
defaultValue={animal?.name} 
ref={register}
/>

<textarea 
name="description" 
id="description" 
defaultValue={animal?.description} 
ref={register}
 ></textarea>

<input 

type="number" 
name="age" 
id="age" 
defaultValue={animal?.age} 
ref={register}
/>

<input 
type="number" 
name="assetId" 
id="assetId" 
defaultValue={animal?.assetId} 
ref={register}
/>

{/*<img src={imgUrl} alt={animal.name}/>*/}

<button type="submit" >Opdatér</button>

    </form>
</div>


     );
}
 
export default Admineditanimal;