import React, { useCallback, useState, useEffect } from "react";
import "./styled.scss";

interface Props {
  setSearch: (value: React.SetStateAction<string>) => void;
  searchCount?: number;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export default function Search({
  setSearch,
  searchCount,
  inputValue,
  setInputValue,
}: Props) {
  const [debounceTimeout, setDebounceTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);

      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      const timeout = setTimeout(() => {
        setSearch(value);
      }, 500);

      setDebounceTimeout(timeout);
    },
    [debounceTimeout, setSearch, setInputValue],
  );

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setSearch(""); // clear search on Escape key
      setInputValue(""); // clear input value as well
    }
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return (
    <div className="inputContainer">
      <input
        className="search"
        value={inputValue}
        type="text"
        placeholder="What tests are you looking for?"
        onChange={handleSearchChange}
        onKeyDown={handleSearchKeyDown}
      />
      <span className="count">{searchCount} tests</span>
    </div>
  );
}
