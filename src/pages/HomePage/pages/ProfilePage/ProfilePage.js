import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get, ref } from "firebase/database";
import {db } from "../../../../firebase";
import "./styles.css"; 

export default function ProfilePage() {
  const location = useLocation();
  const [userData, setUserData] = useState(location.state?.userData || null);

  useEffect(() => {
    if (!userData) {
      fetchUserData();
    }
  }, []);

  const fetchUserData = async () => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
      console.error("UID not found in localStorage.");
      return;
    }

    try {
      const snapshot = await get(ref(db, `users/${uid}`));
      const data = snapshot.val();
      if (data) {
        console.log("Fetched user data:", data);
        setUserData(data);
      } else {
        console.error("No data found for UID:", uid);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="profile-container">
        {/* <img src={require("../../../../assets/images/profileimage.jpg")}/> */}
      <h2>Profile Information</h2>
      {userData ? (
        <div className="profile-meta">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>UID:</strong> {userData.uid}</p>
          <p><strong>qualification:</strong>{userData.uid}</p>
          <p><strong>experience: </strong>{userData.uid}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}