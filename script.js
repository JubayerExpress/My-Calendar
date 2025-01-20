let dt = new Date();

function renderDate() {
    dt.setDate(1);
    const today = new Date();
    const monthDays = document.querySelector(".days");

    const endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    const prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();

    const firstDayIndex = dt.getDay();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.getElementById("month").innerText = months[dt.getMonth()];
    document.getElementById("date_str").innerText = today.toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevDate - x + 1}</div>`;
    }

    for (let i = 1; i <= endDate; i++) {
        if (
            i === today.getDate() &&
            dt.getMonth() === today.getMonth() &&
            dt.getFullYear() === today.getFullYear()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    monthDays.innerHTML = days;
}

function moveDate(direction) {
    if (direction === "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else if (direction === "next") {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}

renderDate();

