import React from "react";
import { useParallax } from "react-scroll-parallax";
import "./Parallax.css";
import { Link } from "react-scroll";
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
    speed: -50,

    scale: [1, 3, "easeInQuad"],
  });
  const parallax = useParallax({
    // rotate: [0, 360],
    // rotate: [0, 360],
    scale: [1, 0.5, "easeInQuad"],
  });
  const parallax1 = useParallax({
    // rotate: [0, 360],
    // speed: -10,
    // rotate: [0, 360],
    scale: [1, 0.5, "easeInQuad"],
  });
  const cat = useParallax({
    speed: -10,

    // scale: [0.5, 2, "easeInQuad"],
  });
  const dog = useParallax({
    speed: -20,

    // scaleX: [2, 0, "easeInQuad"],
  });
  const rabbit = useParallax({
    speed: -30,
    // scale: [1.5, 3, "easeInQuad"],
  });
  const back = useParallax({
    speed: -60,
  });
  const back1 = useParallax({
    speed: -800,
  });

  const back3 = useParallax({
    speed: -40,
  });
  const back4 = useParallax({
    speed: -30,
  });
  const rocket = useParallax({
    speed: -30,
  });
  return (
    <>
      <div className="container-body">
        <Link
          // activeClass="active"
          to="image-flex-link"
          spy={true}
          smooth={true}
          offset={1350}
          duration={5000}
          className="link"
        >
          Click Here
          <h3 className="h3">></h3>
          <h3 className="h4">></h3>
          <h3 className="h5">></h3>
        </Link>{" "}
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
        <div ref={parallax1.ref} className="image"></div>.
      </div>
      <div className="images-flex" id="image-flex-link">
        <div className="back" ref={back.ref}>
          <img src="./img-back.png" className="back0" />
        </div>
        <div className="back" ref={back4.ref}>
          <img src="./img-back4.png" className="back4" />
        </div>
        <div className="back" ref={back3.ref}>
          <img src="./img-back3.png" className="back3" />
        </div>
        <div className="back" ref={back1.ref}>
          <img src="./img-back1.png" className="back1" />
        </div>
      </div>
      <div className="images-flex1">
        <img src="./rocket.png" className="rocket" ref={rocket.ref} />
      </div>
    </>
  );
}
