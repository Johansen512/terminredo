/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useContext, useEffect} from "react";
import { dataContext } from "../Contexts/DataContext";
import {navigate } from "@reach/router";
import { toast } from "react-toastify";
import Mytoast from "./Mytoast";


const Admin = () => {

    const {token, logout} = useContext(dataContext);

    useEffect(() => {
        if (!token) { navigate ("/Loginpage")}


    }, [token]);

    const handlelogout = () => {
    toast.dark(Mytoast, {autoClose: 2500})
    setTimeout(() =>{
        logout();
         navigate("/")

    }, 1000 )}

    return (  
        <>
       <h1> Velkommen til Admin-siden</h1>
       <button onClick={handlelogout}>Log ud</button>
       </>
    );
}
 
export default Admin;