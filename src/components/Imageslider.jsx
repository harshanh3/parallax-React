import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/cyber1.jpg';
import img2 from '../assets/cyber2.jpeg';
import img3 from '../assets/cyber3.jpg';
import img4 from '../assets/girl.jpg';
import img5 from '../assets/cyberp.jpeg';
import img6 from '../assets/cyber.jpg';
import img7 from '../assets/cyb.webp';
import img8 from '../assets/cyb1.jpeg';

const ImageSlider = () => {
  const settings = {
    dots: true,                // Show navigation dots
    infinite: true,            // Loop through images
    speed: 500,                // Transition speed
    slidesToShow: 3,           // Show three images at once
    slidesToScroll: 1,         // Scroll one image at a time
  };

  return (
    <div style={{ position: "relative", zIndex: 400, padding: "0 20px" }}>
      <Slider className="me-5 ms-5 " {...settings}>
        <div>
          <img src={img1} alt="Slide 1" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
        <div>
          <img src={img2} alt="Slide 2" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
        <div>
          <img src={img3} alt="Slide 3" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
        <div>
          <img src={img4} alt="Slide 4" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
        <div>
          <img src={img5} alt="Slide 5" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
        <div>
          <img src={img6} alt="Slide 6" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
        <div>
          <img src={img7} alt="Slide 7" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
        <div>
          <img src={img8} alt="Slide 8" style={{ width: "100%", padding: "10px", height: "300px" }} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;