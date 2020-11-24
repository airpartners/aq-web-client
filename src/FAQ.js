import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
		customCard: {
				marginBottom: theme.spacing(3),
				padding: theme.spacing(3)
		},
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
		media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
		},
		expand: {
				transform: 'rotate(0deg)',
				marginLeft: 'auto',
				transition: theme.transitions.create('transform', {
						duration: theme.transitions.duration.shortest,
				}),
		},
		expandOpen: {
				transform: 'rotate(180deg)',
		},

}));

function FAQ(props) {
    const { strings } = props;
    const classes = useStyles();

    return (
        <div className={classes.content}>
										<Card className={classes.customCard}>
												<CardHeader title="Frequently Asked Questions coming soon!"/>
												<CardContent>
														<Typography variant="body2" color="textSecondary" component="p">
														</Typography>
												</CardContent>
										</Card>
        </div>);
}

export default FAQ;
