export default function Dropdown(props) {
  function maintainMenu() {
    const menu = document.getElementById("menu");

    menu.classList.remove("collapsed");
  }

  function collapseMenu() {
    const menu = document.getElementById("menu");

    menu.classList.add("collapsed");
  }
  return (
    <>
      <div
        id="menu"
        className="dropdown collapsed"
        onMouseOver={maintainMenu}
        onMouseOut={collapseMenu}
      >
        <ul>
          <li>Our Story</li>
          <li>Products</li>
          <li>Get in Touch</li>
          <li>Another List Item</li>
        </ul>
      </div>
    </>
  );
}
