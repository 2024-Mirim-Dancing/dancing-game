import { React, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/teacher/teacher.css"
import { CustomPrevArrow, CustomNextArrow } from "./custom-arrow ";

const Teacher = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "1.67vw",
        slidesToShow: 3,
        speed: 500,
        centerMode: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="container" slide="custom-slide">
            <div className="title">
                <img src={`${process.env.PUBLIC_URL}/images/teacher/title.svg`} />
            </div>
            <Slider {...settings} className="slider">
                <div className="teacher">
                    <img src={`${process.env.PUBLIC_URL}/images/teacher/teacher-box.svg`} />
                </div>
                <div className="teacher">
                    <img src={`${process.env.PUBLIC_URL}/images/teacher/teacher-box.svg`} />
                </div>
                <div className="teacher">
                    <img src={`${process.env.PUBLIC_URL}/images/teacher/teacher-box.svg`} />
                </div>
                <div className="teacher">
                    <img src={`${process.env.PUBLIC_URL}/images/teacher/teacher-box.svg`} />
                </div>
                <div className="teacher">
                    <img src={`${process.env.PUBLIC_URL}/images/teacher/teacher-box.svg`} />
                </div>
                <div className="teacher">
                    <img src={`${process.env.PUBLIC_URL}/images/teacher/teacher-box.svg`} />
                </div>
            </Slider>
        </div>
    )
}

export default Teacher;
