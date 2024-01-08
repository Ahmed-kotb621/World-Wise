import { Link } from "react-router-dom";
import style from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`${style.cityItem} ${
          id === currentCity.id ? style["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={style.emoji}>{emoji}</span>
        <h3 className={style.name}>{cityName}</h3>
        <time className={style.date}>{formatDate(date)}</time>
        <button className={style.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
export default CityItem;
