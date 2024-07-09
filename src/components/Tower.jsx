import React from "react";

export default function Tower({ image }) {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "70vh",
        width: "10vw",
    }

    return (
        <div style={styles}></div>
    );
};
// import React from "react";
// import { useDroppable } from "@dnd-kit/core";

// export default function Tower({ image, towerId }) {
//     const { isOver, setNodeRef } = useDroppable({
//         id: towerId
//     });

//     const styles = {
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         height: "70vh",
//         width: "10vw",
//         opacity: isOver ? 1 : 0.5
//     }

//     return (
//         <div ref={setNodeRef} style={styles}>
//             <img src="image" alt="" />
//         </div>
//     );
// };