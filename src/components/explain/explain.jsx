import React from "react";
import { Link } from "react-router-dom";

import styles from "../../css/explain/explain.module.css"

const Explain = () => {
    return (
        <Link to="/nickname">
            <div className={styles.background}></div>

        </Link>
    )
}

export default Explain;