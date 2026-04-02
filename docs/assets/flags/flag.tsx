"use client";

import React from "react";

import styles from "./flag.module.css";

// Official Australian Aboriginal flag colors
const ABORIGINAL_FLAG_COLORS = {
  black: "#000000",
  red: "#E03C31",
  yellow: "#FFC000",
};

interface FlagProps {
  width?: number;
  numOfColumns?: number;
  staggeredDelay?: number;
  billow?: number;
}

function Flag({ width = 200, numOfColumns = 10, staggeredDelay = 100, billow = 2 }: FlagProps) {
  // Calculate friendly width (rounded to nearest multiple of numOfColumns)
  const friendlyWidth = Math.round(width / numOfColumns) * numOfColumns;

  // Calculate the first column delay for stagger effect
  const firstColumnDelay = numOfColumns * staggeredDelay * -1;

  // Calculate circle radius in pixels
  // Circle diameter should be ~30% of flag height
  // Flag height = friendlyWidth × (2/3)
  // Circle radius = (friendlyWidth × 2/3 × 0.3) / 2 = friendlyWidth × 0.1
  const circleRadiusPx = friendlyWidth * 0.15;

  return (
    <div className={styles.flag} style={{ width: friendlyWidth, maxWidth: "100%" }}>
      {Array.from({ length: numOfColumns }, (_, index) => {
        // Calculate circle center X position for this column
        // Formula: (0.5 * numOfColumns - columnIndex) * 100%
        const circleCenterX = (0.5 * numOfColumns - index) * 100;

        return (
          <div
            key={index}
            className={styles.column}
            style={
              {
                "--billow": `${index * billow}px`,
                "--circle-x": `${circleCenterX}%`,
                "--circle-radius": `${circleRadiusPx}px`,
                "--flag-black": ABORIGINAL_FLAG_COLORS.black,
                "--flag-red": ABORIGINAL_FLAG_COLORS.red,
                "--flag-yellow": ABORIGINAL_FLAG_COLORS.yellow,
                animationDelay: `${firstColumnDelay + index * staggeredDelay}ms`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

export default Flag;
