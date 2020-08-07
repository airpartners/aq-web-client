This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
  - [`npm run deploy`](#npm-run-deploy)
- [Firebase Hosting](#firebase-hosting)
  - [Install the Firebase CLI](#install-the-firebase-cli)
  - [Login to Firebase](#login-to-firebase)
  - [Initialize Firebase and Configure Your Project](#initialize-firebase-and-configure-your-project)
  - [Deploy to Firebase](#deploy-to-firebase)
- [GitHub Workflows](#github-workflows)
  - [Continuous integration (CI)](#continuous-integration-ci)
  - [Continuous deployment (CD)](#continuous-deployment-cd)
- [Learn More](#learn-more)
  - [Code Splitting](#code-splitting)
  - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
  - [Making a Progressive Web App](#making-a-progressive-web-app)
  - [Advanced Configuration](#advanced-configuration)
  - [Deployment](#deployment)
  - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

Builds the app and pushes it to the gh-pages branch. The build is hosted at the aq-web-client [project page](https://airpartners.github.io/aq-web-client) of the [airpartners organization github pages site](https://airpartners.github.io).

When setting up GitHub pages hosting, it was necessary to add a homepage field to our `package.json`.

```
{
  "homepage": "http://airpartners.github.io/aq-web-client",
  "name": "aq-web-client",
  "version": "0.1.0",
  "private": true,
  ...
```

However, that field has to be removed for the `firebase deploy` to work properly. One of the benefits of Firebase hosting is that we have the option to route all urls to our index.html which GitHub pages doesn't support so direct url access doesn't work on our GitHub pages site because we use a single page React app with react-router-dom.

## Firebase Hosting

Refer to the [Firebase quick-start guide for hosting](https://firebase.google.com/docs/hosting/quickstart) and [this medium article](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425) which is specific to React apps. Here is a synopsis:

### [Install the Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli)

`npm install -g firebase-tools`

### Login to Firebase

`firebase login`

You'll need to use the adeairquality@gmail.com login because that account owns our Firebase project.

### Initialize Firebase and Configure Your Project

**NOTE: you can skip this section since the config files are already tracked in git, however, if you need to overwrite it (e.g. to link to a different project), delete `firebase.json` and `.firebaserc` first**

`cd path/to/your/local/aq-web-client`<br />
`firebase init`

You'll be prompted with a series of questions:

1. Select "Hosting: Configure and deploy Firebase Hosting sites." NOTE: you can always run `firebase init` again later and add other services.
2. Select "Use and existing project" and choose "airpartners-ade"
3. Your public directory is `build`
4. Yes you want to configure as a single-page app (rewrite all urls to /index.html)
5. Don't overwrite your build/index.html file (if you accidentally do it's okay, you'll just need to execute `npm run build` again before deploying.


### Deploy to Firebase

**NOTE: `firebase deploy` does not execute `npm run build` so if you've made changes you need to first execute `npm run build`.**

`firebase deploy`

You'll get a command line printout that tells you at which urls it's being hosted. By default these should be: [https://airpartners-ade.web.app/](https://airpartners-ade.web.app/) and [https://airpartners-ade.firebaseapp.com/](https://airpartners-ade.firebaseapp.com/).

When setting up GitHub pages hosting, it was necessary to add a homepage field to our `package.json`.

```
{
  "homepage": "http://airpartners.github.io/aq-web-client",
  "name": "aq-web-client",
  "version": "0.1.0",
  "private": true,
  ...
```

However, that field has to be removed for the `firebase deploy` to work properly. One of the benefits of Firebase hosting is that we have the option to route all urls to our index.html which GitHub pages doesn't support so direct url access doesn't work on our GitHub pages site because we use a single page React app with react-router-dom.

## GitHub Workflows

Go to the [Actions tab of this repository](https://github.com/airpartners/aq-web-client/actions) to see all current and previous jobs, logs, and statuses.

It is highly recommended to run `npm test`, `npm start` (without any lint warnings or errors) and `npm run build`, before pushing to any branch. Otherwise, CI/CD workflows may fail unexpectedly causing you to add a fixing commit.

### Continuous integration (CI)

Although unit tests will run automatically, it's still important to do manual testing using `npm start` to run the application locally. Make sure there are no lint warnings or errors otherwise the GitHub workflow will fail. Use `// eslint-disable-next-line` to suppress warnings or errors sparingly. See this Goooooooooogle Doc for more detailed manual testing instructions.

Any time a push is made to a feature branch, the GitHub workflow at `./.github/workflows/feature.yml` will run. After installing dependencies, it will run `npm test` and `npm run build` (which runs the linter also). Any issues will cause a failure and prevent merging a pull request to master without using admin privileges to override this check. To view and/or edit these branch protection settings go to [Setting > Branches](https://github.com/airpartners/aq-web-client/settings/branches).

### Continuous deployment (CD)

After any push to master (except changes that only affect README.md), the GitHub workflow at `./.github/workflows/main.yml` will run. After installing dependencies, it will run `npm test`. Any issues will cause a failure and the changes will not be deployed. It will then build and deploy the project to Firebase hosting.

Initial setup for GitHub workflows was based on [this article](https://blog.logrocket.com/setting-up-continuous-deployment-with-react-firebase-and-github-actions/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
