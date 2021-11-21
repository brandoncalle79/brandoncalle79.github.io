const botonMenu = document.querySelector(".menu");
const ulContenedor = document.querySelector(".lista");

botonMenu.addEventListener("click", () => {
  ulContenedor.classList.toggle("visible");
});