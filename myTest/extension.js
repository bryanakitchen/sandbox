// const vscode = require('vscode-test');
const vscode = require('vscode');

function activate(context) {
	const hour = (1000 * 60 * 60);
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension is now active!');

	const startTime = new Date();
	const localTime = startTime.toLocaleTimeString();
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('myTest.helloWorld', async() => {

		// const image = await getImage();
		const buttonChoice = await vscode.window.showInformationMessage(`Hello World from myTest! Let us see what happens. Local time is ${localTime}. `, 'LINK', 'Got time'); 
		
		setInterval(async() => {
			const endTime = new Date();
			const timeDifference = (endTime - startTime) / 1000;
			vscode.window.showInformationMessage(`You've been coding for ${timeDifference}`);
		}, hour);

		if (buttonChoice === 'Got time'){
			vscode.window.showInformationMessage('Awesome! Let us do it', { modal: true });
		} else if (buttonChoice === 'LINK') {
			vscode.env.openExternal(vscode.Uri.parse('https://www.alchemycodelab.com/'));
		}
	});

	disposable = vscode.commands.registerCommand('myTest.helloTest', function () {
		vscode.env.openExternal(vscode.Uri.parse('https://www.alchemycodelab.com/'));
	});

	let panel = vscode.window.createWebviewPanel('video', 'Here is the video', vscode.ViewColumn.One, { enableScripts: true	})
	// enableScripts added
	
	panel.webview.html = getWebviewContent();


	context.subscriptions.push(panel);
	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
    <html lang="en">
    <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Move your body</title>
    </head>
    <body>

	  <iframe width="600" height="400" src="https://www.youtube.com/embed/r2WkhWACuNc?autoplay=1&mute=1" sandbox="allow-scripts"></iframe>
	  <br/>
	  <iframe width="600" height="400" src="https://www.youtube.com/embed/r2WkhWACuNc?autoplay=1&mute=1"></iframe>

	</body>

	</html>`;
	}
	
	// DO WE NEED A SCRIPT TAG?

	// <img src="https://media.giphy.com/media/R0QUlihXieN9a1e0oO/source.gif" width="300" /><br/>
	// This is how you do a jumping jack.
	// <br/>

	// <iframe width="600" height="400" src="https://youtu.be/r2WkhWACuNc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
