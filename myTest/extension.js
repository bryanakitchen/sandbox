// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { start } = require('repl');
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const hour = (1000 * 60 * 60);
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension is now active!');

	const startTime = new Date();
	const localTime = startTime.toLocaleTimeString();
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('testing.helloWorld', async() => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const buttonChoice = await vscode.window.showInformationMessage(`Hello World from myTest! I am going to see how much I can fit in here. Let us see what happens. Local time is ${localTime}. https://www.youtube.com/watch?v=OhfOcqSU62g`, 'LINK', 'Got time'); 
		
		setInterval(async() => {
			const endTime = new Date();
			const timeDifference = (endTime - startTime) / 1000;
			vscode.window.showInformationMessage(`You've been coding for ${timeDifference}`);
		}, hour);

		if (buttonChoice === 'Got time'){
			vscode.window.showInformationMessage('Awesome! Let us do it', 'bye');
		} else if (buttonChoice === 'LINK') {
			vscode.env.openExternal(vscode.Uri.parse('https://code.visualstudio.com/api/references/vscode-api'));
		}
	});

	disposable = vscode.commands.registerCommand('myTest.helloTest', function () {
		vscode.env.openExternal(vscode.Uri.parse('https://code.visualstudio.com/api/references/vscode-api'));
	});


	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
