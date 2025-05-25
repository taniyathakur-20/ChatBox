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
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    getChatData();
  }, []);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (!uid || !chatVisibleUid) return;

    const chatRef = ref(database, `users/${uid}/chat/${chatVisibleUid}/`);
    onValue(chatRef, (snapshot) => {
      const messages = snapshot.exists() ? Object.values(snapshot.val()) : [];
      setChatMessages(messages);
    });
  }, [chatVisibleUid]);

  const getChatData = async () => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
      alert("User ID not found in localStorage!");
      return;
    }
    const dbRef = ref(database, `users/${uid}/chat/`);
    onValue(dbRef, (snapShotChat) => {
      if (snapShotChat.exists()) {
        const chatKeys = Object.keys(snapShotChat.val());
        get(ref(database, "users")).then((snapShotUser) => {
          const demoChatData = [];
          chatKeys.map((item) => {
            const user = snapShotUser.val()[item];
            if (user) demoChatData.push(user);
          });
          setChatData(demoChatData);
          setIsLoading(false);
        });
      } else {
        setChatData([]);
        setIsLoading(false);
      }
    });
  };

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

    const userChatRef = ref(database, `users/${uid}/chat/${chatVisibleUid}/`);
    const recipientChatRef = ref(
      database,
      `users/${chatVisibleUid}/chat/${uid}/`
    );

    const messageData = {
      message: message,
      timestamp: Date.now(),
      senderUid: uid,
    };

    push(userChatRef, messageData);
    push(recipientChatRef, messageData);

    setMessage("");
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
                    setChatVisibleUid(item.uid);
                  }}
                  className="chatPageChatItemBaseContainer"
                >
                  {item.name || "Unknown User"}
                </p>
              ))}
            </>
          )}
        </div>
      )}
      <div className="chatPageMessageContainer">
        <div className="chatPageUserContainer">
          <p>
            {chatVisibleUid
              ? `Chatting with ${chatVisibleUid}`
              : "Select a user"}
          </p>
        </div>
        <div className="chatPageBoxContainer">
          {chatMessages.map((item, index) => (
            <div
              key={index}
              className={`message ${
                item.senderUid === localStorage.getItem("uid")
                  ? "sent"
                  : "received"
              }`}
            >
              {item.message}
            </div>
          ))}
        </div>

        <div className="chatPageCustomBaseContainer">
          <div className="chatPageInputContainer">
            <input
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
