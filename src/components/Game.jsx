import React, { useState, useEffect } from "react";
import Tower from "./Tower";
import Disk from "./Disk";
import MoveCounter from "./MoveCounter";
import Alert from "./Alert";
import towerOne from "../assets/towerOne.png";
import towerTwo from "../assets/towerTwo.png";
import towerThree from "../assets/towerThree.png";

export default function Game() {
    const initialTowers = [[5, 4, 3, 2, 1], [], []];
    const [towers, setTowers] = useState(initialTowers);
    const [selectedDisk, setSelectedDisk] = useState(null);
    const [moveCount, setMoveCount] = useState(0);
    const [showWelcomeAlert, setShowWelcomeAlert] = useState(true);
    const [showDiskAlert, setShowDiskAlert] = useState(false);
    const [showWinAlert, setShowWinAlert] = useState(false);

    useEffect(() => {
        if (towers[1].length === 5 || towers[2].length === 5) {
            setShowWinAlert(true);
        }
    }, [towers]);

    useEffect(() => {
        if (showWelcomeAlert) {
            alert("Welcome to Towers of Hanoi! Click 'Ok' to begin.");
            setShowWelcomeAlert(false);
        }
    }, [showWelcomeAlert]);

    const handleDiskSelect = (towerIndex, diskIndex) => {
        const disk = towers[towerIndex][diskIndex];
        if (disk === towers[towerIndex][towers[towerIndex].length - 1]) {
            setSelectedDisk({ towerIndex, disk });
        }
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
                setMoveCount(moveCount + 1);
            }
        }
    };

    const resetGame = () => {
        setTowers(initialTowers);
        setSelectedDisk(null);
        setMoveCount(0);
        setShowWinAlert(false);
    };

    return (
        <div>
            <MoveCounter count={moveCount} />
            <div className="flex-container">
                {towers.map((tower, index) => (
                    <div
                        key={index}
                        className="tower-container"
                        onClick={() => handleMove(index)}
                    >
                        <Tower image={index === 0 ? towerOne : index === 1 ? towerTwo : towerThree} />
                        <div className="disk-container">
                            {tower.map((disk, diskIndex) => (
                                <Disk
                                    key={diskIndex}
                                    size={disk}
                                    totalDisks={tower.length}
                                    index={diskIndex}
                                    onSelect={() => handleDiskSelect(index, diskIndex)}
                                    isSelected={selectedDisk && selectedDisk.towerIndex === index && selectedDisk.disk === disk}
                                    isTopmost={diskIndex === tower.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {showDiskAlert && (
                <Alert
                    message="You can only select the topmost disk!"
                    onDismiss={() => setShowDiskAlert(false)}
                />
            )}

            {showWinAlert && (
                <Alert
                    message="Congratulations! You've solved the Towers of Hanoi puzzle!"
                    onDismiss={resetGame}
                />
            )}
        </div>
    );
}
