import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


var radio = "No"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function getInputData() {
    // get data from html form
    let dataToPost = new FormData(); //formdata API

    //fill name attributes to corresponding values
    dataToPost.append("entry.2006203568", document.querySelector("#name").value);
    dataToPost.append("entry.217739706", document.querySelector("#email").value);
    dataToPost.append("entry.324300712", radio);
    dataToPost.append("entry.667358521", document.querySelector("#q1").value);
    dataToPost.append("entry.1924495588", document.querySelector("#q2").value);
    dataToPost.append("entry.870162535", document.querySelector("#q3").value);
    dataToPost.append("entry.952911278", document.querySelector("#q4").value);
    dataToPost.append("entry.113005119", document.querySelector("#q5").value);
    dataToPost.append("entry.1558581568", document.querySelector("#q6").value);

    return dataToPost;
}

function eraseInput(){
    // clear input fields after submission
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#q1").value = "";
    document.querySelector("#q2").value = "";
    document.querySelector("#q3").value = "";
    document.querySelector("#q4").value = "";
    document.querySelector("#q5").value = "";
    document.querySelector("#q6").value = "";

}

function on_submit(e) {
    // prevents redirect
    e.preventDefault();
    let url = "https://docs.google.com/forms/d/e/1FAIpQLSdKXxrigrsShBGqU_hJhwR-WzFFHNeefLGZT81R13Mgx4nfXg/formResponse";

    // collecting and sending the data to the google form
    fetch(url,{
        method: "POST",
        mode: "no-cors",
        header:{
            'Content-Type': 'application/json'
            },
        body: getInputData()
    })

    // after submitted success
    .then(data=>{
        let success_msg = document.querySelector("#success");
        success_msg.style.display = "block";
        setTimeout( () => {success_msg.style.display = "none"}, 30000); //displaying submission message
        eraseInput(); //erasing input values
    })
    .catch(err=>console.error(err)); //promise based
}


function Feedback(props) {
    const { strings } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState('No');
    const handleChange = (event) => {
        setValue(event.target.value);
        radio = event.target.value;
    };
    return (
        <div className={classes.content}>
            <Typography paragraph>
                
                {strings["Feedback"]["Body"]}

                <form className={ classes.feedback_form } id="form" onSubmit= { on_submit }> 

                    <TextField name="entry.2006203568" id="name" label="Name (Optional)" type="text" style={{ marginRight: 25 }}/> 
                    <TextField name="entry.217739706" id="email" label="Email (Optional)" type="email" /><br /><br />

                    <label>May we reach out to you about your feedback?</label><br />
                    <RadioGroup name="entry.324300712" id="test" value={value} onChange={handleChange} row>
                      <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                    </RadioGroup>
        
                    <br />
                    <br />

                    <label>In what context do you find yourself using this app?</label><br />
                    <TextField name="entry.667358521" id="q1" label="Feedback" type="text"
                    style={{display: 'flex', maxWidth: '550px'}} multiline/><br /><br />

                    <label>What information from this app do you find most valuable?</label><br />
                    <TextField name="entry.1924495588" id="q2" label="Feedback" type="text"
                    style={{display: 'flex', maxWidth: '550px'}} multiline/><br /><br />

                    <label>What features did you expect this app to have that it is currently missing?</label><br />
                    <TextField name="entry.870162535" id="q3" label="Feedback" type="text"
                    style={{display: 'flex', maxWidth: '550px'}} multiline/><br /><br />

                    <label>How difficult is it for you to navigate through the app?</label><br />
                    <TextField name="entry.952911278" id="q4" label="Feedback" type="text"
                    style={{display: 'flex', maxWidth: '550px'}} multiline/><br /><br />

                    <label>What frustrations do you have when using this app?</label><br />
                    <TextField name="entry.113005119" id="q5" label="Feedback" type="text"
                    style={{display: 'flex', maxWidth: '550px'}} multiline/><br /><br />

                    <label>Is there anything else you would like to share with us?</label><br />
                    <TextField name="entry.1558581568" id="q6" label="Feedback" type="text"
                    style={{display: 'flex', maxWidth: '550px'}} multiline/><br /><br />

                    <Button color="primary" variant="contained" type="submit" value="Send">Send</Button>

                </form>
                
                <br />
                <div id="success" style={{display: "none"}}> Your feedback has been received. Thank you! </div>
            </Typography>
        </div>);
}

export default Feedback;
