const weeks = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

export const getDayOfWeek = (date: Date) => {
    return weeks[date.getDay()];
};

const getDaysOfMonth = (month: number, year: number) => {
    const days = [];
    const date = new Date(year, month, 1);
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Get days of previous month
    for (let i = firstDayOfMonth.getDay() - 1; i >= 0; i--) {
        days.push(new Date(year, month, -i));
    }
    
    // Get days of current month
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    // Get days of next month
    for (let i = 1; i < 7 - lastDayOfMonth.getDay(); i++) {
        days.push(new Date(year, month + 1, i));
    }

    // Ensure 6 weeks
    while (days.length < 42) {
        days.push(new Date(year, month + 1, days.length - lastDayOfMonth.getDate()));
    }

    return days;
};

export default getDaysOfMonth;