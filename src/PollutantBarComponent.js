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
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        marginBottom: "1rem",
    },
    textContent: {
        width: "70%",
        maxWidth: "500px",
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
    },
    greenText: {
        color: Colors.green,
    },
    orangeText: {
        color: Colors.orange,
    },
    greyText: {
        color: Colors.grey,
    },
    blackText: {
        color: Colors.black,
    },
    primaryColorText: {
        color: Colors.primaryColor,
    },
    greenBackground: {
        background: Colors.green,
        '&:hover': {
            opacity: "80%",
            background: Colors.green,
        },
    },
    orangeBackground: {
        background: Colors.orange,
        '&:hover': {
            opacity: "80%",
            background: Colors.orange,
        },
    },
    greyBackground: {
        background: Colors.grey,
        '&:hover': {
            opacity: "80%",
            background: Colors.grey,
        },
    },
    blackBackground: {
        background: Colors.black,
        '&:hover': {
            opacity: "80%",
            background: Colors.black,
        },
    },
    dialogTitle: {
        lineHeight: 1,
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

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const truncateVal = () => {
        let ret;
        switch (pollutant) {
            case 'PM25':
                ret = parseFloat(val.toFixed(3));
                break;
            default:
                ret = parseInt(val);
        }
        return ret;
    }

    const getAboveAverageText = () => {
        if (val === strings['AtAGlance']['Data not available'])
            return strings['AtAGlance']['Data not available'];
        else if (Pollutants[pollutant].baseline === 0) {
            return strings['AtAGlance']['Baseline unavailable'];
        } else {
            let value = truncateVal();
            let baseline = Pollutants[pollutant].baseline;
            let percentage = ((value - baseline) / baseline * 100).toFixed(1);
            return percentage + "% " + (percentage > 0 ? strings['AtAGlance']['Above baseline'] : strings['AtAGlance']['Below baseline']);
        }
    }

    const getTextColor = () => {
        if (val === strings['AtAGlance']['Data not available']) {
            return classes.greyText;
        } else if (Pollutants[pollutant].baseline === 0) {
            return classes.blackText;
        } else if (val > Pollutants[pollutant].baseline) {
            return classes.orangeText;
        } else {
            return classes.greenText;
        }
    }

    const getBackgroundColor = () => {
        if (val === strings['AtAGlance']['Data not available']) {
            return classes.greyBackground;
        } else if (Pollutants[pollutant].baseline === 0) {
            return classes.blackBackground;
        } else if (val > Pollutants[pollutant].baseline) {
            return classes.orangeBackground;
        } else {
            return classes.greenBackground;
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
        if (Pollutants[pollutant].baseline === 0) {
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

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <div className={classes.content}>
            <div className={classes.textContent}>
                <h3 className={`${classes.pollutantTitle} ${getTextColor()}`}>
                    {pollutantAbbreviationHTML(pollutant)}, {strings['PollutantText'][pollutant + ' Full Name']}
                </h3>
                <p className={`${classes.baselineText} ${getTextColor()}`}>{getAboveAverageText(val, strings, pollutant)}</p>
            </div>
            <Button className={`${classes.roundBtn} ${getBackgroundColor()}`} onClick={handleClickOpen('paper')}>
                Learn more
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle className={classes.dialogTitle} id="scroll-dialog-title">
                    <h3 className={`${classes.pollutantDialogTitle} ${getTextColor()}`}>
                        {pollutantAbbreviationHTML(pollutant)}, {strings['PollutantText'][pollutant + ' Full Name']}
                    </h3>
                    <p className={`${classes.baselineDialogText} ${getTextColor()}`}>{getAboveAverageText(val, strings, pollutant)}</p>
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

                        {[...new Array(50)]
                            .map(
                                () => `This is a long text about the pollutant
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n\n')}
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
