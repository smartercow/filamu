import React, { useState } from "react";
import Select from "react-select";
import { HeroIcon } from "../ui/hero-icon";

type IOption = {
  value: string;
  label: string;
};

const media = [
  { value: "movies", label: "MOVIES" },
  { value: "series", label: "SERIES" },
  { value: "tvshows", label: "TV SHOWS" },
  { value: "celebrities", label: "CELEBRITIES" },
];

export default function Search(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState(media[0]);

  const handleOnChange = (option: IOption | null) => {
    if (option) {
      setSelectedOption(option);
    }
  };

  return (
    <div className="search-border mb-5 flex items-center gap-[0.15rem] border-4 border-main-darkblue bg-[#0b2540]">
      <div className="hidden h-10 w-40 md:inline-flex">
        <Select
          defaultValue={selectedOption}
          onChange={handleOnChange}
          className="w-full"
          instanceId="home-search"
          options={media}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            control: (base) => ({
              ...base,
              border: 0,
              boxShadow: "#dcf836",
              height: "2.5rem",
              background: "#233a50",
              borderRadius: "none",
            }),
            valueContainer: (provided) => ({
              ...provided,
              background: "#233a50",
              color: "#abb7c4",
              fontWeight: 400,
            }),
            menu: (provided) => ({ ...provided, zIndex: 9999 }),
            singleValue: (provided) => ({ ...provided, color: "white" }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#dd003f" : "#020d18",
              color: "white",
              ":active": {
                backgroundColor: "#dd003fcb",
              },
            }),
          }}
        />
      </div>
      <div className="flex h-full w-full items-center bg-main-blue pr-2">
        <input
          aria-label="Search"
          className="h-8 w-full bg-main-blue px-2 text-sm text-main-gray placeholder-main-gray focus:outline-none md:h-10  md:px-3"
          height="2.5rem"
          placeholder="Search for movies, series or tv shows that you are looking for"
        />
        <HeroIcon iconName="MagnifyingGlassIcon" className="h-4 md:h-6" />
      </div>
    </div>
  );
}
