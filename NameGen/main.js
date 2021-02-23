const vowels = ['a', 'e', 'ee', 'i', 'o', 'ou', 'u', 'y', 'ay', 'ey', 'ui',];
const consonants = ['b', 'bb', 'c', 'ch', 'cl', 'cr', 'd', 'dd', 'f', 'ff', 'fl', 'g', 'gg', 'gl', 'gr', 'h', 'j', 'k', 'kl', 'kr', 'l', 'm', 'n', 'p', 'pl', 'pr', 'q', 'r', 's', 'sc', 'sr', 'st', 't', 'tr', 'v', 'vr', 'w', 'z', 'zr',];

async function onLoad() {
	const names = document.getElementById('name-table');
	let html = '';
	for (let i = 0; i < 80; i++) {
		html += `<tr>`;
		let word = '';
		if (Math.random() < 0.5) {
			word += vowels[Math.floor(Math.random() * vowels.length)];
		}
		const n = 2 + Math.floor(Math.random() * 2);
		for (let j = 0; j < n; j++) {
			word += consonants[Math.floor(Math.random() * consonants.length)];
			word += vowels[Math.floor(Math.random() * vowels.length)];
		}
		html += `<td>${word}</td>`;
		// const request = new XMLHttpRequest();

		// request.onreadystatechange = function (event) {
		// 	console.log('onreadystatechange ', event);
		// 	console.log('onreadystatechange readyState ', this.readyState);
		// 	console.log('onreadystatechange status', this.status);
		// };

		// request.onprogress = event => {
		// 	const status = event.target.status;
		// 	const statusFirstNumber = status.toString()[0];
		// 	switch (statusFirstNumber) {
		// 		case '2':
		// 			request.abort();
		// 			return callback(word, true);
		// 		default:
		// 			request.abort();
		// 			return callback(word, false);
		// 	};
		// };

		// request.open('GET', `https://www.${word}.com`, true);
		// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		// request.setRequestHeader('Accept', '*/*');

		// request.onreadystatechange = function () {
		// 	console.log('onreadystatechange ', request);
		// };
		// request.send();

		// function callback(word, isUrlTaken) {
		// 	console.log(isUrlTaken);
		// 	// html += `<td>nope</td>`;
		// }
		html += `</tr>`;
	}
	names.innerHTML = html;
}
