/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
const Slider = () => {

  
    
  
const sliderstyle=css`
width:55%;
margin: 0.5rem 20%;



`;







   

    return ( 
        
        <div css={sliderstyle}>
   <AwesomeSlider animation="fallAnimation">
   <div data-src="/amina.jpg" />
    <div data-src="/carla.jpg" />
    <div data-src="/flotfyr.jpg" />
    <div data-src="/pia.jpg" />
    <div data-src="/pava.jpg" />
    <div data-src="/frida.jpg" />
        </AwesomeSlider>
      </div>

    );
}
 
export default Slider ;