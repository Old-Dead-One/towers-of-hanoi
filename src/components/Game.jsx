import React from "react"
import Tower from "./Tower"
// import Disc from "./Disc"
import towerOne from "../assets/towerOne.png"
import towerTwo from "../assets/towerTwo.png"
import towerThree from "../assets/towerThree.png"
// import discOne from "../assets/discOne.png"
// import discTwo from "../assets/discTwo.png"
// import discThree from "../assets/discThree.png"
// import discFour from "../assets/discFour.png"
// import discFive from "../assets/discFive.png"
// import discSix from "../assets/discSix.png"

export default function App() {
    return (
        <div className="flex-container">
            <Tower image={towerOne} />
            <Tower image={towerTwo} />
            <Tower image={towerThree} />
            {/* <Disc image={discOne} /> */}
        </div>
    )
}
