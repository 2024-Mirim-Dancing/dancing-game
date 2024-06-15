import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "../../css/ranking/ranking.module.css"
import RankingRow from "./ranking-row";


const Ranking = () => {
    const navigate = useNavigate();

    //rankigData 대산 서버 연결하기
    const rankingData = [
        { name: "박화경상남도독도", score: 1036456, teacher: SMS },
        { name: "정선영구업서예~", score: 95, teacher:SMS },
        { name: "임지현", score: 90, teacher:SMS }
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
                    //여기서 props로 데이터 넘겨주기
                    <RankingRow className={styles.ranking_row}
                    key={index} ranking={index + 1} name={entry.name} score={entry.score} teacher={entry.teacher} />
                ))}
            </div>

        </div>
    )
}

export default Ranking;