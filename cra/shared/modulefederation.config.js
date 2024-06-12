const { dependencies } = require('./package.json');

module.exports = {
  name: 'shared',
  exposes: {
    './Button': './src/Button', 
    './Header' : './src/Header' ,
     './Footer' : './src/Footer'
  },
  filename: 'sharedEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};


