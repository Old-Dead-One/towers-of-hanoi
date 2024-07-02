import React from "react";

export default function Disk({ size, onSelect }) {
    const colors = ["red", "blue", "green", "yellow", "orange"];
    const baseWidth = 120;
    const stepSize = 15;

    const diskWidth = baseWidth + (size - 1) * stepSize;

    const styles = {
        width: `${diskWidth}%`,
        height: "25px",
        backgroundColor: colors[size - 1],
        boxSizing: "border-box",
        borderRadius: "20px",
        opacity: "0.9",
        border: "1px solid cadetblue"
    };

    return (
        <div style={styles} onClick={onSelect}></div>
    );
}
