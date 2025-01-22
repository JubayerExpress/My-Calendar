document.addEventListener("DOMContentLoaded", () => {
    const monthYear = document.getElementById("month-year");
    const datesGrid = document.getElementById("dates-grid");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const eventList = document.getElementById("event-list");
    const eventInput = document.getElementById("event-input");
    const addEventBtn = document.getElementById("add-event");
    const selectedDateDisplay = document.getElementById("selected-date");
    const themeToggleBtn = document.getElementById("theme-toggle");
    let selectedDate = null;
    let events = {};

    // Get the current date
    let currentDate = new Date();
    
    function renderCalendar(date) {
        const month = date.getMonth();
        const year = date.getFullYear();

        monthYear.innerText = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        datesGrid.innerHTML = '';

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Render dates
        for (let i = 0; i < firstDay; i++) {
            datesGrid.innerHTML += `<div></div>`;
        }

        for (let i = 1; i <= lastDate; i++) {
            const dateDiv = document.createElement("div");
            dateDiv.textContent = i;
            dateDiv.addEventListener("click", () => selectDate(i));
            datesGrid.appendChild(dateDiv);
        }
    }

    function selectDate(day) {
        selectedDate = `${day}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
        selectedDateDisplay.innerText = selectedDate;

        renderEvents();
    }

    function renderEvents() {
        eventList.innerHTML = '';
        if (events[selectedDate]) {
            events[selectedDate].forEach(event => {
                const li = document.createElement("li");
                li

