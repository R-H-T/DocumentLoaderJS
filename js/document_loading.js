// Loading a HTML-document into another document – Pure JS(ES6) Style 2018-02-10
// ©2018 – By Roberth Hansson-Tornéus (https://github.com/R-H-T) - (MIT)
(() => {
	// Configuration
	const filePath = './_embedded_content.html';
	const view = document.createElement('div');
	const viewId = 'container'
	view.id = viewId;

	const updateView = (text) => requestAnimationFrame(() => {			
		document.getElementById(viewId).innerHTML = text;
	});

	const handleResponse = (response) => {
		if (response.status !== 200) {
			console.log(`Could not import file. Received status code: ${response.status}`);
		}
		return response.text();
	}

	const loadDocument = (path) => fetch(path).then(handleResponse);

	// Append view to document.body
	document.body.appendChild(view);

	// Load document
	loadDocument(filePath)
	.then(updateView)
	.catch((error) => {
			console.log('Failed to read content', error);
	});
})();
