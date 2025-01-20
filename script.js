let dt = new Date();
let events = {}; // Store events in an object

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
            days += `<div class="today" onclick="selectDate(${i})">${i}</div>`;
        } else {
            days += `<div onclick="selectDate(${i})">${i}</div>`;
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

function addEvent() {
    const eventName = document.getElementById("eventName").value;
    const selectedDate = dt.toDateString();

    if (!events[selectedDate]) {
        events[selectedDate] = [];
    }
    events[selectedDate].push(eventName);

    updateEventList();
    document.getElementById("eventName").value = ""; // Clear input after adding
}

function updateEventList() {
    const eventList = document.getElementById("eventList");
    const selectedDate = dt.toDateString();
    eventList.innerHTML = ""; // Clear the list before updating

    if (events[selectedDate]) {
        events[selectedDate].forEach(event => {
            const li = document.createElement("li");
            li.innerText = event;
            eventList.appendChild(li);
        });
    }
}

function selectDate(day) {
    dt.setDate(day);
    updateEventList(); // Show events for the selected date
    renderDate(); // Re-render the calendar
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Initial render
renderDate();
