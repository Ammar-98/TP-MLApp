import { useContext, useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import AppContext from "@/context/AppContext";
import { Skeleton } from "../ui/skeleton";
import { FixedSizeList as List } from "react-window";
import { useFetchCountryFilterData } from "@/hooks/useFetchCountryFilterData";

export default function CountryFilter({ className }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const { selectedCountry, setSelectedCountry } = useContext(AppContext);
  const {
    data: fetchedData,
    isLoading,
    isSuccess,
  } = useFetchCountryFilterData();

  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation().pathname;

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  useEffect(() => {
    if (openDropDown) {
      inputRef?.current?.focus();
    }
  }, [openDropDown]);

  const addToSelected = (item: any) => {
    setSelectedCountry((prev: any) => [...prev, item]);
  };

  const removeFromSelected = (item: any) => {
    setSelectedCountry((prev: any) => prev.filter((i: any) => i !== item));
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchQuery("");
        setOpenDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setData(fetchedData);
      setFilteredData(fetchedData);
    }
  }, [isSuccess]);

  useEffect(() => {
    setSelectedCountry([]);
  }, [location]);

  if (isLoading) {
    return (
      <div className="w-24">
        <Skeleton className={`h-9 ${className} rounded-full`} />
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setOpenDropDown(!openDropDown)}
        className={`border ${className} h-9 rounded-full text-sm flex items-center justify-center cursor-pointer font-poppins`}
      >
        <div className="mr-1 font-[300]">Country</div>
        {selectedCountry.length > 0 && (
          <div className="bg-[#69C920] text-white font-medium text-[12px] mx-1 rounded-full w-[20px] h-[20px] flex items-center justify-center">
            {selectedCountry.length}
          </div>
        )}
        <ChevronDown
          className={`duration-500 ${openDropDown ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {openDropDown && (
        <div className="overflow-hidden absolute mt-1 w-[300px] flex-col rounded-2xl border border-slate-400 bg-white z-30">
          <div className="px-2 w-full flex items-center h-[40px] justify-center border-b">
            <Search size={20} strokeWidth={2} color="gray" />
            <input
              ref={inputRef}
              value={searchQuery}
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex w-full h-[39px] px-2 rounded-t-xl outline-none"
            />
            <X
              onClick={() =>
                searchQuery === ""
                  ? setOpenDropDown(false)
                  : [setSearchQuery(""), setFilteredData(data)]
              }
              size={20}
              strokeWidth={2}
              color="black"
              className="cursor-pointer"
            />
          </div>

          <List
            height={330}
            itemCount={filteredData.length}
            itemSize={45}
            width="100%"
          >
            {({ index, style }) => {
              const item = filteredData[index];
              const isSelected = selectedCountry.includes(item);

              return (
                <div
                  key={item}
                  style={style}
                  onClick={() =>
                    isSelected ? removeFromSelected(item) : addToSelected(item)
                  }
                  className="cursor-pointer px-2 flex items-center gap-3 text-[14px] hover:bg-slate-200"
                >
                  <div
                    className={`${
                      isSelected ? "bg-[#69C920]" : "border border-slate-400"
                    } rounded w-5 h-5 flex items-center justify-center`}
                  >
                    {isSelected && <Check size={17} color="#FFF" />}
                  </div>
                  {item}
                </div>
              );
            }}
          </List>

          {selectedCountry.length > 0 && (
            <div
              className="w-full flex items-center justify-center border-t min-h-[30px] cursor-pointer hover:bg-slate-200"
              onClick={() => {
                setSelectedCountry([]);
                setSearchQuery("");
              }}
            >
              <div className="w-[80%] flex items-center justify-center text-[14px] font-[500] py-2 my-3 rounded-full">
                Clear Selection
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
