import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../css/comm/all.css"
import styles from "../../css/end/end.module.css"

const End = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score } = location.state || { score: 0 };
    const { teacherName } = location.state || { teacherName: "" };
    const [comment, setComment] = useState("");

    useEffect(() => {
        switch (teacherName) {
            case "SMS":
                setComment("칠판 보세요 칠판~");
                break;
            case "KYC":
                setComment("춤 잘 추는데 자퇴하고 아이돌이나 한 번 해봐~");
                break;
            case "KYH":
                setComment("어이 크라이 다메다로");
                break;
            case "KJS":
                setComment("여기봐 어디보니 집중해라");
                break;
            case "KHS":
                setComment("계속해봐 멋있다.");
                break;
            case "YBS":
                setComment("좀 더 집중해주세요");
                break;
            default:
                setComment("");
        }
    }, [teacherName]);

    const handleRankingbtn = () => {
        navigate('/ranking');
    }

    const handleMainBtn = () => {
        console.log("SFdfda");
        navigate('/');
    }

    const teacherClass = teacherName === "SMS" ? styles.teacherSms : styles.teacher;

    return (
        <div className={styles.container}>
            <div className={styles.title}>당신의 점수는?</div>
            <div className={styles.scoreBox}>
                <div className={styles.score}>{score}점</div>
            </div>
            <div className={styles.comment}>
                {comment}
            </div>
            <div className={teacherClass}>
                <img src={`${process.env.PUBLIC_URL}/images/game/${teacherName}_1.svg`} />
            </div>
            <div className={styles.btn}>
                <div className={styles.rankingBtn} onClick={handleRankingbtn}>랭킹보기</div>
                <div className={styles.rankingBtnLine}>
                    <img src={`${process.env.PUBLIC_URL}/images/end/rankingBtnLine.svg`} />
                </div>
                <div className={styles.mainBtn} onClick={handleMainBtn}>메인으로</div>
                <div className={styles.mainBtnLine}>
                    <img src={`${process.env.PUBLIC_URL}/images/end/mainBtnLine.svg`} />
                </div>
            </div>
        </div>
    );
}

export default End;
