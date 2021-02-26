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
                <form class="form" action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScnivsSzi9mlc58p_-kVgZmlGJC0TBV2YJucWH19F8mYBGswg/formResponse">

                    <label>Name</label>
                    <input name="entry.117597867" type="text" />

                    <label>Email</label>
                    <input name="entry.750980636" type="email" required />

                    <label>Feedback</label>
                    <input name="entry.172700963" type="text" required />

                    <input type="submit" value="Send" />

                </form>
            </Typography>
        </div>);
}

export default ContactUsPage;
