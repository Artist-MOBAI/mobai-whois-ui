import React from "react";

type scrollProps = {
  keyName: string;
};

const Scroll: React.FC<scrollProps> = ({ keyName }) => {
  return (
    <ul className="flex translate-y-12 animate-infinate-scroll space-x-16 whitespace-nowrap font-mono text-3xl font-semibold text-whois_ui-text">
      <li className="flex space-x-4">
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
        <p>{keyName}</p>
      </li>
    </ul>
  );
};

export default Scroll;
