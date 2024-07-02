import React, { useState } from "react";
import Tower from "./Tower";
import Disk from "./Disk";
import towerOne from "../assets/towerOne.png";
import towerTwo from "../assets/towerTwo.png";
import towerThree from "../assets/towerThree.png";

export default function App() {
    const [towers, setTowers] = useState([[5, 4, 3, 2, 1], [], []]);
    const [selectedDisk, setSelectedDisk] = useState(null);

    const handleDiskSelect = (towerIndex, disk) => {
        setSelectedDisk({ towerIndex, disk });
    };

    const handleMove = (toTowerIndex) => {
        if (selectedDisk !== null) {
            const { towerIndex: fromTowerIndex, disk } = selectedDisk;

            const newTowers = towers.map(tower => [...tower]);
            if (newTowers[toTowerIndex].length === 0 || newTowers[toTowerIndex][newTowers[toTowerIndex].length - 1] > disk) {
                newTowers[fromTowerIndex].pop();
                newTowers[toTowerIndex].push(disk);

                setTowers(newTowers);
                setSelectedDisk(null);
            }
        }
    };

    return (
        <div className="flex-container">
            {towers.map((tower, index) => (
                <div key={index} className="tower-container" onClick={() => handleMove(index)}>
                    <Tower image={index === 0 ? towerOne : index === 1 ? towerTwo : towerThree} />
                    <div className="disk-container">
                        {tower.map((disk, diskIndex) => (
                            <Disk
                                key={diskIndex}
                                size={disk}
                                totalDisks={tower.length}
                                index={diskIndex}
                                onSelect={() => handleDiskSelect(index, disk)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
