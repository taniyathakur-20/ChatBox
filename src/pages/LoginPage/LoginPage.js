import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import ASSETS from "../../assets";
import { IoMdHappy } from "react-icons/io";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentImageContainer">
          <img src={ASSETS.LoginPageImage} />
        </div>
        <div className="loginPageInputContainer">
          <h1> Create Your Account</h1>
          <h2>{`Welcome Back ${email}`} 👋</h2>
          <img src={ASSETS.homePageImage} />
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
          />
          {/* <p>{count}</p>
        <button
        onClick={()=>{
          setCount(count + 1);
}}
          >
          Increment
          </button>*/}
          <CustomButton
            backgroundColor={COLOR.baseColorDark}
            color={COLOR.blackColor}
            title={"login here"}
            onClick={() => alert("Click Done")}
          />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
