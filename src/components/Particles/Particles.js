import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";

export default () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 1200
          }
        },
        color: {
          value: "#19b1c5"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 1,
            color: "#367b84"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 1000,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: true,
            speed: 4.795204795204795,
            size_min: 0,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: "#19b1c5",
          opacity: 0.4,
          width: 0
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 0,
            rotateY: 0
          }
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
            enable: false,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5347021708908134
            }
          },
          bubble: {
            distance: 400,
            size: 0,
            duration: 0.5,
            opacity: 0.43852169464272633,
            speed: 3
          },
          repulse: {
            distance: 430.4009225197129,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    }}
  />
);
