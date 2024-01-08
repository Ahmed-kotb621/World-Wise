import CityItem from "./CityItem";
import style from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();
  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="start add your first city from map" />;
  return (
    <ul className={style.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
