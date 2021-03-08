import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

/* card testing - imports here need auditing  */
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* end experimental imports */

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    customCard: {
        marginBottom: theme.spacing(3),
        padding: theme.spacing(3),
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
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

/* replace with strings props  */
const FAQData = [
		{
				title: "What are ultrafine particles?",
				shortText: "Learn more about particulates in the air we breathe.",
				longText: "Ultrafine particles are particles that are 100 times smaller than particles regulated by the EPA. They are emitted when jet fuel is burned. They are dangerous because they can go farther into the lungs and cross the blood brain behavior."
		},
		{
			title: "What does ppb mean when referring to pollutant concentration?",
			shortText: "Notes on units and how air quality is measured.",
			longText: "PPB stands for “parts per billion.” Concentration in parts per billion refers to how many pollutant molecules there are for every billion air molecules in a particular volume.",
		},
		{
			title: "What can I do to reduce my exposure to air pollution?",
			shortText: "Steps for air quality mitigation.",
			longText: "There are multiple strategies to reduce your exposure to air pollution. When inside, turning on an air purifier, such as a HEPA Air Purifier will significantly decrease your exposure.\n\n Otherwise, try to reduce your time outside when the air quality is considerably worse than average.",
		},
		{
			title:"Why is East Boston particularly susceptible to air pollution?",
			shortText:"",
			longText:"Due to its proximity to the airport, East Boston is particularly susceptible to unsafe levels of particulates in the air. When airplanes fly over East Boston to take off and land, a high concentration of particles are released in the air. The particulate concentration is also highly dependent on the direction of the wind.",
		},
		{
			title: "What is Air Partners?",
			shortText: "",
			longText: "Air Partners are a team of engineering students from Olin College of Engineering, Babson College and Wellesley College. They partner with community organizations in East Boston to mitigate the community’s exposure to air pollution."
		}
];

function FAQ(props) {
    const { strings } = props;
    const classes = useStyles();

		const [expandedIndex, setExpandedIndex] = React.useState(false);

		const handleExpandClick = (index) => {
				if (expandedIndex === index) {
						setExpandedIndex("");
				} else {
						setExpandedIndex(index);
				}
		};

    return (
        <div className={classes.content}>
						{FAQData.map((item, index) => {
								return (
										<Card key={item.title} className={classes.customCard}>
												<CardHeader title={item.title}/>
												<CardContent>
														<Typography variant="body1" color="textSecondary" component="p">
																{item.shortText}
														</Typography>
												</CardContent>
												<CardActions disableSpacing>
														<IconButton
																className={clsx(classes.expand, {
																		[classes.expandOpen]: index === expandedIndex,
																})}
																onClick={() => handleExpandClick(index)}
																aria-expanded={index === expandedIndex}
																aria-label="show more">
																<ExpandMoreIcon />
														</IconButton>
												</CardActions>
												<Collapse in={index === expandedIndex} timeout="auto" unmountOnExit>
														<CardContent>
																<Typography paragraph>
																		{item.longText}
																</Typography>
														</CardContent>
												</Collapse>
										</Card>
								)
						})}
        </div>);
}

export default FAQ;
