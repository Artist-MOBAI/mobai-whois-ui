interface PageHeaderProps {
  isHovered: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ isHovered }) => {
  return (
    <>
      <hr className="my-10 h-1 w-auto border-0 bg-whois_ui-line" />
      <div className="flex flex-row">
        <div className="mx-16 -mb-28 -mt-28 w-1 border-0 bg-whois_ui-line" />
        <h1 className="mr-16 whitespace-pre-line text-8xl font-semibold leading-normal">
          {isHovered ? "在此输入\n你想查询的域名" : "MOBAI NEXT\nWHOIS UI"}
        </h1>
      </div>
      <hr className="my-10 h-1 w-auto border-0 bg-whois_ui-line" />
    </>
  );
};

export default PageHeader;
