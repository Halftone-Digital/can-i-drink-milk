"use client";

import React from "react";

import styles from "./torresStraitFlag.module.css";

// Official Torres Strait Islander flag colors
const TORRES_STRAIT_COLORS = {
  green: "#006747",
  blue: "#012169",
  white: "#FFFFFF",
  black: "#000000",
};

// Dhari headdress + five-pointed star SVG (white on transparent)
// viewBox is 3:2 aspect ratio; original reference paths (114.3 × 57.1) scaled
// via transform to fill the taller blue band
const DHARI_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.3 76.2" preserveAspectRatio="none">
  <g transform="translate(57.15,0) scale(1.3345) translate(-57.15,0)">
    <path fill="${TORRES_STRAIT_COLORS.white}" d="m58.2 29.2-1-3.3-1.1 3.3h-3.5l2.8 2-1 3.3 2.7-2 2.9 2-1.1-3.3 2.8-2z"/>
    <path fill="${TORRES_STRAIT_COLORS.white}" d="m58.7 16.1-1.5 5.3-1.6-5.3c-16.5 3.6-9 18-7 21.7l-4 3.2 7-2.5v-9.3a5.5 5.5 0 1 1 11 0v9.3l7.2 2.5-4-3.2c2-3.8 9.4-18.1-7.1-21.7"/>
  </g>
</svg>`;

const DHARI_DATA_URI = `data:image/svg+xml,${encodeURIComponent(DHARI_SVG)}`;

// Stripe gradient (green/black/blue/black/green bands) matching reference proportions
const STRIPE_GRADIENT = `linear-gradient(to bottom, ${TORRES_STRAIT_COLORS.green} 0% 23.6%, ${TORRES_STRAIT_COLORS.black} 23.6% 26.3%, ${TORRES_STRAIT_COLORS.blue} 26.3% 73.6%, ${TORRES_STRAIT_COLORS.black} 73.6% 76.5%, ${TORRES_STRAIT_COLORS.green} 76.5% 100%)`;

interface TorresStraitFlagProps {
  width?: number;
  numOfColumns?: number;
  staggeredDelay?: number;
  billow?: number;
}

function TorresStraitFlag({
  width = 200,
  numOfColumns = 10,
  staggeredDelay = 100,
  billow = 2,
}: TorresStraitFlagProps) {
  // Calculate friendly width (rounded to nearest multiple of numOfColumns)
  const friendlyWidth = Math.round(width / numOfColumns) * numOfColumns;

  // Calculate the first column delay for stagger effect
  const firstColumnDelay = numOfColumns * staggeredDelay * -1;

  return (
    <div className={styles.flag} style={{ width: friendlyWidth, maxWidth: "100%" }}>
      {Array.from({ length: numOfColumns }, (_, index) => {
        // Calculate X offset for the SVG background so this column shows its slice
        const emblemOffsetPercent = (index / (numOfColumns - 1)) * 100;

        return (
          <div
            key={index}
            className={styles.column}
            style={
              {
                "--billow": `${index * billow}px`,
                backgroundImage: `url("${DHARI_DATA_URI}"), ${STRIPE_GRADIENT}`,
                backgroundSize: `${numOfColumns * 100}% 100%, 100% 100%`,
                backgroundPosition: `${emblemOffsetPercent}% 0, 0 0`,
                backgroundRepeat: "no-repeat, no-repeat",
                animationDelay: `${firstColumnDelay + index * staggeredDelay}ms`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

export default TorresStraitFlag;
