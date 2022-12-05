import { useState } from "react";
import "./SearchBar.scss";
const SearchBar = ({ handleSubmit }) => {
  const [term, setTerm] = useState("");
  function onFormSubmit(e) {
    e.preventDefault();
    // console.log(e);
    handleSubmit(term);
  }
  function onInputChange(e) {
    setTerm(e.target.value);
  }
  return (
    <div className="search__bar">
      <form onSubmit={onFormSubmit}>
        <label>Search For Images</label>
        <input value={term} onChange={onInputChange} />
        <h5>Confirm searching for: {term}</h5>
      </form>
    </div>
  );
};
export default SearchBar;
