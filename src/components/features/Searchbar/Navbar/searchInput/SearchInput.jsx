import React from "react";
import { setTerm, selectSearch } from "../../searchbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const SearchInput = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const { term } = search;

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setTerm(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/results?search=${term}`);
  };
  return (
    <form
      className="search-form"
      aria-label="search-form"
      onSubmit={(e) => handleSubmit(e)}
    >
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
