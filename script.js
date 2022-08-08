// ngubah angka rgb

const rT = document.querySelector('.h41');
const gT = document.querySelector('.h42');
const bT = document.querySelector('.h43');

// rgb

rT.innerHTML = 'R = 128';
gT.innerHTML = 'G = 128';
bT.innerHTML = 'B = 128';

// merah

const geserM = document.querySelector('input[name = merah]');

geserM.addEventListener('input', function() {
	warna();
	rT.innerHTML = 'R = '+geserM.value+'';
});

// ijo

const geserH = document.querySelector('input[name = hijau]');

geserH.addEventListener('input', function() {
	warna();
	gT.innerHTML = 'G = '+geserH.value+'';
});

// biru

const geserB = document.querySelector('input[name = biru]');

geserB.addEventListener('input', function() {
	warna();
	bT.innerHTML = 'B = '+geserB.value+'';
});

// hasil warna

function warna () {
	const selek = document.querySelector('.selek');
	const r = geserM.value;
	const g = geserH.value;
	const b = geserB.value;
	selek.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

// button dan hasil

const tombol = document.querySelector('button');
const h1 = document.querySelector('h1');

tombol.onclick = function () {
	const r = geserM.value;
	const g = geserH.value;
	const b = geserB.value;
	h1.style.color = 'rgb('+r+','+g+','+b+')';
}