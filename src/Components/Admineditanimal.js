import {useEffect, useState} from "react";

const Admineditanimal = ({id}) => {


    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [age, setAge] = useState(null);
    const [assetId, setAssetId] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:4000/api/v1/animals/${id}`)
.then(response => response.json())
.then ((result) => {
    
    
    setName(result.name);
    setDescription(result.description);
    setAge(result.age);
    setAssetId(result.assetId);
})

.catch(err => console.error(err));
        
    }, []);
    return ( 

<div>
    <h2>Redigér dyret med id {id} </h2>
    <form>
<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
<textarea name="description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} >{description}</textarea>
<input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
<input type="number" name="assetId" id="assetId" value={assetId} onChange={(e) => setAssetId(e.target.value)}/>

<button type="submit" >Opdatér</button>
    </form>
</div>


     );
}
 
export default Admineditanimal;