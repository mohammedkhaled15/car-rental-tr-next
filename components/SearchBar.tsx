"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  <button type="button" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"magnifying-glass.svg"}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>;
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          setManufacturer={setManufacturer}
          manufacturer={manufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input type="text" name="model" value={model} />
      </div>
    </form>
  );
};

export default SearchBar;
