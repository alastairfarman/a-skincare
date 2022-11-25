import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
const _ = require("lodash");

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  //scroll option commented out - buggy//

  // const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);
  // useEffect(() => {
  //   window.addEventListener("scroll", transition);
  // });

  // function transition(e) {
  //   //this seems like the break point. wont remove event listener for scroll - or is it adding after//
  //   window.removeEventListener("scroll", transition);

  //   // set the current scroll position //
  //   setCurrentScrollY(window.scrollY);

  //   console.log("current:", currentScrollY);
  //   console.log("new:", window.scrollY);

  //   // compare current to next scroll frame //
  //   if (window.scrollY > currentScrollY) {
  //     if (currentPage !== 4) {
  //       transitionFwd();
  //     }
  //   } else {
  //     if (currentPage !== 1) {
  //       transitionBk();
  //     }
  //   }
  // }

  useEffect(stillImage);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  function stillImage() {
    console.log("set BG image");
    const bgImage = document.getElementById("img");
    bgImage.style.backgroundImage = `url(../A-i-0${currentPage}.png)`;
  }

  function nextClick() {
    const nav = document.getElementById("product-nav");
    nav.style.opacity = 0;
    nav.classList.add("hide");
    transitionFwd();
  }
  function transitionFwd() {
    console.log("transitionFwd ran");
    const bgImage = document.getElementById("img");
    const videoWrapper = document.getElementById("video-wrapper");
    const video = videoWrapper.firstChild;

    bgImage.style.opacity = "0";

    video.src = `A-m-0${currentPage}.mp4`;

    video.addEventListener("ended", resetListenerF);
    video.play();

    function resetListenerF() {
      const nav = document.getElementById("product-nav");
      console.log("reset FWD ran");
      bgImage.style.opacity = "100";
      setCurrentPage(currentPage + 1);
      video.removeEventListener("ended", resetListenerF);
      nav.style.opacity = 100;
      nav.classList.remove("hide");
    }
  }

  function prevClick() {
    const nav = document.getElementById("product-nav");
    nav.style.opacity = 0;
    nav.classList.add("hide");
    transitionBk();
  }
  function transitionBk() {
    console.log("transitionBK ran");

    const bgImage = document.getElementById("img");
    const videoWrapper = document.getElementById("video-wrapper");
    const video = videoWrapper.firstChild;

    bgImage.style.opacity = "0";

    video.src = `A-mr-0${currentPage - 1}.mp4`;
    video.play();

    video.addEventListener("ended", resetListenerB);

    function resetListenerB() {
      const nav = document.getElementById("product-nav");
      console.log("reset BK ran");
      bgImage.style.opacity = "100";
      setCurrentPage(currentPage - 1);
      video.removeEventListener("ended", resetListenerB);
      nav.style.opacity = 100;
      nav.classList.remove("hide");
    }
  }

  return (
    <>
      <div id="img"></div>
      <Video currentPage={currentPage} />
      <div className="overlay"></div>
      <div className="logo">
        <img src="A-LOGO.png" alt=""></img>
        <div id="product-nav">
          <div onClick={prevClick}>&lt;</div>
          <div onClick={nextClick}>&gt;</div>
        </div>
      </div>
    </>
  );
}

export default App;
