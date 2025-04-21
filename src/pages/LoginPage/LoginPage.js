import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./styles.css";
import { FaUserAlt, FaKey } from "react-icons/fa";
import ASSETS from "../../assets";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Login");
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = async () => {
    try {
      if (email.trim() === "" || password.trim() === "") {
        alert("Please fill out the fields");
        return;
      }

      setButtonText("Please Wait...");
      const response = await signInWithEmailAndPassword(auth, email, password);
      setButtonText("Login");

      if (response.user.uid) {
        const userId = response.user.uid;

        // Store login info in Realtime Database
        await set(ref(database, `users/${userId}/loginInfo`), {
          email: email,
          lastLogin: new Date().toISOString(),
        });

        localStorage.setItem("uid", userId);
        navigate("/home");
      }
    } catch (err) {
      setButtonText("Login");
      setEmail("");
      alert(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentImageContainer">
          <img src={ASSETS.LoginPageImage} alt="Login Visual" />
        </div>
        <div className="loginPageInputContainer">
          <h1>Login to Your Account</h1>
          <h2>{`Welcome Back ${email || "!"}`} 👋</h2>

          <CustomInput
            type="email"
            placeholder="Enter Email"
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => setEmail(e.target.value)}
          />

          <CustomInput
            type="password"
            placeholder="Enter Password"
            Icon={FaKey}
            isSecureEntry={true}
            inputValue={password}
            onChangeText={(e) => setPassword(e.target.value)}
          />

          <CustomButton
            backgroundColor={COLOR.borderColor}
            color={COLOR.blackColor}
            title={buttonText}
            onClick={handleLogin}
          />

          <CustomButton
            backgroundColor={COLOR.borderColor}
            color={COLOR.blackColor}
            title="Register Here"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
