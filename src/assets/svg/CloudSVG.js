import React from "react";
import Colors from "../Colors";
import SvgIcon from "@material-ui/core/SvgIcon";

function CloudSVG(props) {
    return (<SvgIcon viewBox="0 0 315 200" fill="none"
                     style={{
                         color: "transparent",
                         fontSize: props.size,
                         width: props.size,
                         height: props.size / 315 * 200,
                     }}>
        <path
            fill={props.color} stroke={props.strokeColor} strokeWidth={props.strokeWidth}
            d="M262.838 93.3406L262.845 94.8333H264.338H267.48C292.594 94.8333 313.102 116.463 313.102 143.333V150C313.102 176.871 292.594 198.5 267.48 198.5H47.5739C22.4598 198.5 1.95131 176.871 1.95131 150V143.333C1.95131 119.12 18.6169 99.146 40.2866 95.4485L41.5343 95.2356V93.9699V83.862C41.5343 78.6581 43.3778 72.2587 46.8208 66.0175C50.256 59.7904 55.2279 53.8237 61.3638 49.4517C67.4912 45.0859 74.7544 42.3254 82.8221 42.4342C90.8844 42.543 99.8863 45.5191 109.494 52.8586L111.049 54.0468L111.792 52.2361C124.158 22.1006 152.416 1.5 184.23 1.5C226.695 1.5 261.502 38.7869 262.801 85.6264C262.801 85.6321 262.801 85.6377 262.801 85.6433L262.838 93.3406Z"/>
    </SvgIcon>);
}

CloudSVG.defaultProps = {
    size: 315,
    color: Colors.orange,
    strokeColor: Colors.primaryColor,
    strokeWidth: "3",
}
CloudSVG.small = 150;
CloudSVG.medium = 200;
CloudSVG.large = 315;
export default CloudSVG;
