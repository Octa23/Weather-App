import React from "react";
import { debounce } from "lodash";
import { setResults } from "../redux/slice/searchSlice";
import { useDispatch } from "react-redux";

const useSearch = () => {
  const dispatch = useDispatch();
  async function Search(search: string) {
    if (search.trim()) {
      const response = await fetch(
        "https://api.weatherapi.com/v1/search.json?key=2804487f1b9d43bcaac133740220508&q=" +
          search
      );
      const body = await response.json();
      dispatch(setResults(body));
      return body;
    }
    return;
  }

  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      setResults(await Search(criteria));
    }, 1000)
  ).current;

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  return { handleSearch };
};

export default useSearch;
