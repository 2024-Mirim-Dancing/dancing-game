import React from "react";
import { Link } from "react-router-dom";

import "../../css/comm/all.css"
import styles from "../../css/main/main.module.css"

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={`${process.env.PUBLIC_URL}/images/main/title.svg`} />
            </div>
            <div className={styles.btn}>
                <Link to='/rankig'><img src={`${process.env.PUBLIC_URL}/images/main/ranking-btn.png`} /></Link>
                <Link to='/nickname'><img src={`${process.env.PUBLIC_URL}/images/main/gamestart-btn.svg`} /></Link>
            </div>
        </div>
    )
}

export default Main;