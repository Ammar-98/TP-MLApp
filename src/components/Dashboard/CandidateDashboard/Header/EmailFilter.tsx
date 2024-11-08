import { Check, ChevronDown, ChevronRight, Filter, Search, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Client {
  id: number;
  client_name: string;
}

export default function EmailFilter() {
  const [serachQuery, setserachQuery] = useState<string>("");
  const [openDropDown, setopenDropDown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedList, setselectedList] = useState<number[]>([]);

  const Data2: Client[] = [
    {
      id: 1,
      client_name: "Ammar@talentpop.co",
    },
    {
      id: 2,
      client_name: "Afnaan@talentpop.co",
    },
    {
      id: 3,
      client_name: "Faraz@talentpop.co",
    },
    {
      id: 4,
      client_name: "Jazay@talentpop.co",
    },
  ];

  const [Data, setData] = useState<Client[]>(Data2);
  const [Datatemp, setDatatemp] = useState<Client[]>(Data2);
  const [loading, setloading] = useState<boolean>(false);

  const onSearchChange = (query: string) => {
    console.log("query", query);
    if (query === "") {
      setData(Datatemp);
    } else {
      let a = [...Datatemp];
      a = a.filter((item) =>
        item.client_name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("a", a);
      setData(a);
    }
    setserachQuery(query);
  };

  const AddToSelected = (item: number) => {
    let temp = [...selectedList];
    temp.push(item);
    console.log("temp", temp);
    setselectedList(temp);
  };

  const RemoveFromSelect = (item: number) => {
    let temp = selectedList.filter((id) => id !== item);
    setselectedList(temp);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setserachQuery("");
        setopenDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    setserachQuery("");
  }, [openDropDown]);

  if (loading) {
    return <div className="relative">Loading...</div>;
  }

  if (Datatemp.length === 0) {
    return (
      <div className="px-4 border bg-white flex items-center justify-center h-9 rounded-full text-[14px] cursor-pointer font-poppins">
        <div className="mr-1 font-[300]">No Emails Found</div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={() => setopenDropDown(!openDropDown)}
        className={`${openDropDown==true?' bg-[#f5ffed]':'bg-white'} px-4   flex items-center justify-between h-9 rounded-full text-[14px] cursor-pointer font-poppins `}
        
      >
        
        <div className="mr-1 font-[300]">Email Address</div>

        {/* <ChevronDown className="duration-500 rotate-180" /> */}
        {openDropDown == false ? (
          <ChevronRight size={20} className="duration-500 rotate-0 " />
        ) : (
          <ChevronRight size={20} className="duration-500 rotate-180 " />
        )}
      </div>

      {openDropDown && (
        <div className="overflow-hidden absolute  left-[220px] top-[0px]  flex mt-1 w-[300px] flex-col rounded-2xl border border-slate-400 bg-white z-30">
          <div className="px-2 w-full flex items-center h-[40px] justify-center border-b">
            <Search size={20} strokeWidth={2} color="gray" />
            <input
              value={serachQuery}
              placeholder="Search"
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex w-full h-[39px] px-2 rounded-t-xl outline-none"
            />
            <X
              onClick={() => {
                setserachQuery("");
                setData(Datatemp);
                setopenDropDown(false);
              }}
              size={20}
              strokeWidth={2}
              color="black"
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col max-h-[330px] overflow-y-scroll">
            {Data.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  selectedList.includes(item.id)
                    ? RemoveFromSelect(item.id)
                    : AddToSelected(item.id);
                }}
                className={`cursor-pointer px-2 flex hover:bg-slate-200 gap-3 text-[14px] py-3`}
              >
                <div
                  className={`${
                    selectedList.includes(item.id)
                      ? "bg-[#69C920]"
                      : "border border-slate-400"
                  } rounded w-5 h-5 flex items-center justify-center`}
                >
                  {selectedList.includes(item.id) && (
                    <Check size={17} color="#FFF" />
                  )}
                </div>
                {item.client_name}
              </div>
            ))}
          </div>
          <div
            className="w-full flex items-center justify-center border-t min-h-[30px]"
            onClick={() => setselectedList([])}
          >
            {selectedList.length !== 0 && (
              <div className="w-[80%] flex items-center justify-center text-[14px] font-[500] py-2 my-3 rounded-full hover:bg-slate-200 cursor-pointer">
                Clear Selection
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
