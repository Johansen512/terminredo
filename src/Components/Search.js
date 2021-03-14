import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";





const Search = () => {


    const {register, watch} = useForm ();

    const [users, setUsers] = useState(null);

    const searchTerm = watch("search");


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then (response  => response.json())
        .then (result => setUsers(result))
    }, []);


    const searchResult = users?.filter((user) => { if (searchTerm === "") return user;
    if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) return user;

    });

    console.log (searchResult)
    return (  

<>
<h2>Søg her!</h2>
<h3>{ searchTerm }</h3>
<form> <input 
    type="search" 
    name="search" 
    id="search" 
    placeholder="Søg ..." 
    ref={register} /></form>

{searchResult?.map((user, index) => 
    ( 
        <p key={user.id}>{user.name}</p>
    )
    
    
    
    )}


</>

    );
}
 
export default Search;