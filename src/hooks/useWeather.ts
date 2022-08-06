import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeatherInfo } from "../redux/slice/weatherSlice";

const useWeather = () => {
  const dispatch = useDispatch();

  const { location } = useSelector(
    (state: any) => state.weather.selectedWeather
  );

  const fetchData = (city: String) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2804487f1b9d43bcaac133740220508&q=${city}&days=5`
    )
      .then((res) => res.json())
      .then((data) => dispatch(setWeatherInfo(data)));
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
