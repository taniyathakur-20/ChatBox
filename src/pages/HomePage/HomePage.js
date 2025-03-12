import COLOR from "../../config/color";
import "./styles.css";
import { FaRocketchat } from "react-icons/fa6";
import ASSETS from "../../assets";

function HomePage() {
  return (
    <div className="homePageBaseContainer">
      <div className="homePageNavbarBaseContainer">
        <div className="homePageLogoContainer">
          <h1 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {" "}
            <FaRocketchat className="icon" /> ChatVibe
          </h1>
          <div className="homePagePagesContainer">
            <div className="homePageListContainer">
            <span>Users</span>
            <span>Member</span>
            <span>Query</span>
            <span>Admin</span>
            <span>help</span>
            </div>
          </div>
        </div>
        <div className="homePageProfileContainer">
          <img src={ASSETS.homePageImage} />
        </div>
      </div>
      <div className="homePageContentContainer">
        <div className="homePageSidebarContentContainer"></div>
        <div className="homePageChatContentContainer"></div>
      </div>
    </div>
  );
}

export default HomePage;
