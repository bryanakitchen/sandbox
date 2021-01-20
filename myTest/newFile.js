// const vscode = require('vscode-test');

const asciify = require('asciify-image');

const options = {
	fit:    'box',
	width:  50,
	height: 50
  }

  const getImage = () => {
      return asciify('./henry.png', options);
  }

  getImage().then(console.log);
  module.exports = { getImage }