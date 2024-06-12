import React, { useEffect, useState } from "react";
import styles from "../../css/game/start.module.css";

const Start = () => {
    const [imageSrc, setImageSrc] = useState(`${process.env.PUBLIC_URL}/images/game/KYC_3.svg`);
    const [student1Img, setStudent1Img] = useState(`${process.env.PUBLIC_URL}/images/game/student1-1.svg`);
    const [student2Img, setStudent2Img] = useState(`${process.env.PUBLIC_URL}/images/game/student2-1.svg`);
    const [student3Img, setStudent3Img] = useState(`${process.env.PUBLIC_URL}/images/game/student3-1.svg`);
    const [isTeacherVisible, setIsTeacherVisible] = useState(false);
    const [showTeacherSide, setShowTeacherSide] = useState(false);
    const [spacePressed, setSpacePressed] = useState(false);


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

    useEffect(() => {
        let studentTimer;

        if (!isTeacherVisible) {
            studentTimer = setInterval(() => {
                setStudent1Img((prev) =>
                    prev === `${process.env.PUBLIC_URL}/images/game/student1-1.svg`
                        ? `${process.env.PUBLIC_URL}/images/game/student1-2.svg`
                        : `${process.env.PUBLIC_URL}/images/game/student1-1.svg`
                );
                setStudent2Img((prev) =>
                    prev === `${process.env.PUBLIC_URL}/images/game/student2-1.svg`
                        ? `${process.env.PUBLIC_URL}/images/game/student2-2.svg`
                        : `${process.env.PUBLIC_URL}/images/game/student2-1.svg`
                );
            }, 200);
        } else {
            // 학생 이미지 변경 타이머 해제 및 초기화
            clearInterval(studentTimer);
            setStudent1Img(`${process.env.PUBLIC_URL}/images/game/student1-1.svg`);
            setStudent2Img(`${process.env.PUBLIC_URL}/images/game/student2-1.svg`);
        }

        return () => {
            clearInterval(studentTimer);
        };
    }, [isTeacherVisible]);

    useEffect(() => {
        let studentTimer;

        if (spacePressed) {
            studentTimer = setInterval(() => {
                setStudent3Img((prev) =>
                    prev === `${process.env.PUBLIC_URL}/images/game/student3-1.svg`
                        ? `${process.env.PUBLIC_URL}/images/game/student3-2.svg`
                        : `${process.env.PUBLIC_URL}/images/game/student3-1.svg`
                );
            }, 200);
        } else {
            // 스페이스바가 눌리지 않은 경우 타이머를 정리하고 이미지 초기화
            clearInterval(studentTimer);
            setStudent3Img(`${process.env.PUBLIC_URL}/images/game/student3-1.svg`);
        }

        return () => {
            clearInterval(studentTimer);
        };
    }, [spacePressed]);

    // 키보드 이벤트 핸들러: 스페이스바 눌림 상태 감지
    const handleKeyDown = (event) => {
        if (event.keyCode === 32) { // 스페이스바의 keyCode는 32
            setSpacePressed(true);
        }
    };

    // 키보드 이벤트 핸들러: 스페이스바 떼어짐 상태 감지
    const handleKeyUp = (event) => {
        if (event.keyCode === 32) { // 스페이스바의 keyCode는 32
            setSpacePressed(false);
        }
    };

    // 이벤트 리스너 등록
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        // 이벤트 리스너 해제
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.teacher}>
                <img src={imageSrc} alt="Teacher" />
            </div>
            <div className={styles.student1}>
                <img src={student1Img} />
            </div>
            <div className={styles.student2}>
                <img src={student2Img} />
            </div>
            <div className={styles.student3}>
                <img src={student3Img} />
            </div>
        </div>
    );
};

export default Start;
