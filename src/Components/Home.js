/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import Omos from "../Components/Omos";
import Frivillig from "../Components/Frivillig";
import Dyrinod from "../Components/Dyrinod";
import Adopter from "../Components/Adopter";

const Home = () => {
    return ( 
<>
        <h1>hep hep</h1>
        <Omos />
        <Frivillig />
        <Dyrinod />
        <Adopter  />
        </>
     );
}
 
export default Home;