import React, { useState, useEffect } from "react";
import "./disc.css";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);
  return size;
}

const DiscordCircle = () => {
  const [height, widht] = useWindowSize();
  const [rayon, setRayon] = useState();
  const [myclass, setMyClass] = useState([]);
  useEffect(() => {
    if (widht >= 0 && widht < 500) {
      setRayon(170);
      setMyClass(['myStyle11' , 'myStyle12']);
    }if(widht >= 500 && widht < 750){
      setRayon(160);
      setMyClass(['myStyle21' , 'myStyle22']);
    }if(widht >=750){
      setRayon(150);
      setMyClass(['myStyle31' , 'myStyle32']);
    }
  }, [widht]);

  const [myStyle1, myStyle2]=myclass;
  return (
    <>
      <div className="Discord-od">
        <button className={`${myStyle1} myStyle1`}
        ></button>
        <svg className={`${myStyle2} myStyle2`}
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
          <text dy={rayon} textLength="1220">
            <textPath xlinkHref="#textcircle">
              {widht >= 0 && widht < 500 ? ('Discord • Discord •'):('Discord • Discord • Discord •')}
              
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
};

export default DiscordCircle;
