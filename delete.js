const deleteBtn = document.querySelector(".btn-danger");

deleteBtn.addEventListener("click", function() {
  const card = this.closest(".card");
  card.remove();
});
