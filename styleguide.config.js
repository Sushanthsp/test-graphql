module.exports = {
  title: 'My Component Library', // The title of your styleguide
  components: 'components/**/*.js', // The path to your components
  webpackConfig: {
    module: {
      rules: [
        // Add any necessary loaders and configurations for your components
        // For example, if you're using Babel, you can add a Babel loader
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
};
