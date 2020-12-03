import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {pollutantAbbreviationHTML, Pollutants} from "./Utils";
import Colors from "./assets/Colors";
import Grid from "@material-ui/core/Grid";
import ThresholdBar from "./ThresholdBar";

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        width: "100%",
        maxWidth: "500px",
        flexDirection: "column",
        marginBottom: "1.5rem",
    },
    topContent: {
        display: "flex",
        width: "100%",
        flexDirection: 'row',
        marginBottom: ".3rem",
    },
    textTopContent: {
        width: "70%",
    },
    buttonTopContent: {
        display: "flex",
        justifyContent: "flex-end",
        width: "30%",
    },
    pollutantTitle: {
        marginBottom: 0,
        fontWeight: "bold",
        lineHeight: 1.5,
    },
    pollutantDialogTitle: {
        marginBottom: 0,
        fontWeight: "bold",
        lineHeight: 1.5,
        fontSize: "1em",
    },
    baselineText: {
        lineHeight: 1.5,
        fontWeight: "500",
    },
    baselineDialogText: {
        lineHeight: 1.5,
        fontWeight: "500",
        fontSize: ".8em",
        marginBottom: ".4rem",
    },
    roundBtn: {
        color: "white",
        textTransform: "none",
        borderRadius: 100,
        fontWeight: "bold",
        lineHeight: 1.2,
        alignSelf: "center",
        padding: ".6rem .45rem",
        fontSize: ".9em",
        [theme.breakpoints.up('sm')]: {
            padding: ".6rem .8rem",
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: ".6rem .45rem",
        },
        '&:hover': {
            opacity: "80%",
        },
    },
    dialogTitle: {
        lineHeight: 1,
        marginBottom: "1rem",
    },
    dialogContent: {
        color: Colors.black,
    },
    dialogContentText: {
        marginBottom: 0,
    },
    dialogContentSubtext: {
        marginBottom: "12px",
    },
}));

function PollutantBarComponent(props) {
    const {strings, pollutant, val} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const truncateVal = () => {
        if (val === strings['AtAGlance']['Data not available']) {
            return 0;
        } else if (pollutant === 'PM25') {
            return parseFloat(val.toFixed(3));
        } else {
            return parseInt(val);
        }
    }

    const getAboveAverageText = () => {
        if (val === strings['AtAGlance']['Data not available']) {
            return strings['AtAGlance']['Data not available'];
        } else if (Pollutants[pollutant].experimentalBaseline) {
            return strings['AtAGlance']['Baseline unavailable'];
        } else {
            let value = truncateVal();
            let baseline = Pollutants[pollutant].baseline;
            let percentage = ((value - baseline) / baseline * 100).toFixed(1);
            return percentage + "% " + (percentage > 0 ? strings['AtAGlance']['Above baseline'] : strings['AtAGlance']['Below baseline']);
        }
    }

    const getColor = () => {
        if (val === strings['AtAGlance']['Data not available']) {
            return Colors.grey;
        } else if (Pollutants[pollutant].experimentalBaseline) {
            return Colors.black;
        } else if (val > Pollutants[pollutant].baseline) {
            return Colors.orange;
        } else {
            return Colors.green;
        }
    }

    const getCurrentReadingText = () => {
        if (val === strings['AtAGlance']['Data not available']) {
            return "_ _";
        } else {
            return truncateVal() + " " + Pollutants[pollutant].unit;
        }
    }

    const getStandardText = () => {
        if (Pollutants[pollutant].experimentalBaseline) {
            return "_ _";
        } else {
            return strings['AtAGlance']['National Ambient Air Quality Standards'];
        }
    }

    const getBaselineText = () => {
        if (Pollutants[pollutant].baseline === 0) {
            return "_ _";
        } else {
            return Pollutants[pollutant].baseline + " " + Pollutants[pollutant].unit;
        }
    }

    const getAveragingTimeText = () => {
        if (Pollutants[pollutant].baseline === 0) {
            return "_ _"
        } else {
            return Pollutants[pollutant].averagingTime + "-" + strings['AtAGlance']['Hour'];
        }
    }

    return (
        <div className={classes.content}>
            <div className={classes.topContent}>
                <div className={classes.textTopContent}>
                    <h3 className={classes.pollutantTitle} style={{color: getColor()}}>
                        {pollutantAbbreviationHTML(pollutant)}, {strings['PollutantText'][pollutant + ' Full Name']}
                    </h3>
                    <p className={classes.baselineText}
                       style={{color: getColor()}}>{getAboveAverageText(val, strings, pollutant)}</p>
                </div>
                <div className={classes.buttonTopContent}>
                    <Button className={classes.roundBtn}
                            style={{background: getColor()}}
                            onClick={handleClickOpen('paper')}>
                        Learn more
                    </Button>
                </div>
            </div>
            <ThresholdBar value={truncateVal()} threshold={Pollutants[pollutant].baseline}
                          showVerticalBar={!Pollutants[pollutant].experimentalBaseline} barColor={getColor()}/>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle className={classes.dialogTitle} id="scroll-dialog-title">
                    <h3 className={classes.pollutantDialogTitle} style={{color: getColor()}}>
                        {pollutantAbbreviationHTML(pollutant)}, {strings['PollutantText'][pollutant + ' Full Name']}
                    </h3>
                    <p className={classes.baselineDialogText}
                       style={{color: getColor()}}>{getAboveAverageText(val, strings, pollutant)}
                    </p>
                    <ThresholdBar value={truncateVal()} threshold={Pollutants[pollutant].baseline}
                                  showVerticalBar={!Pollutants[pollutant].experimentalBaseline} barColor={getColor()}/>
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        className={classes.dialogContent}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <h4 className={classes.dialogContentText}>Current reading</h4>
                                <p className={classes.dialogContentSubtext}>{getCurrentReadingText()}</p>
                                <h4 className={classes.dialogContentText}>Standard</h4>
                                <p className={classes.dialogContentSubtext}>{getStandardText()}</p>
                            </Grid>
                            <Grid item xs={6}>
                                <h4 className={classes.dialogContentText}>Baseline</h4>
                                <p className={classes.dialogContentSubtext}>{getBaselineText()}</p>
                                <h4 className={classes.dialogContentText}>Averaging Time</h4>
                                <p className={classes.dialogContentSubtext}>{getAveragingTimeText()}</p>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>);
}

export default PollutantBarComponent;
