import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "../../css/ranking/ranking.module.css"
import RankingRow from "./ranking-row";


const Ranking = () => {
    const navigate = useNavigate();

    const rankingData = [
        { name: "박화경상남도독도", score: 103645545656 },
        { name: "정선영구업서예~", score: 95 },
        { name: "임지현", score: 90 }
    ];

    const handleBackArrow = () =>{
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrow} onClick={handleBackArrow}>
                <img src={`${process.env.PUBLIC_URL}/images/ranking/pre-arrow.svg`} />
            </div>
            <div className={styles.title}>
                <img src={`${process.env.PUBLIC_URL}/images/ranking/title.svg`} />
            </div>
            <div className={styles.content}>
                {rankingData.map((entry, index) => (
                    <RankingRow className={styles.ranking_row}
                    key={index} ranking={index + 1} name={entry.name} score={entry.score} />
                ))}
            </div>

        </div>
    )
}

export default Ranking;