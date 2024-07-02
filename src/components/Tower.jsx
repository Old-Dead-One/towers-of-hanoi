import React from "react";

export default function Tower({ image }) {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "70vh",
        width: "10vw",
        marginRight: "120px",
        marginLeft: "120px",
        marginBottom: "20px"
    }

    return (
        <div style={styles}></div>
    );
};





