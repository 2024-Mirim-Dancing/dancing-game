import React from "react";
import { useLocation } from "react-router-dom";


import "../../css/comm/all.css"
import styles from "../../css/end/end.module.css"

const End = () => {
    const location = useLocation();
    const { score } = location.state || { score: 0 };

    return (
        <div className={styles.container}>
            <div className={styles.title}>당신의 점수는?</div>
            <div className={styles.score}>{score}점</div>
            <div className={styles.line}>
            <img src={`${process.env.PUBLIC_URL}/images/end/line.svg`} alt="Student" />
            </div>
        </div>
    )
}

export default End;