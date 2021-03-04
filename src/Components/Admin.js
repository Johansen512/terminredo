/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useContext, useEffect} from "react";
import { dataContext } from "../Contexts/DataContext";
import {navigate } from "@reach/router";


const Admin = () => {

    const {token, logout} = useContext(dataContext);

    useEffect(() => {
        if (!token) { navigate ("/Loginpage")}


    }, [token]);

    const handlelogout = () => {
    
    setTimeout(() =>{
        logout();
         navigate("/")

    }, 500 )}

    return (  
        <>
       <h1> Velkommen til Admin-siden</h1>
       <button onClick={handlelogout}>Log ud</button>
       </>
    );
}
 
export default Admin;