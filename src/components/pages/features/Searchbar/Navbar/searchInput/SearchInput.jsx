import React from "react";
import { searchByTerm, setTerm } from "../../searchbarSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const SearchInput = () => {
  const dispatch = useDispatch();
  let term;
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTerm(term));
    dispatch(searchByTerm(term));
    history.push("/results");
  };
  const handleChange = (e) => {
    term = e.target.value;
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
        required
        onChange={(e) => handleChange(e)}
      />
      <i className="material-icons">search</i>
    </form>
  );
};

export default SearchInput;
