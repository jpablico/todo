import '/src/Styles/style.scss';

const labelAddition = document.getElementsByClassName('labels-addition')[0];
const labelForm = document.getElementsByClassName('label-form')[0];

labelAddition.addEventListener('click', (e) => {
  labelAddition.forEach(el => {
    el.style.display = "none"
  })
});

const toggleElements = document.querySelectorAll('.toggle');
toggleElements.forEach(el => {
  el.addEventListener('click', () => {
    this.classList.toggle('active'); // `this` refers to `Window`
    
  });
});