import React, { useEffect, useRef } from "react";
import End from "../../components/end/end";
import { useParams } from "react-router-dom";

const EndPage = () => {
    const audioRef = useRef(null);
    const { teacherName } = useParams();

    useEffect(() => {
        const audioElement = audioRef.current;
        audioElement.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    }, []);

return (
    <>
        <End />
        {/* 오디오 요소 추가 */}
        <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/sound/${teacherName}.wav`} />
    </>
);
};

export default EndPage;
