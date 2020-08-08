import React from "react";

export default function SearchForm(props) {
  const { handleInput } = props;

  return (
    <form className="searchForm">
      <input placeholder="search for plants" onChange={handleInput} />
    </form>
  );
}
