import React from "react";
import Scroll from "./scroll";

type ItemProps = {
  keyName: string;
  value: string;
};

const Item: React.FC<ItemProps> = ({ value, keyName }) => {
  return (
    <>
      <div className="absolute -top-16 right-0 h-16 w-1 bg-[var(--foreground)]" />
      <div className="ml-16 grid w-full grid-cols-[1fr_4rem] text-3xl font-semibold">
        <div className="ml-16 h-auto overflow-clip border-r-4 border-t-4 border-[var(--foreground)] px-4 pb-16 pt-4 text-right">
          <p className="whitespace-pre-wrap">{value}</p>
          <div className="relative">
            <div className="absolute bottom-4 flex origin-left skew-y-12 transform flex-col">
              <Scroll key={keyName} keyName={keyName} />
            </div>
          </div>
        </div>
        <div className="h-auto border-t-4 border-[var(--foreground)] p-4">
          <p className="whitespace-pre-wrap">
            {keyName
              .match(/[A-Z]?[a-z]+/g)
              ?.map((word) => word[0].toUpperCase())
              .join("\n")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Item;
