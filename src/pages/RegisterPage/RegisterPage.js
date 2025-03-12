import { useState } from "react";
import COLOR from "../../config/color";
import { getAuth } from "firebase/auth";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./styles.css";
import ASSETS from "../../assets";
import CustomButton from "../../components/CustomButton/CustomButton";
import { FaRegUserCircle, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const[username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const[buttonText,setButtonText]=useState("Register");
  const navigate=useNavigate();

  const handleRegister=async()=>{
    try{
      if(username==""||email==""||password==""||confirmPassword=="") {
        alert("Please fill the fields");
    } else if(password!=confirmPassword){
      alert("Password is not matching");
    }else{
      setButtonText("Register");
      if(Response.user.uid){
        navigate("/login");
      }else{
        alert("Failed to register");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    };
    }catch (err) {
      alert(err)
    }
  }

  return (
    <div
      className="RegisterPageBaseContainer"
      style={{
        backgroundImage: `url(${ASSETS.RegisterPageImage})`,
      }}
    >
      <div className="RegisterPageContentBaseContainer">
        <div className="RegisterPageBaseContentContainer">
          <div className="RegisterPageContentTableContainer">
            <table cellSpacing={10}>
              <tr>
                <td>
                  <div className="RegisterPageInputContainer">UserName:</div>
                </td>
                <td>
                  <CustomInput placeholder={"Name"} Icon={FaRegUserCircle} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="RegisterPageInputContainer">Email:</div>
                </td>
                <td>
                  <CustomInput
                    placeholder={"Email Address"}
                    value={email} onChangeText={(e)=>setEmail(e.target.value)}
                    Icon={MdEmail}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="RegisterPageInputContainer">Password:</div>
                </td>
                <td>
                  <CustomInput placeholder={"Password"} value={password} onchange={(e)=>setPassword(e.target.value)}Icon={FaKey} isSecureEntry={true} 
                   />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="RegisterPageInputContainer">
                    Confirm Password:
                  </div>
                </td>
                <td>
                  <CustomInput
                    placeholder={"Confirm Password"}
                    isSecureEntry={true}
                    Icon={FaKey}
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="customButtonBaseContainer">
            <CustomButton
              backgroundColor={COLOR.borderColor}
              color={COLOR.blackColor}
              title={"Register here"}
              onClick={handleRegister}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
  }
export default RegisterPage;
