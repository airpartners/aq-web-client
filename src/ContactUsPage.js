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


function ContactUsPage(props) {
    const { strings } = props;
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography paragraph>
                {strings["ContactUsPage"]["Body"]}
                <a rel="noopener noreferrer" target="_blank" href="mailto:adeairquality@gmail.com">
                    {strings["ContactUsPage"]["Email"] + "."}
                </a>
            </Typography>
        </div>);
}

export default ContactUsPage;
