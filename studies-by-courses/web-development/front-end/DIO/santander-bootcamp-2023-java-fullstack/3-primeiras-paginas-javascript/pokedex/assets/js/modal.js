let modalContainer = document.getElementById("my-modal");
let modalDetailsContainer = document.getElementById("modalContent");

function openModal() {
  modalContainer.style.display = "block";
  modalDetailsContainer.style.display = "flex";

  setTimeout(() => {
    document.addEventListener("click", handleClickOutside, false);
  }, 200);
}

function closeModal() {
  modalContainer.style.display = "none";
}

function handleClickOutside(event) {
  let overlay = document.getElementById("my-modal");
  let modal = document.getElementById("modalContent");
  if (!modal.contains(event.target)) {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.removeEventListener("click", handleClickOutside, false);
  }
}
