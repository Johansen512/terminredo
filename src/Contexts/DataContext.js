import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
//import Testicon from "../Components/Testicon";
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
    //const [userlog, setUserlog]=useState(null);

    
    const [token, setToken]=useState(sessionStorage.getItem("token"));

const myToastId = "myToastId";

const notify = () => {
  if (toast.isActive(myToastId)) {
    toast.update (myToastId, {
      render: "Logger ind ...",
      type: toast.TYPE.INFO,
     

    });
  } else {
    

    toast.info("Logger lige ind", {
      toastId: "myToastId",
      autoClose: false,
      
      
     
    });
   // toast(<Testicon />)

  }
  
};
    //const obj = JSON.parse(json);

    //JSON.parse(window.localStorage.getItem('user'));
//check localstorage for Login



const login = (username, password) =>{


  /*if(username && password) {*/
    console.log (username, password)
    notify ();
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${username}&password=${password}`,
    })
    .then((response) => response.json())
    .then ((result) => {
      toast.dismiss();
      sessionStorage.setItem("token", result.token)
      setToken(result.token)})
    
    .catch((err) => {
      console.error(err);
      toast.update(myToastId, {
        render: "Wrong credentials ... try again",
        type: toast.TYPE.ERROR,

      });
    
    
    
    });

  //}
 // let storedloggedUser = JSON.parse(window.localStorage.getItem('Logged'));
//setUserlog(storedloggedUser);
  

//console.log ("from local (login):", userlog );

};



//Login slut

//Logud begynder

const logout = () => {
  setToken(null)
sessionStorage.removeItem ("token")



}

//Nyhedsbrevs login ting
    const [logindata, setLogindata]=useState (null);
    const [checkedperson,setCheckedperson]=useState(null);
    const [byemessage, setByemessage]=useState(null);
    



     //check localstorage

     useEffect(()=>{

        let storedUser = localStorage.getItem('User');
        
        
        setCheckedperson(storedUser);
        
       
        

    // console.log ("from local:", checkedperson );


        
    
      }, [logindata, setLogindata, checkedperson, setCheckedperson, byemessage, setByemessage]);

//Nyhedsbrevs login ting slut














    useEffect (() => {
          
        
        fetch("http://localhost:4000/api/v1/adoptsections", {


      })
      .then (response => response.json())
      .then (result => setData(result)) 
      
          }, []);
              
          
          
          data && console.log(data)

          //console.log ("badylf")

//Hero Fetch
          useEffect (() => {
          
        
            fetch("http://localhost:4000/api/v1/adoptsections/1", {
    
    
          })
          .then (response => response.json())
          .then (result => setHerodata(result)) 
          
              }, []);
                  
              
              
              herodata && console.log(herodata)
    
             // console.log ("badylf")

              //Hero Fetch slut

              //Alle Omos Fetch

              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/abouts", {
        
        
              })
              .then (response => response.json())
              .then (result => setOmosdata(result)) 
              
                  }, []);
                      
                  
                  
                 omosdata && console.log(omosdata)
        
                 // console.log ("badylf")


              //Alle Omos slut


              //Alle Frivillig Fetch 


              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/volunteers", {
        
        
              })
              .then (response => response.json())
              .then (result => setFrivilligdata(result)) 
              
                  }, []);
                      
                  
                  
                  frivilligdata && console.log(frivilligdata)
        
                  //console.log ("hrrmfff")

              //Alle Frivillig slut

              //Dyr i nød Fetch 


              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/adoptsections/2", {
        
        
              })
              .then (response => response.json())
              .then (result => setDyrinoddata(result)) 
              
                  }, []);
                      
                  
                  
             dyrinoddata && console.log(dyrinoddata)
        
                  //console.log ("piiv piiv")

              //Dyr i nød slut

              //Adopt fetch 


              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/animals", {
        
        
              })
              .then (response => response.json())
              .then (result => setAdoptdata(result)) 
              
                  }, []);
                      
                  
                  
                  adoptdata && console.log(adoptdata)
        
                  //console.log ("en huuuund")

              //Adopt slut

       


              //All Assets fetch

              useEffect (() => {
          
        
                fetch("http://localhost:4000/api/v1/assets", {
        
        
              })
              .then (response => response.json())
              .then (result => setAssetdata(result)) 
              
                  }, []);
                      
                  
                  
                  assetdata && console.log(assetdata)
        
                  //console.log ("en ass ... see what I did?")







              //All Assets fetch slut

    return ( 

<dataContext.Provider value={{ data, setData, login, token, logout, checkedperson, setCheckedperson, herodata, setHerodata, omosdata, setOmosdata, frivilligdata, setFrivilligdata, dyrinoddata, setDyrinoddata, adoptdata, setAdoptdata, assetdata, setAssetdata}}>

{props.children}
</dataContext.Provider>


     );
}
 
export default DataContextProvider;