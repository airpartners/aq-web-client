import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { deviceList } from "./Utils";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Colors from "./assets/Colors";
import ContentContainer from "./ContentContainer";
import * as firebase from "firebase/app";


// Create our own theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: Colors.primaryColor,
        },
    }
},
)

function App(props) {
    const { t } = props;

    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/:path/:subPath`}>
                    <ContentContainer t={t} />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/:path`}>
                    <ContentContainer t={t} />
                </Route>
                {/* Redirects all routes that don't match the pattern above */}
                <Route path="/">
                    <Redirect to={`${process.env.PUBLIC_URL}/${deviceList[0]}/${t('Routes.Home')}`} />
                </Route>
            </Switch>
        </MuiThemeProvider>
    );
}

export default withNamespaces()(App);
