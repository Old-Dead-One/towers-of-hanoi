import React from "react";

export default function Tower({ image }) {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "70vh",
        width: "9vw",
    }

    return (
        <div style={styles}></div>
    );
};