import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import ASSETS from "../../assets";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../firebase";
import { Database, ref, set } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Login");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (email == "" || password == "") alert("Please fil out the fields");
      else {
        setButtonText("Please Wait..");
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setButtonText("login");
        if (response.user.uid) {
          localStorage.setItem("uid", response.user.uid)
          navigate("/home");
        }
      }
    } catch (err) {
      setButtonText("login");
      setEmail("");
      alert(err);
    }
  };

  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentImageContainer">
          <img src={ASSETS.LoginPageImage} />
        </div>
        <div className="loginPageInputContainer">
          <h1> Create Your Account</h1>
          <h2>{`Welcome Back ${email}`} 👋</h2>

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
            inputValue={password}
            onChangeText={(e) => setPassword(e.target.value)}
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
            backgroundColor={COLOR.borderColor}
            color={COLOR.blackColor}
            title={"login here"}
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
