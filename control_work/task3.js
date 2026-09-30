const correctPin = 2026;
let attempts = 1;

while (attempts <= 3) {
    let pin = +prompt("Введіть PIN-код:");
    console.log("PIN: " + pin);

    if (correctPin === pin) {
        console.log("Доступ дозволено");
        break;
    } else {
        if (attempts > 3) {
            let attemptsLeft = 3 - attempts;
            console.log("Залишилося спроб: " + attemptsLeft);
        } else {
            console.log("Доступ заблоковано");
        }
        attempts++;
    }
}