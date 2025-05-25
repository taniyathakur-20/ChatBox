import { useState } from "react";
import COLOR from "../../config/color";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./styles.css";
import ASSETS from "../../assets";
import { FaRegUserCircle, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { auth, database } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set, startAfter } from "firebase/database";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (
        username.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        confirmPassword.trim() === ""
      ) {
        alert("Please fill out all the fields");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      setButtonText("Registering...");
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user.uid) {
        await set(ref(database, `users/${response.user.uid}`), {
          uid: response.user.uid,
          name: username,
          email: email,
          createdAt: new Date().toISOString(),
        });

        alert("Registration successful!");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } else {
        alert("Registration failed. Please try again.");
      }

      setButtonText("Register");
    } catch (err) {
      setButtonText("Register");
      alert(err.message || "An error occurred during registration.");
    }
  };

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
              <tbody>
                <tr>
                  <td>
                    <div className="RegisterPageInputContainer">Username:</div>
                  </td>
                  <td>
                    <CustomInput
                      placeholder="Name"
                      Icon={FaRegUserCircle}
                      inputValue={username}
                      onChangeText={(e) => setUsername(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="RegisterPageInputContainer">Email:</div>
                  </td>
                  <td>
                    <CustomInput
                      placeholder="Email Address"
                      inputValue={email}
                      onChangeText={(e) => setEmail(e.target.value)}
                      Icon={MdEmail}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="RegisterPageInputContainer">Password:</div>
                  </td>
                  <td>
                    <CustomInput
                      placeholder="Password"
                      inputValue={password}
                      onChangeText={(e) => setPassword(e.target.value)}
                      Icon={FaKey}
                      isSecureEntry={true}
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
                      placeholder="Confirm Password"
                      isSecureEntry={true}
                      inputValue={confirmPassword}
                      onChangeText={(e) => setConfirmPassword(e.target.value)}
                      Icon={FaKey}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <CustomButton
            backgroundColor={COLOR.blackColor}
            color={COLOR.whiteColor}
            title={buttonText}
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
