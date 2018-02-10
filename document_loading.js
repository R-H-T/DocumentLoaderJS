// Loading a HTML-document into another document – Pure JS(ES6) Style
// 2018-02-10 – By Roberth Hansson-Tornéus
(() => {
	const filePath = './_embedded_content.html';
	const htmlContainer = document.createElement('div');
	htmlContainer.id = "container";

	// Add to document
	document.body.appendChild(htmlContainer);

	// Using fetch as a backup plan.
	fetch(filePath).then((response) => {
			if (response.status !== 200) {
				console.log(`Could not import file. Received status code: ${ response.status }`);
			}
			return response.text();
	}).then((htmlContent) => {
				requestAnimationFrame(() => {
					document.querySelector('#container').innerHTML = htmlContent;
				});
	}).catch((error) => {
		console.log('Failed to read content', error);
	});
})();
