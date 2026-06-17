const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

export const formateDate = (date) => date.toLocaleString("ru-RU", options);
