import React from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const {setSearchTheme} = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const serchValue = e.target.elements.serch.value ;
    console.log('serchValue : ', serchValue);
    if (!serchValue) return;
    setSearchTheme(serchValue);
  }

  return (
    <section>
      <h1 className="title">Unsplace Image</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input serch-input"
          placeholder="Search for images..."
          name="serch"
        />
        <button className="btn" type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
