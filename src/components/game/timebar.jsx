import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

import styles from "../../css/game/timebar.module.css"
const Timebar = () => {
    const [completed, setCompleted] = useState(100);

    const navigate = useNavigate();

    useEffect(() => {

        const interval = setInterval(() => {
            setCompleted(prevCompleted => {
                const newCompleted = prevCompleted - 5;
                return newCompleted > 0 ? newCompleted : 0;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (completed <= 0) {
            navigate("/end");
        }
    }, [completed, navigate]);

    return (
        <>
            <ProgressBar
                completed={completed}
                className={styles.container}
                height="6.76vh"
                borderRadius="0px"
                bgColor="#00631C"
                baseBgColor="rgb(0,0,0,0)"
                isLabelVisible={false}
            >
            </ProgressBar>
        </>
    )
}

export default Timebar;