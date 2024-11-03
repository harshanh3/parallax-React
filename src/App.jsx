import React from "react";
import Plx from 'react-plx';
import bgImg  from './assets/background.jpg';
import bgImg1 from './assets/bg.png'
import bgImg2 from './assets/text-img.webp'
import ImageSlider from './components/Imageslider';

function App() {
  

  return (
    <div>
    <Plx 
      parallaxData={[{
        start: 0,
        end: 700,
        easing: "easeIn",
        properties: [{
          startValue: 1,
          endValue: 1.6,
          property: "translateY"
        }]
      }]} 
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height:"100vh",
        zIndex: 100,
        overflow: "hidden"

      }}
    >
      <img style={{ width: "100%", height:"100%" }} src={bgImg} alt="" />
    </Plx>
      <Plx 
      parallaxData={[{
        start: 0,
        end: 800,
        properties: [{
          startValue: 1,
          endValue: 1.18,
          property: "scale"
        }]
      }]} 
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 200 // Higher zIndex for overlapping middle layer
      }}
    >
      <img style={{ width: "100%" }} src={bgImg1} alt="" />
    </Plx>
      <Plx 
      parallaxData={[{
        start: 0,
        end: 400,
        properties: [{
          startValue: 1,
          endValue: 0,
          property: "opacity"
        }]
      }]} 
      style={{
        position: "fixed",
        left: "300px",
        top: "26vw",
        width: "100%",
        zIndex: 300 // Highest zIndex for top layer
      }}
    >
      <img style={{ width: "30vw" }} src={bgImg2} alt="" />
    </Plx>
    

    <div style={{ height: "150vh" }}></div>

<div style={{ paddingTop: "20px", zIndex: 400, position: "relative" }}>
  <ImageSlider />
</div>

  </div>
  
  );
}

export default App;


