import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/teacher/teacher.css"
import { CustomPrevArrow, CustomNextArrow } from "./custom-arrow ";

const Teacher = () => {
    const [currentTeacher, setCurrentTeacher] = useState("SMS");
    const navigate = useNavigate();

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "1.67vw",
        slidesToShow: 3,
        speed: 500,
        centerMode: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        afterChange: (index) => {
            const centerIndex = index + Math.floor(settings.slidesToShow / 2)-1;
            const teacher = teachers[centerIndex % teachers.length];
            setCurrentTeacher(teacher.name);
        }
    };

    const teachers = [
        { id: 1, name: "SMS", imgSrc: `${process.env.PUBLIC_URL}/images/teacher/sms-box.svg` },
        { id: 2, name: "KJS", imgSrc: `${process.env.PUBLIC_URL}/images/teacher/kjs-box.svg` },
        { id: 3, name: "KHS", imgSrc: `${process.env.PUBLIC_URL}/images/teacher/khs-box.svg` },
        { id: 4, name: "KYH", imgSrc: `${process.env.PUBLIC_URL}/images/teacher/kyh-box.svg` },
        { id: 5, name: "YBS", imgSrc: `${process.env.PUBLIC_URL}/images/teacher/ybs-box.svg` },
        { id: 6, name: "KYC", imgSrc: `${process.env.PUBLIC_URL}/images/teacher/kyc-box.svg` }
    ];

    const handleNextBtn = () => {
        console.log(currentTeacher);
        navigate('/start', { state: { teacherName: currentTeacher } });
    }

    return (
        <div className="container" slide="custom-slide">
            <div className="title">
                <img src={`${process.env.PUBLIC_URL}/images/teacher/title.svg`} />
            </div>
            <Slider {...settings} className="slider">
                {teachers.map((teacher, index) => (
                    <div className="teacher" key={teacher.id}>
                        <img src={teacher.imgSrc} alt={teacher.name} />
                    </div>
                ))}
            </Slider>

            <div className="button">
                <img src={`${process.env.PUBLIC_URL}/images/comm/next-btn.svg`} onClick={handleNextBtn} />
            </div>
        </div>
    )
}

export default Teacher;
