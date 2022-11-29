import React from "react";
import { useState, useEffect } from "react";
import Video from "./Video";
import Nav from "./Nav";
import Content from "./Content";
import _ from "lodash";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  //scroll version commented out - buggy. will attempt continuous scroll version when finished//

  // const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);
  // useEffect(() => {
  //   window.addEventListener("scroll", transition);
  // });

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

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

  /* Navigation */

  useEffect(stillImage);

  function stillImage() {
    console.log("set BG image");
    const bgImage = document.getElementById("img");
    bgImage.style.backgroundImage = `url(./A-i-0${currentPage}.png)`;
  }

  function transitionFwd() {
    console.log("transitionFwd ran");
    const bgImage = document.getElementById("img");
    const videoWrapper = document.getElementById("video-wrapper");
    const video = videoWrapper.firstChild;

    video.src = `A-m-0${currentPage}.mp4`;

    
    video.addEventListener("ended", resetListenerF);
    video.play();
    bgImage.style.opacity = "0";

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

  function transitionBk() {
    console.log("transitionBK ran");

    const bgImage = document.getElementById("img");
    const videoWrapper = document.getElementById("video-wrapper");
    const video = videoWrapper.firstChild;

    video.src = `./A-mr-0${currentPage - 1}.mp4`;
    video.play();

    bgImage.style.opacity = "0";

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
      <Content currentPage={currentPage} />
      <Nav
        transitionFwd={transitionFwd}
        transitionBk={transitionBk}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
