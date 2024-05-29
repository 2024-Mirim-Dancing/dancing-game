import React from "react";

import "../../css/comm/all.css"
import styles from "../../css/nickname/nickname.module.css"
const Nickname = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={`${process.env.PUBLIC_URL}/images/nickname/title.svg`} />
            </div>
            <div className={styles.input_container}>
                <img src={`${process.env.PUBLIC_URL}/images/nickname/input.svg`} />
                <input type="text" className={styles.inputbox}></input>
            </div>
        </div>
    )
}

export default Nickname;