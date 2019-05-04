# DEMO for a React App bundled with Webpack

## Setting Up Build from Scratch

1. Initialize npm package.json with `npm init -y`.
1. Install necessary dependencies.
    1. Install webpack as a development dependencies with:
        - `npm install webpack --save-dev`
            - webpack core bundler
        - `npm install webpack-cli --save-dev`
            - webpack CLI tool needed for creating run scripts
        - `npm install webpack-dev-server --save-dev`
            - will serve up the bundle as a local environment
        - `npm install html-webpack-plugin --save-dev`
            - helper for creating HTML templates
    1. Install Babel as a development dependency with:
        - `npm install @babel/core --save-dev`
            - main engine of the babel plugin
        - `npm install @babel/preset-env --save-dev`
            - ES5 and ES6 support
        - `npm install @babel/preset-react --save-dev`
            - react presets allowing you to define the use of JSX
        - `npm install babel-loader --save-dev`
            - webpack loader for babel plugin
    1. Install react dependencies with:
        - `npm install react --save`
        - `npm install react-dom --save`

## Getting Started Developing

1. Fork and then clone the repo or download the ZIP file.
1. `npm install`
    - downloads all dependencies needed for the webpack bundling configuration
1. `npm run start`
    - kicks off local development environment and automatically launches a new browser window at port 3000
    - browser will automatically refresh any time there is an update to assets in the src directory for your Javascript

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Will automatically open in your browser on [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.<br>
Optimizes scripts for the production bundle.

The build is minified and you could add hashing if you want to resolve cashing issues.<br>
Your app is ready to be deployed!
