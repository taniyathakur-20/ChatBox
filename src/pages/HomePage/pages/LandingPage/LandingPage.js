import React from "react";
import{useEffect} from "react";
import "./styles.css";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { style } from "motion/react-client";
import{useNavigate} from "react-router-dom";

import assets from "../../../../assets";


function LandingPage() {
  const navigate=useNavigate();
  //useEffect(() => {
    // const uid = localStorage.getItem("uid");
    // if (!uid) {
     //   navigate("/chat");
    //  }
   // }, []);

  return (
    <div className="mainPageBaseContainer" style={{backgroundImage:`url(${assets.homePageImage}`}}>
      
      
      <div className="mainPageContentBaseContainer">
        
        <div className="mainPageContentContainer">
        <h1>Message Privately</h1>
      </div>
      <div className="mainPageTitleContainer">
        <p>Simple, reliable, private messaging and calling for free*, available all over the world.</p>
      </div>
      <div className="mainPagebuttonContainer">
        <CustomButton  title={"Chat now"}  color={"#000"} onClick={() => navigate("/chat")}/>
        
      </div>
      </div>
      <section className="categories">
        <div className="category">
          <h3>Chat Instantly,Anytime,Anywhere</h3>
          <ul>
            <li>advanced features to keep you connected</li>
            <li>sign up now</li>
            <li>Get Started</li>
          </ul>
        </div>
    
      </section>
    </div>
  );
}
export default LandingPage;
