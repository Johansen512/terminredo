import React, { createContext, useState, useEffect } from "react";
export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);


    useEffect (() => {
          
        
        fetch("http://localhost:4000/api/v1/adoptsections", {


      })
      .then (response => response.json())
      .then (result => setData(result)) 
      
          }, []);
              
          
          
          data && console.log(data)

          console.log ("badylf")

    return ( 

<dataContext.Provider value={{ data, setData }}>

{props.children}
</dataContext.Provider>


     );
}
 
export default DataContextProvider;