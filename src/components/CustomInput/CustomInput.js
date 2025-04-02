import"./styles.css";
import { useState } from "react";
import{FaEyeSlash} from"react-icons/fa";
import{FaEye} from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";

function CustomInput({type,
    placeholder,
    Icon,
    iconColor,
    isSecureEntry=false,
    inputValue,
    onChangeText,}){
        const[showText,setShowText]=useState(false);
    return(
        <div className="customInputBaseContainer">
            <div className="customInputIconContainer">
                {
                    Icon?<Icon color={iconColor} size={20}/>:null
                }
            </div>
            <div className="customInputInputContainer">
                <input value={inputValue}type={isSecureEntry ?(showText?"text":"password"):type}
                placeholder={placeholder} onChange={onChangeText}/>
            </div>
            {isSecureEntry&&(
            <div className="customInputPasswordContainer" onClick={()=>{ setShowText(!showText);
            }}
            >
              {showText?<FaEye/>:<FaEyeSlash/>}
        </div>
    )}
    </div>
    );
}

export default CustomInput;