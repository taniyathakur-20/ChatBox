import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import assets from "../../../../assets";
import { database } from "../../../../firebase"; // Update path as needed
import { ref, set } from "firebase/database";

function LandingPage() {
  const navigate = useNavigate();

  const handleChatNowClick = () => {
    // Example: Create a branch with a unique ID and sample data
    const uid = localStorage.getItem("uid") || `user_${Date.now()}`;
    const userRef = ref(database, `users/${uid}`);
    set(userRef, {
      username: "NewUser",
      timestamp: Date.now(),
    })
      .then(() => {
        console.log("Branch created successfully in Firebase!");
        navigate("/chat"); // Redirect to chat page
      })
      .catch((error) => {
        console.error("Error creating branch:", error);
      });
  };

  return (
    <div className="landingPageBaseContainer">
      <section
        className="landingBaseHeroSectionContainer"
        style={{
          backgroundImage: `url(${assets.homePageImage})`,
        }}
      >
        <div className="landingPageHeroContentContainer">
          <h1>Message Privately</h1>
          <p>
            Simple, reliable, private messaging for free*, available all over
            the world.
          </p>
          <CustomButton
            title={"Chat Now"}
            backgroundColor={"#00FF00"}
            onClick={handleChatNowClick}
          />
        </div>
      </section>
      <section className="landingBaseHeroSectionContainer">
        <div>
          <img src={require("../../../../assets/images/imagecom.png")} alt="Hero" />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;