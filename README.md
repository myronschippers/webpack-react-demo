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
1. Create a `webpack.config.js` configuration file at the root of your project repository.
1. Add an export of a configuarion object to the `webpack.config.js` for setting the webpack configuration settings.

    ```
    module.exports = {

    };
    ```

1. Add configuration properties for the `entry` and `output` settings.

    ```
    module.exports = {
        entry: './src/App.js',
        output: {
            path: `${__dirname}/build`,
            filename: 'app-bundle.js',
        },
    };
    ```

    1. The `entry` property defines the JS application kickoff file that initializes your entire JS application. For our purposes we are only defining a single entry pout wich will create a single JS bundle.
    1. The `output` property is an object with two property string configurations.
        - The first property is `path` which defines the output directory location for our final JS bundle.
        - The second property is for the `filename` which is a string value for the the physical file name of the outputted  JS bundle.
1. The next property we need to configure is for running the local development environment in our browser. This setting is available because of the `webpack-dev-server` dependency that was loaded in previously.

    ```
    devServer: {
        contentBase: './dist',
        port: PORT,
        hot: true,
    },
    ```

    1. A `PORT` variable is defined at the top of the file with a value of 3000 and we use it for the `devServer` `port` property.
    1. The `contentBase` property is used to define the output folder location for the bundled Javascript.
    1. It's the `hot` property that allows a refresh/reload of our server every time we save a change to our Javascript files.
1. Now we need to update the configuration file to use the `@babel/core` dependency for fully supporting ES5 & ES6 in our Javascript.

    ```
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    ```

    1. For the `test` property we are setting up the file extention types that we want webpack to apply **babel** to.
    1. The `exclude` property does exactly what you would expect and exludes the entered directory from the babel processing.
    1. The `use` property is where we declare the webpack loader dependecy that we installed (`npm install babel-loader --save-dev`).
1. There is also a need to process the HTML file as well as the Javascipt files. For this we installed the `html-webpack-plugin` plugin with npm and now we need to import the npm dependency at the top of our `webpack.config.js` file as `HtmlWebPackPlugin` and then initialize it in the plugins array list. The configuration object we pass to the `HtmlWebPackPlugin` when instantiated defines the HTML file location and the name of the outputted file.

    ```
    plugins: [
        new HtmlWebPackPlugin({
            template: `${__dirname}/public/index.html`,
            filename: `index.html`,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    ```

1. The final configuration were adding creates a source map for our bundled Javascript so that we can easily debug it in the browser.

    ```
    devtool: 'inline-source-map',
    ```

## Adding the Project Application Files

1. Our kickoff file for the JS application is created at `./src/App.js`. With webpacks bundling in place we can now import the `react` and `react-dom` dependencies that we installed on the project and use them to keick off our application.

    ```
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    ```

1. With our react dependencies loaded we can now kick off a simple "Hello World" react appliction

    ```
    class App extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    <h1>Hello World</h1>
                </div>
            );
        }
    }

    ReactDOM.render(<App/>, document.getElementById('appJump'));
    ```

    1. The last line is what physically attaches the application to the DOM so now we need to go over and create the HTML file for the JS to attatch to.

1. At `./public/index.html` we will create the markup file for our web page.

    ```
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <title>React Application</title>
    </head>
    <body>
        <div id="appJump"></div>
    </body>
    </html>
    ```

    1. The `<div>` with an id of **appJump** is the element that out react Javascript will use to render the react aplication. 
    1. In examining the HTML you will notice that there is not a `<script>` tag loading our Javascript to the webpage. This is because webpack will automatically append the `<script>` tag to the HTML `<body>`.


## Getting Started Developing

1. Fork and then clone the repo or download the ZIP file.
1. Run `npm install` from the terminal inside of the repository directory.
    - downloads all dependencies needed for the webpack bundling configuration
1. Run `npm run start` from the terminal.
    - kicks off local development environment and automatically launches a new browser window at port 3000
    - browser will automatically refresh any time there is an update to assets in the src directory for your Javascript

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Will automatically open in your browser on [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
Optimizes scripts for the production bundle.

The build is minified and you could add hashing if you want to resolve cashing issues.<br>
Your app is ready to be deployed!
