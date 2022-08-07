import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setWeatherInfo } from "../redux/slice/weatherSlice";

const useWeather = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { location } = useSelector(
    (state: any) => state.weather.selectedWeather
  );

  const fetchData = (city: String) => {
    const key = import.meta.env.VITE_API_KEY;
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5`
    )
      .then((res) => res.json())
      .then((data) => dispatch(setWeatherInfo(data)))
      .then(() => navigate(`/`));
  };

  const handleSelect = (city: string) => {
    location?.name !== city && fetchData(city);
  };

  useEffect(() => {
    !location && fetchData("London");
  }, []);

  return { handleSelect };
};

export default useWeather;
