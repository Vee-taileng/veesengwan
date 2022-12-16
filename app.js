const btn = document.querySelector(".toggle-bar");
const linkContainer = document.querySelector(".link-container")

btn.addEventListener("click", () => {
    linkContainer.classList.toggle("show-link");
})