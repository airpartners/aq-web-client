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

function Feedback(props) {
    const { strings } = props;
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Typography paragraph>
                {strings["Feedback"]["Body"]}

                <form class="form" id="form" action="https://docs.google.com/forms/d/e/1FAIpQLSdKXxrigrsShBGqU_hJhwR-WzFFHNeefLGZT81R13Mgx4nfXg/formResponse">

                    <label>Name (optional)</label><br />
                    <input name="entry.2006203568" type="text" id="name" /><br />

                    <label>Email</label><br />
                    <input name="entry.217739706" type="email" id="email" required /><br />

                    <label>May we reach out to you about your feedback?</label><br />
                    <input name="entry.324300712" type="radio" id="Yes" value="Yes" />
                    <label for="Yes">yes</label><br />
                    <input name="entry.324300712" type="radio" id="No" value="No" />
                    <label for="No">no</label><br />

                    <br />
                    <label>Please answer as many of the following questions as you see fit.</label>
                    <br />
                    <br />

                    <label>In what context do you find yourself using this app?</label><br />
                    <input name="entry.667358521" type="text" /><br />

                    <label>What information from this app do you find most valuable?</label><br />
                    <input name="entry.1924495588" type="text" /><br />

                    <label>What features did you expect this app to have that it is currently missing?</label><br />
                    <input name="entry.870162535" type="text" /><br />

                    <label>How difficult is it for you to navigate through the app?</label><br />
                    <input name="entry.952911278" type="text" /><br /> 

                    <label>What frustrations do you have when using this app?</label><br />
                    <input name="entry.113005119" type="text" /><br />

                    <label>Is there anything else you would like to share with us?</label><br />
                    <input name="entry.1558581568" type="text" /><br />                     
                     
                    <input type="submit" value="Send" />

                </form>
            </Typography>
        </div>);
}


export default Feedback;
