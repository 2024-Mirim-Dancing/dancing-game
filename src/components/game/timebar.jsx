import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

import styles from "../../css/game/timebar.module.css"
const Timebar = () => {
    const [completed, setCompleted] = useState(100);
    const [spacePressed, setSpacePressed] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            if (spacePressed) {
                setCompleted(prevCompleted => {
                    const newCompleted = prevCompleted + 8;
                    return newCompleted > 100 ? 100 : newCompleted;
                });
            } else {
                setCompleted(prevCompleted => {
                    const newCompleted = prevCompleted - 2;
                    return newCompleted > 0 ? newCompleted : 0;
                });
            }
        }, 500);

        return () => clearInterval(interval);
    }, [spacePressed]);

    useEffect(() => {
        console.log(completed)
        if (completed <= 0) {
            // navigate("/end");
        }
    }, [completed, navigate]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                setSpacePressed(true);
            }
        };

        const handleKeyUp = (event) => {
            if (event.code === "Space") {
                setSpacePressed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

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