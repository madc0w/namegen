const vowels = ['a', 'e', 'ee', 'i', 'o', 'ou', 'u', 'y', 'ay', 'ey', 'ui',];
const consonants = ['b', 'bb', 'c', 'ch', 'cl', 'cr', 'd', 'dd', 'f', 'ff', 'fl', 'g', 'gg', 'gl', 'gr', 'h', 'j', 'k', 'kl', 'kr', 'l', 'm', 'n', 'p', 'pl', 'pr', 'q', 'r', 's', 'sc', 'sr', 'st', 't', 'tr', 'v', 'vr', 'w', 'z', 'zr',];

function onLoad() {
	const names = document.getElementById('names');
	let html = '';
	for (let i = 0; i < 100; i++) {
		let word = '';
		const n = 2 + Math.floor(Math.random() * 4);
		for (let j = 0; j < n; j++) {
			word += consonants[Math.floor(Math.random() * consonants.length)];
			word += vowels[Math.floor(Math.random() * vowels.length)];
		}
		html += `<div>${word}</div>`;
	}
	names.innerHTML = html;
}
