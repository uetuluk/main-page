const { join, resolve } = require('path')

module.exports = ({production}) => {
    const mode = production ? 'development' : 'production'
    const output = production ? '_site/js' : 'js'
    return {
        // webpack folder’s entry js — excluded from jekll’s build process.
        mode,
        entry: join(__dirname, 'webpack', 'main.js'),
        output: {
        // we’re going to put the generated file in the assets folder so jekyll will grab it.
        // if using GitHub Pages, use the following:
        // path: "assets/javascripts"
        path: resolve(__dirname, output),
        filename: "[name].js"
        },
        module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader" // "babel-loader" is also a legal name to reference
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
        }
    }
  };