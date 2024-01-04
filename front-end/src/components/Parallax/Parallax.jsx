import React from "react";
import { useParallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

import "./Parallax.css";
import Horizontal from "./Horizontal";
export default function Demo() {
  const parallax0 = useParallax({
    // rotate: [0, 360],
    // rotate: [0, 360],
    // speed: 50,

    scale: [1, 5, "easeInQuad"],
  });
  const parallax01 = useParallax({
    // rotate: [0, 360],
    // rotate: [0, 360],
    // speed: 50,

    scale: [1, 3, "easeInQuad"],
  });
  const parallax = useParallax({
    // rotate: [0, 360],
    // rotate: [0, 360],
    scale: [1, 0.5, "easeInQuad"],
  });
  const parallax1 = useParallax({
    // rotate: [0, 360],
    // rotate: [0, 360],
    scale: [1, 0.5, "easeInQuad"],
  });
  const cat = useParallax({
    speed: -10,

    // scale: [0.5, 2, "easeInQuad"],
  });
  const dog = useParallax({
    speed: 10,

    // scaleX: [2, 0, "easeInQuad"],
  });
  const rabbit = useParallax({
    speed: 30,
    // scale: [1.5, 3, "easeInQuad"],
  });
  return (
    <>
      <div className="container-body">
        <h1 ref={parallax0.ref}>PARALLAX </h1>
        <h1 ref={parallax01.ref}>NEXT GEN UI</h1>{" "}
        <div className="images-wrapper">
          <div className="cat" ref={cat.ref}>
            <img src="https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=200" />
          </div>
          <div className="dog" ref={dog.ref}>
            <img src="https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=200" />
          </div>
          <div className="rabbit" ref={rabbit.ref}>
            <img src="https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=200" />
          </div>
        </div>
        <div ref={parallax.ref} className="image"></div>
        <div ref={parallax1.ref} className="image"></div>
      </div>
    </>
  );
}
