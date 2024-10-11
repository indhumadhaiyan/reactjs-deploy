import React, { useEffect } from "react";
import anime from "animejs";

const AnimeDemo = () => {
  useEffect(() => {
    anime({
      targets: ".line-drawing-demo .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="line-drawing-demo">
      <svg className="lines" width="300" height="150" viewBox="0 0 300 150">
        <path
          d="M10 120 L40 30 L70 120"
          stroke="white"
          fill="transparent"
          strokeWidth="4"
        />{" "}
        {/* A */}
        <path
          d="M80 120 L80 30 L110 30 L110 120"
          stroke="white"
          fill="transparent"
          strokeWidth="4"
        />{" "}
        {/* L */}
        <path
          d="M120 120 L120 30 Q135 10, 150 30 L150 120"
          stroke="white"
          fill="transparent"
          strokeWidth="4"
        />{" "}
        {/* A */}
        <path
          d="M160 120 L160 30 L190 120"
          stroke="white"
          fill="transparent"
          strokeWidth="4"
        />{" "}
        {/* N */}
      </svg>
      <svg
        width="136"
        height="31"
        viewBox="0 0 136 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lines"
      >
        <path
          d="M0.515625 0.101562H4.87109V24.3203H17.918V26H0.515625V0.101562Z"
          fill="transparent"
          stroke="white"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default AnimeDemo;
