import SimpleImageSlider from "react-simple-image-slider";
import { dataContext } from "../Contexts/DataContext";

const Slider = () => {

    const images = [
        { url: "http://localhost:4000/file-bucket/1589743596506amina.jpg" },
        { url: "http://localhost:4000/file-bucket/1589743602933carla.jpg" },
        { url: "http://localhost:4000/file-bucket/1589743606893flotfyr.jpeg" },
        { url: "http://localhost:4000/file-bucket/1589743612191frida.jpeg" },
        { url: "http://localhost:4000/file-bucket/1589743618350pava.jpeg" },
        { url: "http://localhost:4000/file-bucket/1589743622345pia.jpg" },
        { url: "http://localhost:4000/file-bucket/1589743626930polly.jfif" },
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