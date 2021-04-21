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

// function submitted_form(feedback_submitted) {
//     if(feedback_submitted) {
//         var msg = "Thank you for submitting feedback!";
//         document.getElementById("display_message").innerHTML = msg;
//     }
// }


function FeedbackPage(props) {
    const { strings } = props;
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography paragraph>
                {strings["FeedbackPage"]["Body"]}

                {/* Gets rid of the redirect to completed google forms (weird stuff with hiding the iframe, 
                    having blank redirect stops the google redirect, not sure if this is good)*/}
                <script type="text/javascript">var feedback_submitted=false; console.log(feedback_submitted);</script>
                <iframe title="no_redirect" name="hidden_iframe" id="hidden_iframe" 
                style={ {width:0, height:0} } onLoad="window.location='';"></iframe>

                <form class="form" action="https://docs.google.com/forms/d/e/1FAIpQLSdKXxrigrsShBGqU_hJhwR-WzFFHNeefLGZT81R13Mgx4nfXg/formResponse"
                method="post" target="hidden_iframe" onSubmit="feedback_submitted=true;">

                    <label>In what context do you find yourself using this app?</label>
                    <input name="entry.667358521" type="text" />

                    <label>Q2</label>
                    <input name="entry.1924495588" type="text" />

                    <label>Q3</label>
                    <input name="entry.870162535" type="text" />

                    <label>Q4</label>
                    <input name="entry.952911278" type="text" />

                    <label>Q5</label>
                    <input name="entry.113005119" type="text" />

                    <label>Q6</label>
                    <input name="entry.1558581568" type="text" />

                    <input class="button" type="submit" value="Send" />

                </form>
                
        
                <p id = "submitted"> </p>
            </Typography>
        </div>);
}

export default FeedbackPage;
