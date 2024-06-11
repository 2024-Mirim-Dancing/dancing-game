import React, { useEffect, useRef, useState } from "react";

import Start from "../../components/game/start";
import Timebar from "../../components/game/timebar";

const StartPage = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleKeyDown = (event) => {
        if (event.code === "Space") {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleKeyUp = (event) => {
        if (event.code === "Space") {
            if (audioRef.current && isPlaying) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [isPlaying]);

    return (
        <>
            <Start />
            <Timebar />
            <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/sound/몽키매직.wav`} loop />
        </>
    )
}

export default StartPage;
