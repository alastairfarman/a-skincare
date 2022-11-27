import Dropdown from "./Dropdown";

export default function Nav(props) {
  function nextClick() {
    const nav = document.getElementById("product-nav");

    if (props.currentPage == 4) {
    } else {
      nav.style.opacity = 0;
      nav.classList.add("hide");
      props.transitionFwd();
    }
    if (props.currentPage == 3) {
      nav.lastChild.classList.add("greyed-out");
    }
    if (props.currentPage == 1) {
      nav.firstChild.classList.remove("greyed-out");
    }
  }
  function prevClick() {
    const nav = document.getElementById("product-nav");

    if (props.currentPage == 1) {
    } else {
      nav.style.opacity = 0;
      nav.classList.add("hide");
      props.transitionBk();
    }
    if (props.currentPage == 2) {
      nav.firstChild.classList.add("greyed-out");
    }
    if (props.currentPage == 4) {
      nav.lastChild.classList.remove("greyed-out");
    }
  }

  return (
    <>
      <div className="logo">
        <img src="A-LOGO.png" alt=""></img>
        <div id="product-nav">
          <div className="nav-button greyed-out" onClick={prevClick}>
            &lt;
          </div>
          <div className="nav-button" onClick={nextClick}>
            &gt;
          </div>
        </div>
      </div>
      <Dropdown/>

    </>
  );
}
