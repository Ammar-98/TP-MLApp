import { useEffect, useRef, useState } from "react";
// import AppContext from "../../context/AppContext";
// import useFetchRTMFilterData from "../../hooks/useFetchRTMFilter.tsx";
// import { Skeleton } from "../Skeleton/Skeleton.tsx";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { useLocation } from "react-router-dom";
// import { useFetchClientFilterData } from "../../hooks/useFetchClientFilterData.tsx";

export default function TicketStatusFilter({ className }: any) {
  const [serachQuery, setserachQuery] = useState("");
  const [openDropDown, setopenDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [Data, setData] = useState<any>([]);
  const [Datatemp, setDatatemp] = useState<any>([]);

  //   const { selectedClients, setSelectedClients } = useContext(AppContext);
  const [selectedClients, setSelectedClients] = useState<any>([]);

  //   const { data, isLoading, error, isError, isFetching, isSuccess } =
  //     useFetchClientFilterData();
  const data: any = [];

  const onSearchChange = (query: any) => {
    console.log("query", query);
    if (query == "") {
      setData(Datatemp);
    } else {
      let a = [...Datatemp];
      a = a.filter((item) =>
        item.client?.toLowerCase().includes(query?.toLowerCase())
      );
      console.log("a", a);
      setData(a);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onSearchChange(serachQuery);
  }, [serachQuery]);

  useEffect(() => {
    if (openDropDown == true) {
      inputRef?.current?.focus();
    }
  }, [openDropDown, selectedClients]);

  const AddToSelected = (item: any) => {
    let temp = [...selectedClients];
    temp.push(item);
    setSelectedClients(temp);
    console.log("temp", temp);
  };

  const RemoveFromSelect = (item: any) => {
    let temp = [...selectedClients];
    temp = temp.filter((items) => items != item);
    setSelectedClients(temp);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setserachQuery("");
        setopenDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  //   useEffect(() => {
  //     setData(data);
  //     setDatatemp(data);
  //     console.log("data", data);
  //   }, [isSuccess]);

  useEffect(() => {
    //Erase this later hook
    setDatatemp(data);
  }, []);

  const location = useLocation().pathname;

  useEffect(() => {
    setSelectedClients([]);
  }, [location]);

  //   if (isLoading) {
  //     return (
  //       <div className="w-24">
  //         <Skeleton className={`h-9  ${className} rounded-full`} />
  //       </div>
  //     );
  //   }

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setopenDropDown(!openDropDown)}
        className={`border ${className} h-9 rounded-full text-sm flex items-center justify-center  cursor-pointer font-poppins`}
      >
        <div className=" mr-1  font-[300]">Tickets Status</div>
        {selectedClients.length > 0 && (
          <div className=" bg-[#69C920] border text-[white]  font-medium text-[12px] mx-1 rounded-full w-[20px] flex h-[20px]  items-center justify-center">
            {selectedClients.length}
          </div>
        )}
        {openDropDown == false ? (
          <ChevronDown className="duration-500 rotate-0" />
        ) : (
          <ChevronDown className="duration-500 rotate-180" />
        )}
      </div>

      {openDropDown == true ? (
        <div className="  overflow-hidden absolute  flex mt-1  w-[300px] flex-col rounded-2xl border border-slate-400  bg-white z-30">
          <div className=" px-2 w-full  flex items-center h-[40px] justify-center border-b">
            <Search size={20} strokeWidth={2} color="gray" />
            <input
              ref={inputRef}
              value={serachQuery}
              placeholder="Search"
              onChange={(e) => setserachQuery(e.target.value)}
              className="flex w-full     h-[39px] px-2  rounded-t-xl outline-none "
            />
            <X
              onClick={() =>
                serachQuery == ""
                  ? [setopenDropDown(false)]
                  : [setserachQuery(""), setData(data)]
              }
              size={20}
              strokeWidth={2}
              color="black"
              className=" cursor-pointer"
            />
          </div>

          {/* <div className="px-2 w-[300px] flex items-center  border-y overflow-x-scroll gap-2 scrollbar-hide">
            {selectedClients.map((selectedClient: any, index: any) => (
              <div
                onClick={() => RemoveFromSelect(selectedClient)}
                key={index}
                className="opacity-70 cursor-pointer whitespace-nowrap min-w-fit max-h-[35px] py-2 px-2 bg-[#69C920] text-center rounded-full text-white text-xs flex items-center justify-center my-1"
              >
                {selectedClient.client} <X size={15} />
              </div>
            ))}
          </div> */}
          <div className="  flex flex-col max-h-[330px] overflow-y-scroll  ">
            {Data.map((item: any) => (
              <div
                onClick={() => {
                  selectedClients.includes(item)
                    ? RemoveFromSelect(item)
                    : AddToSelected(item);
                }}
                className={` ${
                  selectedClients.includes(item) ? "" : ""
                }  cursor-pointer px-2 flex hover:bg-slate-200  gap-3 text-[14px]  py-3    `}
              >
                <div
                  className={` ${
                    selectedClients.includes(item)
                      ? "bg-[#69C920]"
                      : " border  border-slate-400"
                  } rounded   w-5 h-5  flex items-center justify-center`}
                >
                  {selectedClients.includes(item) && (
                    <Check size={17} color="#FFF" />
                  )}
                </div>
                {item.client}
              </div>
            ))}
          </div>
          <div
            className=" w-full flex items-center justify-center border-t min-h-[30px]"
            onClick={() => [setSelectedClients([]), setserachQuery("")]}
          >
            {selectedClients.length != 0 && (
              <div className=" w-[80%]  flex items-center justify-center text-[14px] font-[500] py-2 my-3 rounded-full hover:bg-slate-200  cursor-pointer">
                Clear Selection
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
