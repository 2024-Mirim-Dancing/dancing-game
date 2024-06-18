import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../css/ranking/ranking.module.css";
import RankingRow from "./ranking-row";

const Ranking = () => {
    const navigate = useNavigate();
    const [rankingData, setRankingData] = useState([]);

    useEffect(() => {
        const fetchRankingData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:3001/ranking");
                if (response.data && response.data.ranking) {
                    setRankingData(response.data.ranking);
                }
            } catch (error) {
                console.error("Error fetching ranking data:", error);
            }
        };

        fetchRankingData();
    }, []);

    const handleBackArrow = () => {
        navigate("/");
    };

    return (
        <div className={styles.background}>
            <div className={styles.arrow} onClick={handleBackArrow}>
                <img src={`${process.env.PUBLIC_URL}/images/ranking/pre-arrow.svg`} alt="Back Arrow" />
            </div>
            <div className={styles.title}>
                <img src={`${process.env.PUBLIC_URL}/images/ranking/title.svg`} alt="Ranking Title" />
            </div>
            
            <div className={styles.container}>
                <div className={styles.content}>
                    {rankingData.map((entry, index) => (
                        <RankingRow
                            key={index}
                            ranking={index + 1}
                            name={entry.user_id} // 서버에서 user_id로 제공됨
                            score={entry.score}
                            teacher={entry.teacher}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ranking;
