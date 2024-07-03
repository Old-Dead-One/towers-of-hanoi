import React from "react";

export default function MoveCounter({ count }) {
    return (
        <div className="move-counter">
            Moves: {count}
        </div>
    );
}