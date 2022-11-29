import React, { useEffect } from "react";

export default function Ingredients() {
  useEffect(() => {
    document.addEventListener("mousemove", setMousePosition, false);

    function setMousePosition(e) {
      let mouseX = 0;
      let mouseY = 0;

      mouseX = e.clientX;
      mouseY = e.clientY;

      const followCursor = document.getElementById("followCursor");

      followCursor.style.transform = `translate(${mouseX + 20}px, ${
        mouseY - 60
      }px)`;
    }

    return () => {
      document.removeEventListener("mousemove", setMousePosition, false);
    };
  }, []);

  function showDetail(e) {
    const followCursor = document.getElementById("followCursor");
    followCursor.style.display = "block";
    followCursor.textContent = e.target.dataset.ingredient;
  }

  function removeDetail() {
    const followCursor = document.getElementById("followCursor");
    followCursor.style.display = "none";
  }

  return (
    <>
      <div id="areaPlant">
        <svg
          viewBox="81.9 88.15 285.11 225.2"
          onMouseOver={(e) => showDetail(e)}
          onMouseOut={removeDetail}
        >
          <path
            data-ingredient="Orange Blossom"
            d="M 224.454 88.646 L 366.507 312.846 L 82.401 312.846 L 224.454 88.646 Z"
            style={{ stroke: "rgb(0, 0, 0)", fill: "none", strokeOpacity: 0 }}
          />
        </svg>
      </div>
      <div id="followCursor"></div>
      <div id="sidebar"></div>
    </>
  );
}
