function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekIndex = date.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];
  return dayOfWeek;
}

function getCurrentDayOfWeek() {
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  const dayOfWeek = getDayOfWeek(currentDateString);
  return dayOfWeek;
}

// For Task a
const inputDate = '2023-06-30';
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek); // Output: "Friday"

// For Task b
const currentDayOfWeek = getCurrentDayOfWeek();
console.log(currentDayOfWeek); // Output: "Tuesday" 
