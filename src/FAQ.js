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
				title: "CO - Carbon Monoxide",
				shortText: "Carbon monoxide (CO) is a colorless, odorless, tasteless gas produced by burning gasoline, wood, propane, charcoal or other fuel.",
				longText: "Carbon monoxide (CO) is a colorless and odorless gas. It results from the incomplete combustion of carbon-containing fuels such as natural gas, gasoline, or wood, and is emitted by a wide variety of combustion sources, including  motor vehicles, power plants, wildfires, and incinerators"
		},
		{
				title: "NO2 - Nitrogen Dioxide",
				shortText: "Nitrogen dioxide (NO2) is part of a group of gaseous air pollutants produced as a result of road traffic and other fossil fuel combustion processes. Its presence in air contributes to the formation and modification of other air pollutants, such as ozone and particulate matter, and to acid rain.",
				longText: "Nitrogen oxides are a mixture of gases that are composed of nitrogen and oxygen. Two of the most toxicologically significant nitrogen oxides are nitric oxide and nitrogen dioxide; both are nonflammable and colorless to brown at room temperature. \n This is a sharp sweet-smelling gas at room temperature, whereas nitrogen dioxide has a strong, harsh odor and is a liquid at room temperature, becoming a reddish-brown gas above 70 EF. \n Nitrogen oxides are released to the air from the exhaust of motor vehicles, the burning of coal, oil, or natural gas, and during processes such as arc welding, electroplating, engraving, and dynamite blasting. They are also produced commercially by reacting nitric acid with metals or cellulose. Nitrogen oxides are used in the production of nitric acid, lacquers, dyes, and other chemicals. Nitrogen oxides are also used in rocket fuels, nitration of organic chemicals, and the manufacture of explosives."
		},
		{
				title: "NO (ppb)",
				shortText: "Nitrogen oxide (NOx) is a chemical compound of oxygen and nitrogen that is formed by reacting with each other during combustion at high temperatures, mainly combustion of fuel such as oil, diesel, gas and organic matter. NOx is a common designation of nitrogen oxides NO and NO2.",
				longText: "NOx is a term used to describe a mixture of nitric oxide (NO) and nitrogen dioxide (NO2). They are inorganic gases formed by the combination of oxygen with nitrogen from the air. NO is produced in much greater quantities than NO2, but oxidizes to NO2 in the atmosphere. NO2 causes detrimental effects to the bronchial system. NO2 concentrations frequently approach, and sometimes exceed air quality standards in many European cities. NOx is emitted when fuel is being burned e.g. in transport, industrial processes, and power generation."
		},
		{
				title: "O3 - Ozone",
				shortText: "Ozone (O3) is a highly reactive gas composed of three oxygen atoms. It is both a natural and a man-made product that occurs in the Earth's upper atmosphere and lower atmosphere.  Depending on where it is in the atmosphere, ozone affects life on Earth in either good or bad ways.",
				longText: "Ozone at ground level – not to be confused with the ozone layer in the upper atmosphere – is one of the major constituents of photochemical smog. It is formed by the reaction with sunlight (photochemical reaction) of pollutants such as nitrogen oxides (NOx) from vehicle and industry emissions and volatile organic compounds (VOCs) emitted by vehicles, solvents and industry. As a result, the highest levels of ozone pollution occur during periods of sunny weather."
		},
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
