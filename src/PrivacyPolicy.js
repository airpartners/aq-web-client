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

function PrivacyPolicy(props) {
    const { strings } = props;
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <h1>
                {strings["Privacy Policy"]["IntroTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["IntroText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["InformationTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["InformationText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["LogTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["LogText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["CookiesTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["CookiesText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["ServiceTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["ServiceText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["SecurityTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["SecurityText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["LinksTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["LinksText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["ChildrensTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["ChildrensText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["ChangesTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["ChangesText"]}
            </Typography>
            <h1>
                {strings["Privacy Policy"]["ContactTitle"]}
            </h1>
            <Typography paragraph>
                {strings["Privacy Policy"]["ContactText"]}
            </Typography>
        </div>);
}

export default PrivacyPolicy;