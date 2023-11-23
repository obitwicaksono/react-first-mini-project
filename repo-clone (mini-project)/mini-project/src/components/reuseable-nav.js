import "../App.js";
import figmaIcon from "../figma.png";

function ReuseableNav() {
  return (
    <nav className="nav">
      <img className="nav-icon" src={figmaIcon} alt="figma-icon" />
      <h1 className="nav-title">folkative12345xyz</h1>
    </nav>
  );
}

export default ReuseableNav;
