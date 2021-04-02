const { format, addDays, parse } = require("date-fns");

function addXDays(x) {
  let date = parse("22nd Aug 2020", "do LLL yyyy", new Date());
  date = addDays(date, x);
  return format(date, "dd-MM-yyyy");
}
module.exports = addXDays;
console.log(addXDays(4));
