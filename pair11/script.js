// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: 1840,
//     price: 500,
//     isAvailable: true
// }
// console.log(book);
// console.log(book.title)

// let books = [
//     {id: 1, title: "Кобзар", author: "Тарас Шевченко", year: 1840, price: 500, isAvailable: true},
//     {id: 2, title: "Лісова пісня", author: "Леся Українка", year: 1911, price: 600, isAvailable: true},
//     {id: 3, title: "Тигролови", author: "Іван Багряний", year: 1944, price: 450, isAvailable: false},
//     {id: 4, title: "Місто", author: "Валер'ян Підмогильний", year: 1928, price: 550, isAvailable: true},
// ]
// console.log(books);
// console.log(books.length);
// console.log(books[1].author);

// for (let book of books) {
//     console.log(`book ${book.id} - ${book.author}`);
// }
// books.forEach(function (book) {
//     console.log(`book - ${book.author}, ${book.isAvailable}`);
// })

// let isAvailableCount = 0;
// let totalCount = 0;
//
// for (let book of books) {
//     if (book.isAvailable === true) {
//         isAvailableCount++;
//         totalCount += book.price;
//     }
// }
// console.log(totalCount);
// console.log(isAvailableCount);
//
// books[1].price = 750;
// console.log(books);
//
// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: 1882,
//     price: 500,
//     isAvailable: false
// })
// console.log(books);
//
// let enterId = +prompt("Enter your book ID");
// let bookFound = null;
// for (let book of books) {
//     if (book.id === enterId) {
//         bookFound = book;
//         break;
//     }
// }
// if (bookFound !== null) {
//     let status = "Немає у наявності";
//     if (bookFound.isAvailable) {
//         let status = "У наявності";
//     }
//     alert(`Книга ${bookFound.title}. Ціна: ${bookFound.price} - ${status}`);
// }
// else {
//     alert("Книжку не знайдено");
// }



//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
let clubs = [
    { id: 1, name: "Програмування", category: "IT", price: 1000, members: 12, active: true },
    { id: 2, name: "Футбол", category: "Спорт", price: 600, members: 18, active: true },
    { id: 3, name: "Малювання", category: "Мистецтво", price: 500, members: 8, active: false },
    { id: 4, name: "Робототехніка", category: "IT", price: 1200, members: 10, active: true },
    { id: 5, name: "Театр", category: "Мистецтво", price: 400, members: 15, active: false }
];

let nextId = 6;

while (true) {
    let choice = prompt(
        "Оберіть дію\n" +
        "1 Показати всі гуртки\n" +
        "2 Знайти гурток за ID\n" +
        "3 Записати учасника\n" +
        "4 Змінити статус набору\n" +
        "5 Додати новий гурток\n" +
        "6 Показати статистику\n" +
        "0 Вихід"
    );

    if (choice === "0" || choice === null) {
        alert("Бай бай");
        break;
    }

    if (choice === "1") {
        if (clubs.length === 0) {
            alert("Список гуртків порожній");
        } else {
            let message = "";
            clubs.forEach(function (club) {
                let status = "Набір закрито";
                if (club.active === true) {
                    status = "Набір відкрито";
                }
                message += `ID ${club.id} ${club.name} ${club.category}; ціна ${club.price} грн; учасників ${club.members}; статус ${status}\n`;
            });
            alert(message);
        }
    } else if (choice === "2") {
        let enterId = +prompt("Введіть ID гуртка");
        let clubFound = null;

        for (let club of clubs) {
            if (club.id === enterId) {
                clubFound = club;
                break;
            }
        }

        if (clubFound !== null) {
            let status = "Набір закрито";
            if (clubFound.active === true) {
                status = "Набір відкрито";
            }
            alert(`Гурток ${clubFound.name}\nНапрям ${clubFound.category}\nЦіна ${clubFound.price} грн\nУчасників ${clubFound.members}\nСтатус ${status}`);
        } else {
            alert("Гурток не знайдено");
        }
    } else if (choice === "3") {
        let enterId = +prompt("Введіть ID гуртка");
        let clubFound = null;

        for (let club of clubs) {
            if (club.id === enterId) {
                clubFound = club;
                break;
            }
        }

        if (clubFound === null) {
            alert("Гурток не знайдено");
        } else if (clubFound.active === false) {
            alert("Набір закрито");
        } else {
            let agree = confirm(`Записати учасника до ${clubFound.name}`);
            if (agree === true) {
                clubFound.members++;
                alert(`Учасника додано, тепер учасників ${clubFound.members}`);
            }
        }
    } else if (choice === "4") {
        let enterId = +prompt("Введіть ID гуртка");
        let clubFound = null;

        for (let club of clubs) {
            if (club.id === enterId) {
                clubFound = club;
                break;
            }
        }

        if (clubFound === null) {
            alert("Гурток не знайдено");
        } else {
            let agree = confirm(`Змінити статус для ${clubFound.name}`);
            if (agree === true) {
                clubFound.active = !clubFound.active;
            }
            alert("Статус змінено");
        }
    } else if (choice === "5") {
        let name = prompt("Введіть назву гуртка");
        let category = prompt("Введіть напрям");
        let price = +prompt("Введіть ціну");
        let members = +prompt("Введіть кількість учасників");

        if (name === "" || name === null || category === "" || category === null) {
            alert("Помилка: поле порожнє");
        } else if (price < 0 || members < 0) {
            alert("Помилка: менше 0");
        } else {
            let active = confirm("Набір відкритий");

            clubs.push({
                id: nextId,
                name: name,
                category: category,
                price: price,
                members: members,
                active: active
            });

            nextId++;
            alert("Новий гурток додано");
        }
    } else if (choice === "6") {
        if (clubs.length === 0) {
            alert("Каталог порожній");
        } else {
            let activeCount = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            for (let club of clubs) {
                if (club.active === true) {
                    activeCount++;
                }
                totalMembers += club.members;
                totalPrice += club.price;
            }

            let avgPrice = totalPrice / clubs.length;

            alert(
                `Всього гуртків: ${clubs.length}\n` +
                `Гуртків з набором: ${activeCount}\n` +
                `Кількість учасників: ${totalMembers}\n` +
                `Середня ціна: ${avgPrice} грн`
            );
        }
    } else {
        alert("Помилка");
    }
}
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐