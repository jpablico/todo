const labelAddition = document.getElementsByClassName('labels-addition')[0];

addEventListener('click', (e) => {
	console.log("bop");
});

labelAddition.addEventListener('click', (e) => {
	labelAddition.forEach(el => {
		el.style.display = "none"
	})
});

const toggleElements = document.querySelectorAll('.toggle');
toggleElements.forEach(el => {
	el.addEventListener('click', () => {
		el.classList.toggle('active'); // `this` refers to `Window`
		
	});
});

