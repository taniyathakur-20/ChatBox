import React from "react";
import "./AboutUs.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { ColorRing } from "react-loader-spinner";
import { SiImessage } from "react-icons/si";
function AboutPage(){
  return(
  <div className="BaseContainer">
<div className="SecondContainerrrr">
  <IoIosPhonePortrait size={45} color={ColorRing.white}/>
  <h1>ABOUT REALTIME CHATAPP</h1>
  <IoIosPhonePortrait size={45} color={ColorRing.white}/>
</div>
<div className="thirdpagecontainer">
  <div className="firstgrid">
  {/* < SiImessage size={45} color={ColorRing.white}/> */}
    <h1>Instant Messaging</h1>
    <img src={require("../../../../assets/images/instantmessaging.jpg")}/>
    <p>Instant messaging (IM) is a real-time communication method that allows users to exchange text, images, videos, and other media instantly over the internet. To build fast and efficient IM applications, developers often aim for minimal dependencies to reduce overhead and increase performance. A bare DSO (Dynamic Shared Object) approach involves using the minimal necessary shared libraries and focusing on lightweight, high-performance components.while still supporting essential features like message delivery, real-time notifications, and encryption.</p>
  </div>
  <div className="Secondgrid">
    <h1>Encryputed & Secure</h1>
  </div>
</div>
  </div>

  )
}
export default AboutPage;