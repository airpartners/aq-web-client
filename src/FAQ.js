import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function FAQ(props) {
    const { strings } = props;
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <h1>
                {strings["FAQ"]["IntroTitle"]}
            </h1>
            <Typography paragraph>
                {strings["FAQ"]["IntroText"]}
            </Typography>
        </div>);
}

export default FAQ;
