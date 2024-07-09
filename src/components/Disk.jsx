import React from "react";
import discImages from "../assets/DiskImages";

export default function Disk({ size, onSelect, isSelected, isTopmost }) {
    const baseWidth = 120;
    const stepSize = 17;

    const diskWidth = baseWidth + (size - 1) * stepSize;

    const handleClick = () => {
        if (isTopmost) {
            onSelect();
        } else {
            alert("You can only select the topmost disk!");
        }
    };

    return (
        <img
            style={{ width: diskWidth, }}
            src={discImages[size - 1]}
            alt={`Disk ${size}`}
            onClick={handleClick}
            className={isSelected ? "active-disk" : ""}
        />
    );
}
