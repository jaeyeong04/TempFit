export function setBaseTime(hour, minute) {
  if (minute < 45) {
    hour = hour - 1;
  }

  if (hour < 0) {
    hour = 23;
  }

  const formattedHour = hour < 10 ? "0" + hour : hour;
  return formattedHour + "30";
}
