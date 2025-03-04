import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/color";
import "./styles.css";
import{FaUserAlt} from"react-icons/fa";
import{FaKey} from "react-icons/fa";                                                                                                            

function LoginPage() {
  const[email,setEmail]=useState("@gmail.com");
  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">