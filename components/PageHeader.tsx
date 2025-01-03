interface PageHeaderProps {
  isHovered: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ isHovered }) => {
  return (
    <>
      <div className="grid grid-cols-[4rem_1fr] grid-rows-[4rem_1fr_4rem]">
        <div />
        <div className="border-l-4 border-[var(--foreground)]" />
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
