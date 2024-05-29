import React from "react";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", zIndex: 1 }}
            onClick={onClick}
        >
            <img src={`${process.env.PUBLIC_URL}/images/teacher/pre-arrow.svg`} />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", zIndex: 1 }}
            onClick={onClick}
        >
            <img src={`${process.env.PUBLIC_URL}/images/teacher/next-arrow.svg`} />
        </div>
    );
};

export { CustomPrevArrow, CustomNextArrow };
