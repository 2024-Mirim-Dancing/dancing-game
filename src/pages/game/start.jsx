import React, { useEffect, useRef } from "react";

import Start from "../../components/game/start";
import Timebar from "../../components/game/timebar";

const StartPage = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <>
            <Start />
            <Timebar />
            <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/sound/몽키매직.wav`} loop />
        </>
    )
}

export default StartPage;