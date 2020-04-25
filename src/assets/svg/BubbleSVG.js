import React from "react";
import Colors from "../Colors";

const percentMin = 30;
const percentMax = 70;
const minWidth = 200;

function BubbleSVG(props) {
    let {padding, width, percent, color} = props;
    if (width < minWidth) width = minWidth;
    if (percent < percentMin) percent = percentMin;
    if (percent > percentMax) percent = percentMax;
    const diameter = width / 150 * 70;
    const radius = diameter / 2;
    const height = diameter + padding * 2;
    const viewBox = `0 0 ${width} ${height}`;
    // Variable for the filled arc
    const largeArcFlag = percent > 50 ? 1 : 0;
    const offsetY = percent / 50 * radius - radius; // Based on radius not on the area of the bubble
    const offsetX = diameter / 2 - Math.sqrt(diameter * diameter / 4 - offsetY * offsetY);

    return (<svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            <path stroke="black" fill="white" strokeWidth="1"
                  d={`M ${padding} ${padding + radius} 
                      A ${radius} ${radius} 0 0 0 ${padding + diameter} ${padding + radius}`}/>
            <path stroke="black" fill="white" strokeWidth="1"
                  d={`M ${padding} ${padding + radius} 
                      A ${radius} ${radius} 0 0 1 ${padding + diameter} ${padding + radius}`}/>
            <path fill={color} stroke="black" strokeWidth="1"
                  d={`M ${padding + offsetX} ${padding + radius - offsetY} 
                      A ${radius} ${radius} 0 ${largeArcFlag} 0 ${padding + diameter - offsetX} ${padding + radius - offsetY}
                      L ${padding + offsetX} ${padding + radius - offsetY}`}/>
            {/* Safe lines */}
            <line x1={diameter + padding * 2} y1={radius + padding}
                  x2={diameter + padding} y2={radius + padding}
                  stroke="black" strokeWidth="1"/>
            <line x1={padding} y1={radius + padding}
                  x2={diameter + padding} y2={radius + padding}
                  stroke={Colors.grey}
                  strokeWidth="3"
                  strokeDasharray="3 3"/>
            <text x={diameter + padding * 2.5} y={height / 2 - padding * 2}
                  style={{fontWeight: "600", fill: "#757575"}}>
                <tspan x={diameter + padding * 2.5} dy="1.2em">{props.standardText1}</tspan>
                <tspan x={diameter + padding * 2.5} dy="1.2em">{props.standardText2}</tspan>
                <tspan x={diameter + padding * 2.5} dy="1.2em">{props.standardText3}</tspan>
            </text>
            <text x={radius + padding - props.currentTextLength / 2} y="30%"
                  style={{fontWeight: "600", fill: "#757575"}}
                  textLength={props.currentTextLength}>{props.currentText}</text>
            <text x={radius + padding - props.pollutantTextLength / 2} y="80%"
                  style={{fontWeight: "600", fill: "#fff"}}
                  textLength={props.pollutantTextLength}>{props.pollutantText}</text>
        </svg>
    );
}

BubbleSVG.defaultProps = {
    padding: 10,
    width: 200,
    percent: 50,
    color: Colors.green,
    currentText: "?? ug/m3", // The current concentration
    pollutantText: "PM2.5", // The name of the pollutant
    standardText1: "?? ug/m3", // The safe concentration
    standardText2: "EPA 1 hour",
    standardText3: "standard",
    currentTextLength: 56,
    pollutantTextLength: 45,
}

export default BubbleSVG;
