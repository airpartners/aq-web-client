import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { deviceList } from "./Utils";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Colors from "./assets/Colors";
import ContentContainer from "./ContentContainer";
import * as firebase from "firebase/app";
import FirebaseComponent from "./FirebaseComponent";

// Create our own theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: Colors.primaryColor,
        },
        secondary: {
            main: Colors.secondaryColor,
        },
    }
},
)

function App(props) {
    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/:path/:subPath`}>
                    <ContentContainer />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/:path`}>
                    <ContentContainer />
                </Route>
                {/* Redirects all routes that don't match the pattern above */}
                <Route path="/">
                    <Redirect to={`${process.env.PUBLIC_URL}/${deviceList[0]}/Home${useLocation().search}`} />
                </Route>
            </Switch>
            <FirebaseComponent />
        </MuiThemeProvider>
    );
}

export default App;
