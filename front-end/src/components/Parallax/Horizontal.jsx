import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";

const Horizontal = () => {
  const target = useRef(null);
  const mid = useParallax({
    speed: 50,
    targetElement: target.current,
  });

  const midExtend = 50 * 5 * -1;
  const closeExtend = 100 * 5 * -1;

  return (
    <div>
      <div ref={target}>
        <div
          style={{
            backgroundImage: `url(./public/rednight.jpg)`,
            left: 0,
            right: 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Horizontal;
