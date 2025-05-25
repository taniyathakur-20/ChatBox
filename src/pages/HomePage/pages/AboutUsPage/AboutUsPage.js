import React from "react";
import "./AboutUs.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { ColorRing } from "react-loader-spinner";
import { SiImessage } from "react-icons/si";
function AboutPage(){
  return(
  <div className="BaseContainer">
<div className="SecondContainerrrr">
  <IoIosPhonePortrait  size={45} color={ColorRing.white}/>
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
    <img src={require("../../../../assets/images/secure.jpg")}/>
    <p>Security is a fundamental requirement for any digital platform, especially in chatting apps where personal information and conversations are exchanged. A secure chatting app protects user data through encryption so that unauthorized parties cannot read the messages. End-to-end encryption ensures that the message is only readable by the sender and the receiver. </p>
  </div>
  <div className="thirdgrid">
    <h1>Media Sharing</h1>
    <img src={require("../../../../assets/images/media sharing.jpg")}/>
    <p>Media sharing is one of the most useful features in modern chatting apps, allowing users to exchange more than just text. With this feature, people can easily share photos, videos, voice notes, documents, and even location in real time. It adds depth and clarity to conversations, making communication more expressive and engaging. </p>
  </div>

  <div className="contact">
  <h2>Contact Us</h2>
  <p>Email:contact@chat.com</p>
  <p>Phone:9855588771</p>
  <p>Address:Green Park,City Gurdaspur</p>
</div>
  </div>
 
  </div>

  )
}
export default AboutPage;