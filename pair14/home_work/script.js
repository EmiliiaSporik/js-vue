let userName = document.querySelector("#userName");
let welcome = document.querySelector("#welcome");

userName.addEventListener("input", function () {
    let name = userName.value.trim();
    if (name === "") {
        welcome.textContent = "Вітаємо, Гостю!";
    } else {
        welcome.textContent = "Вітаємо, " + name + "!";
    }
});

let saveBtn = document.querySelector("#saveBtn");
let status = document.querySelector("#status");

saveBtn.addEventListener("click", function () {
    status.textContent = "Зміни успішно підтверджено!";
    status.classList.add("success");
});

let themeSelect = document.querySelector("#themeSelect");
let card = document.querySelector("#card");

themeSelect.addEventListener("change", function () {
    if (themeSelect.value === "dark") {
        card.classList.add("dark");
    } else {
        card.classList.remove("dark");
    }
});

let detailBtn = document.querySelector("#detailBtn");
let details = document.querySelector("#details");

detailBtn.addEventListener("click", function () {
    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {
        detailBtn.textContent = "Показати додаткову інформацію";
    } else {
        detailBtn.textContent = "Приховати додаткову інформацію";
    }
});