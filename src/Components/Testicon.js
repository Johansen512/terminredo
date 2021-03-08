
/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { toast, ToastContainer } from "react-toastify";

const Testicon = ({ closeToast, toastProps }) => {

   const iconStyle=css`
    
    width:80px;
    height:60px;
    
    `;


    return ( 
<div>
<img css={iconStyle} src="testicon.gif" alt="spin" />

<ToastContainer />
</div>


     );
}
 
export default Testicon;