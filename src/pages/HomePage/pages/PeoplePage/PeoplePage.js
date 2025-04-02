import React, { useEffect, useState } from "react";
import "./styles.css";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import COLORS from "../../../../config/color";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import COLOR from "../../../../config/color";
import { database } from "../../../../firebase";
import { get, child, ref, set } from "firebase/database";

export default function PeoplePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    getDataOfPeople();
  }, []);

  const getDataOfPeople = async () => {
    setIsLoading(true);
    const dbRef = ref(database, "user");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setPeopleData(Object.values(snapshot.val()));
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setPeopleData([]);
      alert("No Data Found");
    }
  };

  const handleFollow = (requestUid) => {
    alert(requestUid)
    set(ref(database, `user/${localStorage.getItem("uid")}/request`), {
      [requestUid]: false
    })
    set(ref(database, `user/${requestUid}/request`), {
      [localStorage.getItem("uid")]: false
    })
  }

  return (
    <div className="peoplePageBaseContainer">
      <div className="peoplePageContentContainer">
        <div className="peoplePageContentTitleContainer"></div>
        <div className="peopleInputContainer"></div>
        {isLoading ? (
          <RotatingLines
            strokeWidth="2"
            width="50"
            strokeColor={COLOR.blackColor}
          />
        ) : (
          <div className="peoplePageContentBaseContainer">
            {peopleData.length == 0 ? (
              <p>No Data Found</p>
            ) : (
              peopleData.map((item) => {
                return (
                  <>
                    {item.uid != localStorage.getItem("uid") && (
                      <div className="peoplePageItemBaseContainer">
                        <h1>{item.name}</h1>
                        <h3>{item.email}</h3>
                        <h3>{item.uid}</h3>
                        <div className="PeoplePageFollowButton">
                        <CustomButton  title={"Follow"}  color={"#000"} backgroundColor={"#00FF00"} onClick={() => handleFollow(item.uid)}/>
                        </div>
      
                      </div>
                    )}
                  </>
                );
              })
            )}
          </div>
        )}
      </div>
      <div className="peoplePageAddButtonContainer">
        <CustomButton
          backgroundColor={COLORS.baseColorDark}
          title={"Add People"}
          color={COLORS.whiteColor}
          onClick={() => navigate("/new-people")}
        />
      </div>
    </div>
  );
}
