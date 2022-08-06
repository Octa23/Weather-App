const getDate = (date: string) => {
  const month = [
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
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date(date);
  const monthName = month[today.getMonth()];
  const dayName = daysOfWeek[today.getDay()];
  const day = today.getDate();

  const time = today.toLocaleTimeString().slice(0, 8 - 3);
  const dateString = `${dayName}, ${day} ${monthName} `;
  return { dateString, time };
};

export default getDate;
