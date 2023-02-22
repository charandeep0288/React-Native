export function getFormattedDate(date) {
  // .getMonth() with yield "0" for January, "1" for February and so on.
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
