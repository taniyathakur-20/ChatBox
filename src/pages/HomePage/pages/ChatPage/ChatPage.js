import "./styles.css";
import { useEffect, useState } from "react";
import CustomInput from "../../../../components/CustomButton/CustomButton";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import COLOR from "../../../../config/color";
import { database } from "../../../../firebase";
import { onValue, push, ref, get } from "firebase/database";

function ChatPage() {

  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [chatVisibleData, setChatVisibleData] = useState([]);
  const [chatVisibleUid, setChatVisibleUid] = useState("");

  useEffect(() => {
    getChatData();
  }, []);

  // Function to fetch chat data
  const getChatData = async () => {
    const uid = localStorage.getItem("uid"); // Get uid from local storage
    if (!uid) {
      alert("User ID not found in localStorage!");
      return;
    }
    const dbRef = ref(database, `user/${uid}/chat/`);
    onValue(dbRef, (snapShotChat) => {
      if (snapShotChat.exists()) {
        setIsLoading(true);
        const chatKeys = Object.keys(snapShotChat.val());
        get(ref(database, "user")).then((snapShotUser) => {
          const demoChatData = [];
          chatKeys.map((item) => {
            demoChatData.push(snapShotUser.val()[item]);
          });
          setChatData(demoChatData);
          setIsLoading(false);
          console.log(demoChatData);
        });
      } else {
        setChatData([]); // Set empty if no chats exist
        setIsLoading(false);
      }
    });
  };

  // Function to handle message sending
  const handleMessageSend = () => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
      alert("User ID not found in localStorage!");
      return;
    }
    if (!chatVisibleUid) {
      alert("Please select a chat user.");
      return;
    }
    if (message === "") {
      alert("Please enter a message.");
      return;
    }

    // Push message to Firebase
    const userChatRef = ref(
      database,
      `user/${uid}/chat/${chatVisibleUid}/`
    );
    const recipientChatRef = ref(
      database,
      `user/${chatVisibleUid}/chat/${uid}/`
    );

    const messageData = {
      message: message,
      timestamp: Date.now(), // Optional: Add timestamp for sorting or display
    };

    push(userChatRef, messageData)
      .then(() => {
        console.log("Message saved to user chat branch.");
      })
      .catch((error) => {
        console.error("Error saving message:", error);
      });

    push(recipientChatRef, messageData)
      .then(() => {
        console.log("Message saved to recipient chat branch.");
      })
      .catch((error) => {
        console.error("Error saving message:", error);
      });

    setMessage(""); // Reset message input field
  };

  return (
    <div className="chatPageBaseContainer">
      {isLoading ? (
        <div>
          <p>Please Wait...</p>
        </div>
      ) : (
        <div className="chatPageChatContainer">
          {chatData.length === 0 ? (
            <p>No Chat Available</p>
          ) : (
            <>
              {chatData.map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setChatVisibleData(Object.values(item.chat));
                    setChatVisibleUid(item.uid);
                  }}
                >
                  {item.name || "Unknown User"} {/* Handle undefined 'name' */}
                </p>
              ))}
            </>
          )}
        </div>
      )}
      <div className="chatPageMessageContainer">
        <div className="chatPageUserContainer">
          <p>{JSON.stringify(Object.values(chatVisibleData))}</p>
        </div>
        {chatVisibleData.length > 0 && (
          <div className="chatPageBoxContainer">
            {Object.values(chatVisibleData[0]).map((item, index) => (
              <div key={index}>
                <p>{Object.values(item)[0]}</p>
              </div>
            ))}
          </div>
        )}

        <div className="chatPageCustomBaseContainer">
          <div className="chatPageInputContainer">
            <input
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <CustomInput
              placeholder={"Enter Message"}
              backgroundColor={"#00ff00"}
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