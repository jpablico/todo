import '/src/Styles/style.scss';

const labelAddition = document.getElementsByClassName('labels-addition')[0];

labelAddition.addEventListener('click', (e) => {
	console.log("bop");
});

const toggleElements = document.querySelectorAll('.toggle');
toggleElements.forEach(el => {
  el.addEventListener('click', () => {
    this.classList.toggle('active'); // `this` refers to `Window`
    
  });
});