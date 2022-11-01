function getDate() {
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
  let date: Date | string = new Date();
  date = `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;

  return date;
}
export default getDate;
