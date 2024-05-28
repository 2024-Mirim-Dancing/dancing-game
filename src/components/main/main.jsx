import React from "react";

import "../../css/comm/all.css"
import styles from "../../css/main/main.module.css"

const Main = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={`${process.env.PUBLIC_URL}/images/main/title.svg`}/>
            </div>
            <div className={styles.btn}>
                <img src={`${process.env.PUBLIC_URL}/images/main/ranking-btn.png`}/>
                <img src={`${process.env.PUBLIC_URL}/images/main/gamestart-btn.svg`}/>
            </div>
        </div>
    )
}

export default Main;