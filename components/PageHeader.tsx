import { getCurrentWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";

interface PageHeaderProps {
  isHovered: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ isHovered }) => {
  useEffect(() => {
    const appWindow = getCurrentWindow();

    document
      .getElementById("minimize")
      ?.addEventListener("click", () => appWindow.minimize());
    document
      .getElementById("maximize")
      ?.addEventListener("click", () => appWindow.toggleMaximize());
    document
      .getElementById("close")
      ?.addEventListener("click", () => appWindow.close());
  });

  return (
    <>
      <div className="no-select grid grid-cols-[4rem_1fr] grid-rows-[4rem_1fr_4rem]">
        <div />
        <div
          data-tauri-drag-region
          className="z-20 flex flex-row items-start justify-start space-x-16 border-l-4 border-[var(--foreground)] pl-16 text-2xl font-extrabold"
        >
          <button id="close">CLOSE</button>
          <button id="minimize">MIN</button>
          <button id="maximize">MAX</button>
        </div>
        <div className="border-y-4 border-[var(--foreground)]" />
        <div className="border-y-4 border-l-4 border-[var(--foreground)] px-14 py-8">
          <h1 className="whitespace-pre-line text-8xl font-semibold leading-normal">
            {isHovered ? "在此输入\n你想查询的域名" : "MOBAI NEXT\nWHOIS UI"}
          </h1>
        </div>
        <div />
        <div className="border-l-4 border-[var(--foreground)]" />
      </div>
    </>
  );
};

export default PageHeader;
