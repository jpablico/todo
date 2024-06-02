import '/src/Styles/style.scss';


const labelAdd = document.querySelector('.label-add');
const labelFormText = document.querySelector('.label-name');
const labelCancel = document.querySelector('#label-cancel');
const labelSubmit = document.querySelector('#label-submit');

labelAdd.addEventListener('click', showDialogModal);
labelCancel.addEventListener('click', closeDialogModal);
labelSubmit.addEventListener('click', closeDialogModal);

function showDialogModal() {
  const dialog = document.querySelector('.dialog');
  dialog.showModal();
}

function closeDialogModal() {
  const dialog = document.querySelector('.dialog');
  dialog.close();
}
let allTasks = [];

const addTask = (task) => {
  allTasks.push(task);
}




const addLabel = document.querySelector('.label-add');

addLabel.addEventListener('click', () => {
  console.log('Add button clicked');
});

document.addEventListener('DOMContentLoaded', function() {
  const dialog = document.getElementById('myDialog');
  if (dialog) {
      // Assuming you have a button to show the dialog
      const showDialogButton = document.getElementById('showDialogButton');
      showDialogButton.addEventListener('click', function() {
          dialog.showModal();
      });
  } else {
      console.error('Dialog element not found');
  }
});
