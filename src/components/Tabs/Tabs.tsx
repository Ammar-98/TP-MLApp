import { useState } from "react";
// import AppContext from "../context/AppContext";
// import { useContext } from "react";

const Tabs = ({ children }: any) => {
  // const {
  //   setCurrntActiveTab,
  //   clearAllFilters,
  //   CurrntActiveTab,
  //   setStartingDateFilter,
  //   setEndingDateFilter,
  //   setDate,
  // } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState(children[0].props["data-label"]);

  const handleClick = (e: any, newActiveTab: any) => {
    e.preventDefault();
    console.log(newActiveTab);

    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full text-[16px] flex flex-col space-y-2 text-main-text ">
      <div className="flex border-b-2 border-grey-5 border-opacity-50">
        {children.map((child: any) => (
          <button
            key={child.props["data-label"]}
            className={`${
              activeTab === child.props["data-label"]
                ? " bg-[#D0F7D8] rounded-t-md  font-semibold"
                : child.props["data-label"] == "Pending Manual Review"
                ? " bg-[#FFF7D8] font-medium"
                : "font-medium"
            } flex justify-center space-x-4 p-4 text-main-text w-24 text-center`}
            onClick={(e) => handleClick(e, child.props["data-label"])}
          >
            {child.props["data-label"]}
          </button>
        ))}
      </div>
      <div className="">
        {children.map((child: any) => {
          if (child.props["data-label"] === activeTab) {
            return (
              <div key={child.props["data-label"]}>{child.props.children}</div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ labelData, children }: any) => {
  return (
    <div data-label={labelData} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
