import { navigate } from "@reach/router";
import {useContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { dataContext } from "../Contexts/DataContext";
const Admineditanimal = ({id}) => {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [assetId, setAssetId] = useState("");
    const {token } = useContext(dataContext);
    const [imgUrl, setImgUrl] = useState ("");

    useEffect(() => {

        fetch(`http://localhost:4000/api/v1/animals/${id}`)
.then(response => response.json())
.then ((result) => {
    
    
    setName(result.name);
    setDescription(result.description);
    setAge(result.age);
    setAssetId(result.assetId);
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

    const handleUpdate = (e) => {

        e.preventDefault ();
        fetch(`http://localhost:4000/api/v1/animals/${id}`, {
  "method": "PUT",
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






    }
    return ( 

<div>
    <h2>Redigér dyret med id {id} </h2>
    <form onSubmit={handleUpdate}>
<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
<textarea name="description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} ></textarea>
<input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
<input type="number" name="assetId" id="assetId" value={assetId} onChange={(e) => setAssetId(e.target.value)}/>
<img src={imgUrl} alt={name}/>
<button type="submit" >Opdatér</button>

    </form>
</div>


     );
}
 
export default Admineditanimal;