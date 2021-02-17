import React, { createContext, useState, useEffect } from "react";
export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [herodata, setHerodata]=useState (null);
    const [omosdata, setOmosdata]=useState (null);

    useEffect (() => {
          
        
        fetch("http://localhost:4000/api/v1/adoptsections/1", {


      })
      .then (response => response.json())
      .then (result => setData(result)) 
      
          }, []);
              
          
          
          data && console.log(data)

          console.log ("badylf")

//Hero Fetch
          useEffect (() => {
          
        
            fetch("http://localhost:4000/api/v1/adoptsections/1", {
    
    
          })
          .then (response => response.json())
          .then (result => setHerodata(result)) 
          
              }, []);
                  
              
              
              herodata && console.log(herodata)
    
              console.log ("badylf")

              //Hero Fetch slut

              //Alle Omos Fetch

              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/abouts", {
        
        
              })
              .then (response => response.json())
              .then (result => setOmosdata(result)) 
              
                  }, []);
                      
                  
                  
                 omosdata && console.log(omosdata)
        
                  console.log ("badylf")


              //Alle Omos slut

    return ( 

<dataContext.Provider value={{ data, setData, herodata, setHerodata, omosdata, setOmosdata}}>

{props.children}
</dataContext.Provider>


     );
}
 
export default DataContextProvider;