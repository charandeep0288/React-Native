export function getFormattedDate(date) {
  // .getMonth() with yield "0" for January, "1" for February and so on.
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
