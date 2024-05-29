import React from "react";

import styles from "../../css/ranking/ranking-row.module.css"
const RankingRow = (props) => {
    const { ranking, name, score } = props;

    return (
        <div className={styles.container}>
            <img className={styles.background} src={`${process.env.PUBLIC_URL}/images/ranking/row-background.svg`} />
            <img className={styles.score_background} src={`${process.env.PUBLIC_URL}/images/ranking/score-background.svg`} />
            <p className={styles.ranking}>{ranking}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.score}>{score}점</p>
        </div>
    )
}

export default RankingRow; 