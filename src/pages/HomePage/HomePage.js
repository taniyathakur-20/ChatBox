import { Outlet } from "react-router-dom";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import COLOR from "../../config/color";
import "./styles.css";

function HomePage() {
  return (
    <div className="homePageBaseContainer">
      <div className="homePageNavbarBaseContainer">
        <CustomNavbar />
      </div>
      <div className="homePageContentBaseContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
