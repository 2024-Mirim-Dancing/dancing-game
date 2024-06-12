import React, { useEffect, useState } from "react";
import styles from "../../css/game/start.module.css";

const Start = () => {
    // 이미지 경로 상태 설정
    const [imageSrc, setImageSrc] = useState(`${process.env.PUBLIC_URL}/images/game/KYC_3.svg`);
    // 선생님이 정면을 보고 있는지 여부를 나타내는 상태
    const [isTeacherVisible, setIsTeacherVisible] = useState(false);
    // 선생님이 옆을 보고 있는지 여부를 나타내는 상태
    const [showTeacherSide, setShowTeacherSide] = useState(false);

    useEffect(() => {
        let teacherBackTimer;
        let teacherFrontTimer;
        let teacherSideTimer;

        const startCycle = () => {
            const teacherBackTime = Math.random() * 4 + 1; // 1~5초 사이의 난수
            const teacherFrontTime = Math.random() * 5 + 1; // 1~6초 사이의 난수
            const teacherSideTime = 0.25; // 고정 0.25초

            // 뒷모습을 일정 시간 보여줌
            teacherBackTimer = setTimeout(() => {
                setImageSrc(`${process.env.PUBLIC_URL}/images/game/KYC_2.svg`); // 옆모습 이미지로 설정
                setShowTeacherSide(true); // 옆모습 상태 활성화

                // 옆모습을 고정 시간(0.25초) 동안 보여줌
                teacherSideTimer = setTimeout(() => {
                    setShowTeacherSide(false); // 옆모습 상태 비활성화
                    setIsTeacherVisible(true); // 정면 상태 활성화
                    setImageSrc(`${process.env.PUBLIC_URL}/images/game/KYC_1.svg`); // 정면 이미지로 설정

                    // 정면을 난수 시간 동안 보여줌
                    teacherFrontTimer = setTimeout(() => {
                        setIsTeacherVisible(false); // 정면 상태 비활성화
                        setImageSrc(`${process.env.PUBLIC_URL}/images/game/KYC_3.svg`); // 뒷모습 이미지로 설정

                        // 다음 사이클 시작
                        startCycle();
                    }, teacherFrontTime * 1000);
                }, teacherSideTime * 1000);
            }, teacherBackTime * 1000);
        };

        // 첫 사이클 시작
        startCycle();

        // 컴포넌트 언마운트 시 타이머 정리
        return () => {
            clearTimeout(teacherBackTimer); // 뒷모습 타이머 정리
            clearTimeout(teacherFrontTimer); // 정면 타이머 정리
            clearTimeout(teacherSideTimer); // 옆모습 타이머 정리
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.teacher}>
                <img src={imageSrc} alt="Teacher" />
            </div>
        </div>
    );
};

export default Start;
