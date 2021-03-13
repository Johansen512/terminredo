import { useEffect, useState, useContext} from "react";
import {Link } from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import { toast } from "react-toastify";
import { navigate } from "@reach/router";


const Adminanimals = () => {

    const [animals, setAnimals] = useState (null);
    const { token } = useContext(dataContext);

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/animals")
.then((response) => response.json())
.then(result=> setAnimals(result))
.catch(err => console.error(err));


    }, []);

    const handleDelete = (e) => {
        
        fetch(`http://localhost:4000/api/v1/animals/${e.target.dataset.id}`, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then(response => {
    
    console.log(response)
    toast("Sletter dyret ... at du ved det ...");
    setTimeout(() => {
        fetch("http://localhost:4000/api/v1/animals")
.then((response) => response.json())
.then(result=> setAnimals(result))
.catch(err => console.error(err));

        


    }, 2500)
})
.catch(err => console.error(err));
    }
    return (<div>
        <h1>Vælg et dyr at redigere</h1>

        <ul>
{animals?.map(animal => (<li key={animal.id}>{animal.name}{" "}

<Link to={`edit/${animal.id}`}>Rediger</Link>
<button data-id={animal.id} onClick={handleDelete}>Slet dyr</button>
</li>))}
        </ul>

        <Link to="Admincreatenewanimal">Opret et nyt dyr</Link> 
    </div>  );
}
 
export default Adminanimals;