import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeatherInfo } from "../redux/slice/weatherSlice";

const useWeather = () => {
  const [selected, setSelected] = useState<string>("London");
  const dispatch = useDispatch();
  
  const { current, location, forecast } = useSelector(
    (state: any) => state.weather.selectedWeather
  );

  const handleSelect = (city: string) => {
    setSelected(city);
  };

  useEffect(() => {
    selected &&
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=2804487f1b9d43bcaac133740220508&q=${selected}&days=5`
      )
        .then((res) => res.json())
        .then((data) => dispatch(setWeatherInfo(data)));
  }, [selected]);

  return { handleSelect };
};

export default useWeather;
