import React from "react";

type ItemProps = {
  keyName: string;
  value: string;
};

const Item: React.FC<ItemProps> = ({ value, keyName }) => {
  return (
    <div className="ml-16 box-border">
      <hr className="-mr-16 h-1 w-auto border-0 bg-whois_ui-line" />
      <div className="flex flex-row">
        <p className="whitespace-pre-line p-4 text-3xl font-semibold">
          {value}
        </p>
        <div className="absolute right-0 translate-x-full font-semibold">
          <p className="w-auto p-4 text-3xl">{keyName}</p>
        </div>
        <div className="absolute right-0 -mt-16 h-screen w-1 bg-whois_ui-line" />
      </div>
    </div>
  );
};

export default Item;
