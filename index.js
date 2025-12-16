const btn = document.getElementById("pick-btn");
const display = document.getElementById("student-display");
const card = document.querySelector(".card-wrapper");

btn.addEventListener("click", () => {
    btn.disabled = true;
    btn.classList.add("loading");
    card.classList.add("loading");
    card.classList.remove("active");

    fetch("http://localhost:1717/students")
        .then(res => res.json())
        .then(data => {
            card.classList.remove("loading");
            card.classList.add("active");
            display.innerHTML = `<h2 class="student-name">${data.name}</h2>`;
            btn.disabled = false;
            btn.classList.remove("loading");
        })
        .catch(err => console.log(err));
});
