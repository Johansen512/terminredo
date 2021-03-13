import { navigate } from "@reach/router";
import {useContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { dataContext } from "../Contexts/DataContext";
import { useForm } from "react-hook-form";
import queryString from "query-string";




const Animalform = ({id}) => {

    
    const [assetId, setAssetId] = useState("");
    const {token } = useContext(dataContext);
    const [imgUrl, setImgUrl] = useState ("");
    const { register, errors, handleSubmit, watch} = useForm();
    const [animal, setAnimal] = useState();
    const localAssetId = watch (assetId)

  /*  useEffect(() => {

        fetch(`http://localhost:4000/api/v1/animals/${id}`)
.then(response => response.json())
.then ((result) => {
    
    setAnimal(result);
   
    setImgUrl(result.asset.url);
})

.catch(err => console.error(err));
        
    }, []);*/

useEffect(() => {
    fetch(`http://localhost:4000/api/v1/assets/${assetId}`)
      .then(response => response.json())
      .then (result => setImgUrl(result.url))
      .catch(err => console.error(err))

}, [assetId])



    const onSubmit = (data) => {
        console.log (data)
        if (animal) {
        fetch(`http://localhost:4000/api/v1/animals/${animal.id}`, {
        "method": "PUT",
        "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${ token }`,
        },
            "body": queryString.stringify(data)})
.then(response => response.json())
.then (result => {
    toast ("gemmer dyret ...");
    setTimeout (() => {
        navigate ("/admin/animals")
    }, 2500);})

.catch(err => console.error(err));} 

else {


    console.log (animal)
    console.log (queryString.stringify(animal));
    fetch(`http://localhost:4000/api/v1/animals/`, {
    "method": "POST",
    "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Bearer ${ token }`,},
    "body": queryString.stringify(animal) 
    /*`name=${name}&description=${description}&age${age}&assetId=${assetId}`*/
        })
        .then(response => {
        toast ("Opretter dyr ...");
        setTimeout (() => {
    navigate ("/admin/animals")
        }, 2500);})
.catch(err => console.error(err));

}}




    return ( 

<>
    
    <form onSubmit={handleSubmit(onSubmit)}>
<input
type="text" 
name="name" 
id="name" 
defaultValue={animal?.name || ''} 
ref={register}
/>

<textarea 
name="description" 
id="description" 
defaultValue={animal?.description || ''} 
ref={register}
 ></textarea>

<input 

type="number" 
name="age" 
id="age" 
defaultValue={animal?.age || ''} 
ref={register}
/>

<input 
type="number" 
name="assetId" 
id="assetId" 
defaultValue={animal?.assetId || ''} 
ref={register}
/>

<img src={imgUrl} alt={animal.name}/>

<button type="submit" value={animal ? "Opdatér" : "Opret dyr"  }/>

    </form>
</>




     );
}
 
export default Animalform;


