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
        <div className="imaggeContainer">
          <img src={require("../../../../assets/images/imagecom.png")} alt="Hero" />
        </div>
        
      </section>
      <section className="landingBaseHeroTitleContainer">
        <div className="contentContainer">
        <p>A chatting app offers numerous benefits that make communication easier, faster, and more convenient. It allows users to connect in real time, no matter where they are in the world. These apps support not just text messaging, but also voice notes, video calls, file sharing, and multimedia messages. For businesses, chatting apps provide an efficient way to handle customer service and team collaboration. With features like end-to-end encryption and message history, users can enjoy both security and easy access to past conversations. Additionally, since most chatting apps are available on smartphones, tablets, and computers, staying connected on the go has never been simpler.</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;