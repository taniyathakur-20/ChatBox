import React, { useState } from "react";
import "./styles.css";
import CustomInput from "../../../../../../components/CustomInput/CustomInput";
import CustomButton from "../../../../../../components/CustomButton/CustomButton";
import COLOR from "../../../../../../config/color";
import { set, ref, push } from "firebase/database";
import { database } from "../../../../../../firebase";
export const NewPeoplePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [buttonText, setButtonText] = useState("Save People");

  const handleSave = async () => {
    if (title == "" || content == "") {
      alert("Fill the fields first,");
    } else {
      setButtonText("Please Wait..");
      await push(ref(database, `/peoples`), {
        title: title,
        content: content,
      });
      setButtonText("Save People");
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="newPeoplePageBaseContainer">
      <div className="newPeoplePageTitleContainer">
        <h1>Add new People</h1>
      </div>
      <div className="newPeoplePageInputFormContainer">
        <CustomInput
          placeholder={"Enter Title"}
          inputValue={title}
          onChangeText={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <CustomButton
          backgroundColor={COLOR.baseColorDark}
          title={buttonText}
          color={COLOR.whiteColor}
          onClick={handleSave}
        />
      </div>
    </div>
  );
};