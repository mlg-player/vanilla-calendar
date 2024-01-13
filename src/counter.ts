import getDaysOfMonth from "./calendar";

const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function handlePrevMonth() {
  month -= 1;

  if (month < 0) {
    month = 11;
    year -= 1;
  }

  setupCalendar(document.getElementById("calendar")!);
}

function handleNextMonth() {
  month += 1;

  if (month > 11) {
    month = 0;
    year += 1;
  }

  setupCalendar(document.getElementById("calendar")!);
}


export function setupCalendar(element: HTMLElement) {
  element.innerHTML = "";

  const days = getDaysOfMonth(month, year);
  const calendar = document.createElement("div");

  calendar.className = "calendar";
  calendar.innerHTML = `
    <div class="calendar-header">
    </div>
    <div class="calendar-body">
      <div class="calendar-weeks">
        <div class="calendar-week">Mon</div>
        <div class="calendar-week">Tue</div>
        <div class="calendar-week">Wed</div>
        <div class="calendar-week">Thu</div>
        <div class="calendar-week">Fri</div>
        <div class="calendar-week">Sat</div>
        <div class="calendar-week">Sun</div>
      </div>
      <div class="calendar-days"></div>
    </div>
  `;

  const daysElement = calendar.querySelector(".calendar-days");
  const calendarHeaderElement = calendar.querySelector(".calendar-header");

  if (calendarHeaderElement) {
    calendarHeaderElement.innerHTML = `
      <button class="calendar-prev-month">Prev</button>
      <div class="calendar-month-year">${month + 1}/${year}</div>
      <button class="calendar-next-month">Next</button>
    `;

    const prevMonthButton = calendarHeaderElement.querySelector(
      ".calendar-prev-month"
    );
    const nextMonthButton = calendarHeaderElement.querySelector(
      ".calendar-next-month"
    );

    if (prevMonthButton) {
      prevMonthButton.addEventListener("click", handlePrevMonth);
    }

    if (nextMonthButton) {
      nextMonthButton.addEventListener("click", handleNextMonth);
    }
  }
  
  
  if (daysElement) {
    days.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.innerHTML = day.getDate().toString();

      daysElement.appendChild(dayElement);
    });
  }

  element.appendChild(calendar);
}

console.log(getDaysOfMonth(2, 2024));
