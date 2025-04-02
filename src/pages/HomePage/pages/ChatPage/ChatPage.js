import "./styles.css";
import { useEffect, useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import CustomInput from "../../../../components/CustomButton/CustomButton";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import COLOR from "../../../../config/color";
import { database } from "../../../../firebase";

import { onValue, push, ref } from "firebase/database";

function ChatPage() {
  // State variables
  const [message, setMessage] = useState(""); 
  const [chatData, setChatData] = useState([]); // Initialize as an array

  useEffect(() => {
    getChatData();
  }, []); // Properly closed the effect

  const getChatData = async () => {
    const dbRef = ref(database, "chats");
    onValue(dbRef, (snapShot) => {
      if (snapShot.exists()) {
        setChatData(Object.values(snapShot.val())); // Updates chatData state
      }
    });
  };

  const handleMessageSend = () => {
    if (message === "") {
      alert("Please enter a message");
    } else {
      push(ref(database, "chats/"), {
        message: message,
      });
      setMessage(""); // Clear input field after sending
    }
  };

  return (
    <div className="chatPageBaseContainer">
      <div className="chatPageChatContainer">
        {chatData.length === 0 ? (
          <p>No Chat Available</p>
        ) : (
          <>
            {chatData.map((item, index) => (
              <p key={index}>{item.message}</p> // Added key attribute for map items
            ))}
          </>
        )}
      </div>
      <div className="chatPageMessageContainer">
        <div className="chatPageUserContainer">
          <p>Taniya</p>
        </div>
        <div className="chatPageBoxContainer">
          <p>loram</p>
        </div>
        <div className="chatPageCustomBaseContainer">
          <div className="chatPageInputContainer">
            <CustomInput
              placeholder={"Enter Message"}
              inputValue={message}
              onChangeText={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="chatPageButtonContainer">
            <CustomButton
              title={"Send"}
              backgroundColor={COLOR.blackColor}
              color={COLOR.whiteColor}
              onClick={handleMessageSend}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;