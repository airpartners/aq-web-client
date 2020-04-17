import React from "react";

function BubbleSVG(props) {
    let {padding, width, percent, color} = props;
    if (percent < 0) percent = 0;
    if (percent >= 100) percent = 99;
    const diameter = width / 150 * 70;
    const radius = diameter / 2;
    const height = diameter + padding * 2;
    const viewBox = `0 0 ${width} ${height}`;
    // Variable for the filled arc
    const largeArcFlag = percent > 50 ? 1 : 0;
    const offsetY = percent / 50 * radius - radius; // Based on radius not on the area of the bubble
    const offsetX = diameter / 2 - Math.sqrt(diameter * diameter / 4 - offsetY * offsetY);

    return (<svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            <path stroke="black" fill="white" strokeWidth="2"
                  d={`M ${padding} ${padding + diameter / 2} A ${diameter / 2} ${diameter / 2} 0 0 0 ${padding + diameter} ${padding + diameter / 2}`}/>
            <path stroke="black" fill="white" strokeWidth="2"
                  d={`M ${padding} ${padding + diameter / 2} A ${diameter / 2} ${diameter / 2} 0 0 1 ${padding + diameter} ${padding + diameter / 2}`}/>
            <path fill={color} strokeWidth="2"
                  d={`M ${padding + offsetX} ${padding + diameter / 2 - offsetY} A ${diameter / 2} ${diameter / 2} 0 ${largeArcFlag} 0 ${padding + diameter - offsetX} ${padding + diameter / 2 - offsetY}`}/>
            {/*Safe lines*/}
            <line x1={diameter + padding * 2} y1={diameter / 2 + padding} x2={diameter + padding}
                  y2={diameter / 2 + padding}
                  stroke="#212121"/>
            <line x1={padding} y1={diameter / 2 + padding} x2={diameter + padding} y2={diameter / 2 + padding}
                  stroke="#C5CAE9"
                  strokeWidth="3"
                  strokeDasharray="3 3"/>
        </svg>
    );
}

BubbleSVG.defaultProps = {
    padding: 10,
    width: 200,
    percent: 50,
    color: "#3FB571",
}

export default BubbleSVG;
