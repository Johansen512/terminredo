import React, { createContext, useState, useEffect } from "react";
export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [herodata, setHerodata]=useState (null);
    const [omosdata, setOmosdata]=useState (null);
    const [frivilligdata, setFrivilligdata]=useState(null);
    const [dyrinoddata, setDyrinoddata]=useState(null);
    const [adoptdata, setAdoptdata] = useState (null);
    const [assetdata, setAssetdata]=useState(null);


    //Login
    const [userlog, setUserlog]=useState(null);

//check localstorage for Login

useEffect(()=>{

  let storedloggedUser = localStorage.getItem('User');
  
  
  setUserlog(storedloggedUser);
  
 
  

console.log ("from local (login):", userlog );


  

}, [userlog, setUserlog]);



    //Login slut

//Nyhedsbrevs login ting
    const [logindata, setLogindata]=useState (null);
    const [checkedperson,setCheckedperson]=useState(null);
    const [byemessage, setByemessage]=useState(null);
    



     //check localstorage

     useEffect(()=>{

        let storedUser = localStorage.getItem('User');
        
        
        setCheckedperson(storedUser);
        
       
        

     console.log ("from local:", checkedperson );


        
    
      }, [logindata, setLogindata, checkedperson, setCheckedperson, byemessage, setByemessage]);

//Nyhedsbrevs login ting slut














    useEffect (() => {
          
        
        fetch("http://localhost:4000/api/v1/adoptsections", {


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


              //Alle Frivillig Fetch 


              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/volunteers", {
        
        
              })
              .then (response => response.json())
              .then (result => setFrivilligdata(result)) 
              
                  }, []);
                      
                  
                  
                  frivilligdata && console.log(frivilligdata)
        
                  console.log ("hrrmfff")

              //Alle Frivillig slut

              //Dyr i nød Fetch 


              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/adoptsections/2", {
        
        
              })
              .then (response => response.json())
              .then (result => setDyrinoddata(result)) 
              
                  }, []);
                      
                  
                  
             dyrinoddata && console.log(dyrinoddata)
        
                  console.log ("piiv piiv")

              //Dyr i nød slut

              //Adopt fetch 


              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/animals", {
        
        
              })
              .then (response => response.json())
              .then (result => setAdoptdata(result)) 
              
                  }, []);
                      
                  
                  
                  adoptdata && console.log(adoptdata)
        
                  console.log ("en huuuund")

              //Adopt slut

       


              //All Assets fetch

              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/assets", {
        
        
              })
              .then (response => response.json())
              .then (result => setAssetdata(result)) 
              
                  }, []);
                      
                  
                  
                  assetdata && console.log(assetdata)
        
                  console.log ("en ass ... see what I did?")







              //All Assets fetch slut

    return ( 

<dataContext.Provider value={{ data, setData, checkedperson, setCheckedperson, userlog, setUserlog, herodata, setHerodata, omosdata, setOmosdata, frivilligdata, setFrivilligdata, dyrinoddata, setDyrinoddata, adoptdata, setAdoptdata, assetdata, setAssetdata}}>

{props.children}
</dataContext.Provider>


     );
}
 
export default DataContextProvider;