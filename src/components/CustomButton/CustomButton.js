import "./styles.css";
import { FaKey } from "react-icons/fa";
function CustomButton({ backgroundColor, color, title, icon,onClick }) {
  return (
    <div className="customButtonBaseContainer" style={{ backgroundColor, color }} onClick={onClick}>
      {title} {icon}
    </div>
  );
}
export default CustomButton;
