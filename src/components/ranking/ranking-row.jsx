import React from "react";

import styles from "../../css/ranking/ranking-row.module.css"
const RankingRow = (props) => {
    const { ranking, name, score,teacher } = props;

    //이미지 저장명은 선생님 이니셜로 되어있음

    return (
        <div className={styles.container}>
            <img className={styles.background} src={`${process.env.PUBLIC_URL}/images/ranking/row-background.svg`} />
            <img className={styles.score_background} src={`${process.env.PUBLIC_URL}/images/ranking/score-background.svg`} />
            <p className={styles.ranking}>{ranking}</p>
            <img className={styles.teacher} src={`${process.env.PUBLIC_URL}/images/ranking/SMS.svg`}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.score}>{score}점</p>
            <img src=""></img>
        </div>
    )
}

export default RankingRow; 