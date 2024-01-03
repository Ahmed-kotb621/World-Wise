import CountryItem from "./CountryItem";
import style from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
function CityList({ cities, isLoading }) {
  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="start add your first city from map !" />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={style.countryList}>
      {countries.map((city) => (
        <CountryItem country={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
