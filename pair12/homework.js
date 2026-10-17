let courses = [
    { id: 1, title: "JavaScript", category: "Програмування", price: 1200, duration: 40, rating: 4.8, available: true },
    { id: 2, title: "HTML", category: "Програмування", price: 800, duration: 25, rating: 4.5, available: true },
    { id: 3, title: "CSS", category: "Програмування", price: 2500, duration: 60, rating: 4.9, available: false },
    { id: 4, title: "UI/UX", category: "Дизайн", price: 1500, duration: 35, rating: 4.7, available: true },
    { id: 5, title: "Backend", category: "Програмування", price: 2200, duration: 50, rating: 4.6, available: true },
    { id: 6, title: "Графічний дизайн", category: "Дизайн", price: 950, duration: 20, rating: 4.2, available: false },
    { id: 7, title: "Vue + JS", category: "Програмування", price: 1100, duration: 30, rating: 4.4, available: true },
    { id: 8, title: "Python", category: "Програмування", price: 1800, duration: 45, rating: 4.8, available: true }
];

function getCourseById(id) {
    return courses.find(course => course.id === id);
}

function getCoursesByCategory(category) {
    return courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
}

function getCoursesByPrice(maxPrice) {
    return courses.filter(course => course.price <= maxPrice);
}

function searchCourses(title) {
    return courses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
}

function getCourseTitles() {
    return courses.map(course => course.title);
}

function getCoursesWithDiscount() {
    return courses.map(course => ({
        title: course.title,
        price: course.price * 0.85
    }));
}

function sortByPriceAsc() {
    return [...courses].sort((a, b) => a.price - b.price);
}

function sortByRatingDesc() {
    return [...courses].sort((a, b) => b.rating - a.rating);
}

function sortByTitle() {
    return [...courses].sort((a, b) => a.title.localeCompare(b.title));
}

function getCoursesStats() {
    let activeCourse = courses.filter(course => course.available === true);
    let totalPrice = 0;
    for (let course of activeCourse) {
        totalPrice += course.price;
    }
    let averagePrice = totalPrice / activeCourse.length;
    return {
        total: totalPrice,
        average: averagePrice
    };
}

let isRunning = true;

do {
    let menu = +prompt(
        "Оберіть дію:\n" +
        "1. Пошук курсу за id\n" +
        "2. Курси вибраної категорії\n" +
        "3. Пошук за максимальною ціною\n" +
        "4. Пошук за назвою\n" +
        "5. Список лише з назвами курсів\n" +
        "6. Назва та ціна зі знижкою 15%\n" +
        "7. Сортування за зростанням вартості\n" +
        "8. Сортування за спаданням рейтингу\n" +
        "9. Сортування за назвою в алфавітному порядку\n" +
        "10. Загальна та середня вартість доступних курсів\n" +
        "0. Вихід"
    );

    if (menu === 1) {
        let idCourse = +prompt("Введіть id");
        let found = getCourseById(idCourse);
        if (found !== undefined) {
            alert(`${found.title} - ${found.price} грн`);
        } else {
            alert("Немає");
        }
    } else if (menu === 2) {
        let category = prompt("Введіть категорію");
        let result = getCoursesByCategory(category);
        if (result.length > 0) {
            let text = result.map(course => `${course.title} - ${course.price} грн`);
            alert(text);
        } else {
            alert("Не знайдено");
        }
    } else if (menu === 3) {
        let maxPrice = +prompt("Введіть максимальну суму");
        let result = getCoursesByPrice(maxPrice);
        if (result.length > 0) {
            let text = result.map(course => `${course.title} - ${course.price} грн`);
            alert(text);
        } else {
            alert("Не знайдено");
        }
    } else if (menu === 4) {
        let searchTitle = prompt("Введіть частину назви");
        let result = searchCourses(searchTitle);
        if (result.length > 0) {
            let text = result.map(course => `${course.title} - ${course.price} грн`);
            alert(text);
        } else {
            alert("Не знайдено");
        }
    } else if (menu === 5) {
        let titleCourse = getCourseTitles();
        alert(titleCourse);
    } else if (menu === 6) {
        let priceCourse = getCoursesWithDiscount();
        let text = priceCourse.map(course => `${course.title} - ${course.price} грн`);
        alert(text);
    } else if (menu === 7) {
        let lowerUpper = sortByPriceAsc();
        let text = lowerUpper.map(course => `${course.title} - ${course.price} грн`);
        alert(text);
    } else if (menu === 8) {
        let sorted = sortByRatingDesc();
        let text = sorted.map(course => `${course.title} - рейтинг: ${course.rating}`);
        alert(text);
    } else if (menu === 9) {
        let sorted = sortByTitle();
        let text = sorted.map(course => course.title);
        alert(text);
    } else if (menu === 10) {
        let stats = getCoursesStats();
        alert(`Загальна вартість: ${stats.total} грн\nСередня вартість: ${stats.average} грн`);
    } else if (menu === 0 || menu === null) {
        break;
    } else {
        alert("Нема такого");
    }

    isRunning = confirm("Бажаєте продовжити роботу?");
} while (isRunning);

alert("Роботу завершено, гарного дня");