import React from "react";

export default function Disc({ image }) {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "30vh",
        width: "100vw",
        marginRight: "120px",
        marginLeft: "120px",
        marginBottom: "20px"
    }

    return (
        <div style={styles}></div>
    );
};