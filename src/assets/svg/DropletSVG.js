import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function DropletSVG(props) {
    return (
        <SvgIcon {...props} viewBox="0 0 42 55" fill="none" style={{color: "transparent", fontSize: props.size}}>
            <path stroke={props.color} strokeWidth="3"
                  d="M40.5 34C40.5 44.7696 31.7696 53.5 21 53.5C10.2304 53.5 1.5 44.7696 1.5 34C1.5 28.7391 4.21168 24.0864 8.30875 18.8221C9.55081 17.2261 10.9263 15.5688 12.3684 13.8313C15.1575 10.4707 18.1958 6.80981 21 2.71203C23.8042 6.80982 26.8425 10.4707 29.6317 13.8313C31.0737 15.5688 32.4492 17.2261 33.6913 18.8221C37.7883 24.0864 40.5 28.7391 40.5 34Z"/>
            <line x1="12" y1="42.8788" x2="29.6777" y2="25.2011"
                  stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round"/>
            <circle cx="15.5" cy="25.5001" r="3.5"
                    fill="none" stroke={props.color} strokeWidth={props.strokeWidth}/>
            <circle cx="26" cy="42.5001" r="3.5"
                    fill="none" stroke={props.color} strokeWidth={props.strokeWidth}/>
        </SvgIcon>
    );
}

DropletSVG.defaultProps = {
    color: "#303F9F",
    strokeWidth: "3",
    size: 60,
}

export default DropletSVG;
