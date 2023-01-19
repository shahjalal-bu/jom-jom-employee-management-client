const DateFormat = (d) => {
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let month = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  return `${day} ${month} ${year}`;
};

export default DateFormat;
