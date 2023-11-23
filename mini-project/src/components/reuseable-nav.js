import "src/App.css";
import figmaIcon from "src/figma.png";

function ReuseableNav() {
  return (
    <nav className="nav">
      <img className="nav-icon" src={figmaIcon} alt="figma-icon" />
      <h1 className="nav-title">kolektiva</h1>
    </nav>
  );
}

export default ReuseableNav;
