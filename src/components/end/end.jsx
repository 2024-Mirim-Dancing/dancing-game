import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // Axios import

import "../../css/comm/all.css";
import styles from "../../css/end/end.module.css";

const End = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score } = location.state || { score: 0 };
    const { teacherName } = location.state || { teacherName: "" };
    const [comment, setComment] = useState("");
    const nickname = localStorage.getItem("nickname"); // LocalStorage에서 닉네임 불러오기
    const [teacherClass, setTeacherClass] = useState(styles.teacher);
    const [teacherText, setTeacherText] = useState(styles.comment);

    // 선생님 한국어 이름에 따라 코멘트 설정
    useEffect(() => {
        switch (teacherName) {
            case "SMS":
                setComment("칠판 보세요 칠판~");
                setTeacherClass(styles.teacherSms);
                break;
            case "KYC":
                setComment("춤 잘 추는데 자퇴하고 아이돌이나 한 번 해봐~");
                setTeacherText(styles.textKyc);
                break;
            case "KYH":
                setComment("아이 크라이 다메다로");
                break;
            case "KJS":
                setComment("여기봐 어디보니 집중해라");
                setTeacherText(styles.textKjs);
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

    // 점수 제출 함수
    useEffect(() => {
        const submitScore = async () => {
            if (teacherName && score) {
                if (teacherName) {
                    try {
                        // Axios를 사용하여 점수 제출 요청
                        const response = await axios.post(
                            `http://127.0.0.1:3001/score/${nickname}/${score}/${teacherName}`
                        );
                        console.log(response.data.message); // 성공 메시지 출력
                    } catch (error) {
                        // 오류 처리
                        console.error("Error response:", error.response);
                        console.error("Error message:", error.message);
                    }
                }
            }
        };

        submitScore(); // 함수 호출

    }, [score, teacherName]);

    // 랭킹 보기 버튼 핸들러
    const handleRankingbtn = () => {
        navigate("/ranking");
    };

    // 메인으로 버튼 핸들러
    const handleMainBtn = () => {
        console.log("메인으로 이동");
        navigate("/");
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>당신의 점수는?</div>
            <div className={styles.scoreBox}>
                <div className={styles.score}>{score}점</div>
            </div>
            <div className={teacherText}>{comment}</div>
            <div className={teacherClass}>
                {/* 선생님 이미지 출력 */}
                <img
                    src={`${process.env.PUBLIC_URL}/images/game/${teacherName}_1.svg`}
                    alt={`${teacherName}`}
                />
            </div>
            <div className={styles.btn}>
                {/* 랭킹 보기 버튼 */}
                <div className={styles.rankingBtn} onClick={handleRankingbtn}>
                    랭킹보기
                </div>
                {/* 랭킹 버튼 라인 이미지 */}
                <div className={styles.rankingBtnLine}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/end/rankingBtnLine.svg`}
                        alt="랭킹 버튼 라인"
                    />
                </div>
                {/* 메인으로 버튼 */}
                <div className={styles.mainBtn} onClick={handleMainBtn}>
                    메인으로
                </div>
                {/* 메인 버튼 라인 이미지 */}
                <div className={styles.mainBtnLine}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/end/mainBtnLine.svg`}
                        alt="메인 버튼 라인"
                    />
                </div>
            </div>
        </div>
    );
};

export default End;
