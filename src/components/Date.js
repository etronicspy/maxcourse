import ExactDate from "./ExactDate";

function Date(date) {
  if (date) {
    const month = date.toLocaleString("ru-RU", { month: "long" });
    const day = date.toLocaleString("ru-RU", { day: "2-digit" });
    // const year = date.getFullYear();
    return <div>{day + " " + month /*  + " " + year */}</div>;
  } else return ExactDate();
}

export default Date;
