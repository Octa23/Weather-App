import React from "react";
import { debounce } from "lodash";
import { setResults, setLoading } from "../redux/slice/searchSlice";
import { useDispatch } from "react-redux";

const useSearch = () => {
  const dispatch = useDispatch();
  async function Search(search: string) {
    const key = import.meta.env.VITE_API_KEY;
    if (search.trim()) {
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${key}&q=${search}`
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
    if (e.target.value.length >= 3) {
      dispatch(setLoading());
      debouncedSearch(e.target.value);
    }
  }

  return { handleSearch };
};

export default useSearch;
