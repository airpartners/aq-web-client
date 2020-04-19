import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Colors from "../Colors";

function ThermometerSVG(props) {
    return (
        <SvgIcon viewBox="0 0 20 54" fill="none" style={{color: "transparent", fontSize: props.size}}>
            <path fillRule="evenodd" clipRule="evenodd" fill={props.color}
                  d="M6 34.832C2.46819 36.3751 0 39.8993 0 43.9999C0 49.5228 4.47715 53.9999 10 53.9999C15.5228 53.9999 20 49.5228 20 43.9999C20 39.8993 17.5318 36.3751 14 34.832V38.2546C15.8135 39.5196 17 41.6212 17 43.9999C17 47.8659 13.866 50.9999 10 50.9999C6.13401 50.9999 3 47.8659 3 43.9999C3 41.6212 4.18652 39.5196 6 38.2546V34.832Z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill={props.color}
                  d="M14 38V7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7V38H3V7C3 3.13401 6.13401 0 10 0C13.866 0 17 3.13401 17 7V38H14Z"/>
            <rect x="8" y="29" width="4" height="15" rx="2" fill={props.color}/>
            <circle cx="10" cy="44" r="5" fill={props.color}/>
        </SvgIcon>
    );
}

ThermometerSVG.defaultProps = {
    color: Colors.primaryColor,
    size: 60,
}

export default ThermometerSVG;
