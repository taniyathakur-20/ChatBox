import "./RequestPage.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { database } from "../../../../firebase";
import { get, child, ref, set, onValue, remove, push } from "firebase/database";

export default function RequestPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [peopleData, setPeopleData] = useState([]);
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    getDataOfrequest();
  }, []);
  const getDataOfrequest = async () => {
    setIsLoading(true);
    await onValue(
      ref(database, `user/${localStorage.getItem("uid")}/request`),
      (snapshot) => {
        if (snapshot.exists()) {
          const requestData = [];
          const dataKeys = Object.keys(snapshot.val());
          dataKeys.forEach((item) => {
            const oneData = {
              unique_key: item,
              data: snapshot.val()[item],
            };
            requestData.push(oneData);
          });
          setRequestData(requestData);
        }
      }
    );
    setIsLoading(false);
  };

  const handleAcceptRequest = (key, uid) => {
    remove(ref(database, `user/${localStorage.getItem("uid")}/request/${key}`));
    push(ref(database, `user/${localStorage.getItem("uid")}/chat/${uid}`), {
      message: "Hello"
    })
    push(ref(database, `user/${uid}/chat/${localStorage.getItem("uid")}`), {
      message: "Hello"
    });
  }

  return (
    <div className="requestPageBaseContainer">
      <div className="requestPageContentBaseContainer">
        {requestData.length === 0 ? (
          <>
            <p>No Data Found</p>
          </>
        ) : (
          requestData.map((item) => {
            return (
              <div className="requestTileItemBaseContainer">
                <div className="requestTileContentContainer">
                  <h1>{item.data.name}</h1>
                  <h4>{item.data.email}</h4>
                  <p>{JSON.stringify(item)}</p>
                </div>
                <div className="requestTileAcceptBaseContainer">
                  <CustomButton title={"Accept"} backgroundColor={"#00FF00"} onClick={() => handleAcceptRequest(item.unique_key, item.data.uid)}/>
                  <CustomButton title={"Reject"} backgroundColor={"#FF0000"} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
