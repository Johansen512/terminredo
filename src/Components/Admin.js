/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useContext, useEffect} from "react";
import { dataContext } from "../Contexts/DataContext";
import {navigate, Router } from "@reach/router";
import { toast } from "react-toastify";
import Mytoast from "./Mytoast";
import Form from "./Form";
import Adminhome from "./Adminhome";
import Adminanimals from "./Adminanimals";
import Admineditanimal from './Admineditanimal';

import {Link } from "@reach/router";
import Admincreatenewanimal from './Admincreatenewanimal';

const Admin = () => {

    const {token, logout} = useContext(dataContext);

    /*useEffect(() => {
        if (!token) { navigate ("/Loginpage")}


    }, [token]);*/

    const handlelogout = () => {
    toast.dark(Mytoast, {autoClose: 2500})
    setTimeout(() =>{
        logout();
         navigate("/")

    }, 1000 )}

    return token ? (  
        <>
       <h1> Velkommen til Admin-siden</h1>
       <button onClick={handlelogout}>Log ud</button>
       
<Router >

<Adminhome path="/"/>
<Adminanimals path="animals" />
<Admineditanimal path="animals/edit/:id"/>
<Admincreatenewanimal path="animals/creatnewanimal" />


</Router>

<Link to="animals">Redigér et dyr</Link> 
</> 

    ) :
    
   ( <Form />);
}
 
export default Admin;