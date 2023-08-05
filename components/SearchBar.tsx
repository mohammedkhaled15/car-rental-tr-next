"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  console.log(manufacturer);
  const handleSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          setManufacturer={setManufacturer}
          manufacturer={manufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
