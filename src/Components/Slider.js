import SimpleImageSlider from "react-simple-image-slider";
import { dataContext } from "../Contexts/DataContext";

const Slider = () => {

    const images = [
        { url: "images/1.jpg" },
        { url: "images/2.jpg" },
        { url: "images/3.jpg" },
        { url: "images/4.jpg" },
        { url: "images/5.jpg" },
        { url: "images/6.jpg" },
        { url: "images/7.jpg" },
      ];

    return ( 
        
        <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
        />
      </div>

    );
}
 
export default Slider ;