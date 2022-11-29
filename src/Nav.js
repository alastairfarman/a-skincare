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

  function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu.classList.contains("collapsed")) {
      menu.classList.remove("collapsed");
    } else {
      menu.classList.add("collapsed");
    }
  }

  return (
    <>
      <div className="logo">
        <img
          src="A-LOGO.png"
          onMouseOver={toggleMenu}
          onMouseOut={toggleMenu}
          alt=""
        ></img>
        <div id="product-nav">
          <div className="nav-button greyed-out" onClick={prevClick}>
            &lt;
          </div>
          <div className="nav-button" onClick={nextClick}>
            &gt;
          </div>
        </div>
        <div id="page-display">
          <div className="page-name">Dark</div>
          <div className="page-name">Light</div>
          <div className="page-name">Aloe</div>
          <div className="page-name">Ingredients</div>
        </div>
      </div>
      <Dropdown />
    </>
  );
}
