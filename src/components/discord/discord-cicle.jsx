import React from "react";
import DiscordLogo from "../../assets/icons/DISCORD.png";
import "./disc.css";

const DiscordCircle = () => {
  return (
    <>
    <div className="Discord-od">
    <button className="Discord-logo">
    </button>
      <svg
      >
        
        <defs>
          <path
            d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            id="textcircle"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="30s"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              repeatCount="indefinite"
            />
          </path>
        </defs>
        <text dy="130" textLength="1220">
          <textPath xlinkHref="#textcircle">
            Discord • Discord • Discord •
          </textPath>
        </text>
      </svg>
    </div>
    </>
  );
};

export default DiscordCircle;
