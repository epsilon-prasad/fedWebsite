import "./index.css";
import React,{useEffect} from "react";
import { Swirl } from "ambient-cbg";
import Particles from "react-particles-js";
import logo from "../../../assets/homePagelogo.png";
import arrow from "../../../assets/arrow.ico";

const Background = props => {
 const handleClick = () => {
    document.getElementById('menu-trigger').click();
  }
 
      useEffect(() => {       
        document.body.classList.add("home");
        // returned function will be called on component unmount 
        return () => {         
          document.body.classList.remove("home");
        }
      }, [])
  return (
    <div>
      <Particles
        params={{
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 700
            }
          },
          line_linked: {
            enable: true,
            distance: 180,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          shape: {
            type: "triangle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 7
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          retina_detect: true
        }}
      />
      <div className="logoLayout">
        <img src={logo} alt="" className="logo" onClick={handleClick}/>
      </div>
      {/* <div className="bounce">
        <img src={arrow} alt="" className="arrow" onClick={props.handleClick} />
      </div> */}
      <div className="bounce" onClick={handleClick}>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
};

export default Background;
