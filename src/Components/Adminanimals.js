import { useEffect, useState} from "react";
import {Link } from "@reach/router";




const Adminanimals = () => {

    const [animals, setAnimals] = useState (null)

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/animals")
.then((response) => response.json())
.then(result=> setAnimals(result))
.catch(err => console.error(err));


    }, []);
    return (<div>
        <h1>Vælg et dyr at redigere</h1>

        <ul>
{animals?.map(animal => (<li key={animal.id}>{animal.name}{" "}

<Link to={`edit/${animal.id}`}>Rediger</Link></li>))}
        </ul>
    </div>  );
}
 
export default Adminanimals;