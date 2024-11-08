import { useState, useEffect, useRef } from "react";
import { Filter, ChevronDown } from "lucide-react";
import ClientFilter from "./NameFilter";
import EmailFilter from "./EmailFilter";

export default function FilterComponent() {
//   const [DropMenuBool, setDropMenuBool] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [DropMenuBool, setDropMenuBool] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropMenuBool(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={() => setDropMenuBool(!DropMenuBool)}
        className="  bg-white flex items-center justify-between rounded-full border  py-1  w-[150px] px-3 cursor-pointer   "
      >
        <div className=" text-base  h-full rounded-full flex items-center gap-1">
          <Filter color="#69C920" size={15} fill="#69C920 " />
          Filters
        </div>
        {DropMenuBool == false ? (
          <ChevronDown className="duration-500 rotate-0" />
        ) : (
          <ChevronDown className="duration-500 rotate-180" />
        )}
      </div>
      {DropMenuBool == true && (
        <div className=" bg-white border mb-2 absolute top-[34px] z-40  rounded-3xl  w-[230px] pt-2">
          <div>
            <ClientFilter />
            <EmailFilter />
          </div>
          <div className=" border-t-2 h-8"></div>
        </div>
      )}
    </div>
  );
}
