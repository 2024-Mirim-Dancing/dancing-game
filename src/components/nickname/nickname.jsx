import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "../../css/comm/all.css"
import styles from "../../css/nickname/nickname.module.css"
const Nickname = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
 
    const handleNextBtn = () => {
        console.log(name)
        localStorage.setItem("nickname", name);
        navigate("/teacher");
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={`${process.env.PUBLIC_URL}/images/nickname/title.svg`} />
            </div>
            <div className={styles.input_container}>
                <img src={`${process.env.PUBLIC_URL}/images/nickname/input.svg`} />
                <input type="text" 
                className={styles.inputbox}
                onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className={styles.next_btn}>
                <img src={`${process.env.PUBLIC_URL}/images/comm/next-btn.svg`} onClick={handleNextBtn} />
            </div>
        </div>
    )
}

export default Nickname;