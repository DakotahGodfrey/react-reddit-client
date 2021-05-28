import React, { useState, useEffect } from "react";
import { searchByTerm, setTerm, selectSearch } from "../../searchbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import useDebounce from "../../../../../hooks/useDebounce";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const { term } = search;
  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setTerm(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/results?search=${term}`);
    // dispatch(searchByTerm(term));
  };
  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        aria-label="Search Reddit"
        name="search"
        id="search"
        placeholder="Search"
        data-testid="search"
        onChange={(e) => handleChange(e)}
        required
      />
      <i className="material-icons">search</i>
    </form>
  );
};

export default SearchInput;
