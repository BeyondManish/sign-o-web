const sendToButton = document.getElementById('sendToButton');
const backdrop = document.getElementById('backdrop');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');
const cancelButton = document.getElementById('cancelButton');
const sendButton = document.getElementById('sendButton');
const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');

const toggleModal = () => {
  console.log('triggered');
  backdrop.classList.toggle('hidden');
  modal.classList.toggle('hidden');
  modal.classList.toggle('flex');
};

const toggler = () => {
  stopButton.classList.toggle('hidden');
  recordButton.classList.toggle('hidden');
};

const toggleRecordState = () => {
  if (recordButton.innerText == 'Record a video') {
    toggler();
  } else if (stopButton.innerText == 'Stop recording') {
    toggler();
  }
};

recordButton.addEventListener('click', toggleRecordState);
stopButton.addEventListener('click', toggleRecordState);

sendToButton.addEventListener('click', toggleModal);
backdrop.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
