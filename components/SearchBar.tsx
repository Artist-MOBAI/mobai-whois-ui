"use client";

import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Item from "./ui/item";

interface SearchBarProps {
  onHoverChange: (isHovere: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onHoverChange }) => {
  const [domain, setDomain] = useState("");
  const [data, setData] = useState("");

  function replace(text: string): string {
    const newlineRegexes = [
      /\s(?=ns.\.)/g,
      /\s(?=ns.\-)/g,
      /\s(?=dns.\.)/g,
      /\s(?=\/\/)/g,
      /\s(?=https\:\/\/)/g,
      /(?<=\))\s/g,
    ];
    const emptyRegexes = [/<<</g];

    newlineRegexes.forEach((pattern) => {
      text = text.replace(pattern, "\n");
    });

    emptyRegexes.forEach((pattern) => {
      text = text.replace(pattern, "");
    });

    return text;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setDomain(term);
    fetchData(term);
  };

  const fetchData = useDebouncedCallback(async (domain: string) => {
    const response = await fetch(`/api/?domain=${domain}`);
    const result = await response.json();
    setData(result);
  }, 560);

  return (
    <form
      className="ml-32 mr-16 h-16 w-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <input
          type="text"
          className="h-16 w-full cursor-none border-4 border-[var(--foreground)] bg-[var(--background)] p-4 text-3xl font-semibold text-whois_ui-text hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:caret-[var(--background)] focus:outline-none"
          value={domain}
          onChange={handleInputChange}
          onMouseEnter={() => onHoverChange(true)}
          onMouseLeave={() => onHoverChange(false)}
        />
      </div>
      <div className="absolute right-0 mb-96 mt-16 break-all">
        {domain &&
          data &&
          Object.entries(data).map(([key, value], index) => (
            <Item
              key={`${key}-${index}`}
              keyName={key}
              value={replace(value)}
            />
          ))}
      </div>
    </form>
  );
};

export default SearchBar;
