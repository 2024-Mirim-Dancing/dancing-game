import React from "react";
import { useLocation, useNavigate} from "react-router-dom";

import styles from "../../css/comm/next-btn.module.css"
const NextBtn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const handleNextBtn = () =>{
        if(currentPath.endsWith('nickname'))
            navigate('/teacher');
    }

    return (
        <div className={styles.container}>
            <img src={`${process.env.PUBLIC_URL}/images/comm/next-btn.svg`} onClick={handleNextBtn}/>
        </div>
    )
}

export default NextBtn;