import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={style.mapContainer} onClick={() => navigate("form")}>
      Positon
      {lat},{lng}
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change position
      </button>
    </div>
  );
}

export default Map;
