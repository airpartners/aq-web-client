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

function AboutPage(props) {
    const { strings } = props;
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Typography paragraph>
                {strings["DrawerNav"]["About us"]}
            </Typography>
        </div>);
}

export default AboutPage;
