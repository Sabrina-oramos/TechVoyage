const successBtn = document.querySelector('.btn-success');

successBtn.onclick = function() {
  const task = this.closest('.card');
  task.classList.add('completed');
};
