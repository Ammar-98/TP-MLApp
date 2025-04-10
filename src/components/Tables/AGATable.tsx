import { useContext, useEffect, useState } from "react";
import CustomTable from "../CustomTableComponent/CustomTableComponent";
import { Check, ExternalLink } from "lucide-react";
import SelectedRSFilter from "../FIlters/SelectedRSFilter";
import { useFetchAGATableData } from "@/hooks/useFetchAGATableData";
import AppContext from "@/context/AppContext";

export default function AGATable() {
  const [selected, setselected] = useState<any[]>([]);

  const ColumnData = [
    {
      name: "",
      width: 100,
      keyword: "db_created_at",
      child: (item: any) => {
        return (
          <div
            className={` overflow-hidden flex items-center justify-center flex-wrap  `}
          >
            <div
              onClick={() => handleSelect(item)}
              className={` w-5 h-5 ${
                selected.includes(item)
                  ? " bg-[#69C920]"
                  : "bg-white border-2 border-slate-400"
              }  rounded border flex items-center justify-center cursor-pointer `}
            >
              {selected.includes(item) && <Check color="white" size={20} />}
            </div>
          </div>
        );
      },
      sticky: true,
      sorting: false,
    },
    {
      name: "Ticket Name",
      width: 200,
      sticky: true,
      keyword: "ticketName",
      sorting: true,
    },
    {
      name: "RS (Vetter)",
      width: 150,
      sticky: true,
      keyword: "decision_by_name",
      sorting: true,
    },
    {
      name: "Q1",
      width: 950,
      sticky: false,
      keyword: "CS_Quiz_1",
      sorting: true,
    },
    {
      name: "Q2",
      width: 950,
      sticky: false,
      keyword: "CS_Quiz_2",
      sorting: true,
    },
    {
      name: "Q3",
      width: 950,
      sticky: false,
      keyword: "CS_Quiz_3",
      sorting: true,
    },
    {
      name: "Q4",
      width: 950,
      sticky: false,
      keyword: "CS_Quiz_4",
      sorting: true,
    },
    {
      name: "Q5",
      width: 950,
      sticky: false,
      keyword: "CS_Quiz_5",
      sorting: true,
    },
    {
      name: "Email",
      width: 200,
      sticky: false,
      keyword: "Email_Address",
      sorting: true,
    },
    {
      name: "Phone Number",
      width: 150,
      sticky: false,
      keyword: "phonenumber",
      sorting: true,
    },
    {
      name: "Skills Assessment Score",
      width: 200,
      sticky: false,
      keyword: "Skill_Assesment_Score",
      sorting: true,
    },
    {
      name: "Years of Customer Service Experience",
      width: 250,
      sticky: false,
      keyword: "Years_CS_Experience",
      sorting: true,
    },
    {
      name: "Device Processor Specs",
      width: 250,
      sticky: false,
      keyword: "device_processor_specs",
      sorting: true,
    },
    {
      name: "Device Ram/Memory Capacity",
      width: 250,
      sticky: false,
      keyword: "device_ram_memory_capacity",
      sorting: true,
    },
    {
      name: "What is your availability?",
      width: 250,
      sticky: false,
      keyword: "Availability",
      sorting: true,
    },
    {
      name: "What is your current employment status?",
      width: 300,
      sticky: false,
      keyword: "Current_Employment_Status",
      sorting: true,
    },
    {
      name: "Existing Commitments/Obligations",
      width: 250,
      sticky: false,
      keyword: "Existing_Commitment",
      sorting: true,
    },
    {
      name: "If Hired, How Soon Would You Be Able To Get Started?",
      width: 350,
      sticky: false,
      keyword: "Tentative_Start_Date",
      sorting: true,
    },
    {
      name: "What country are you applying from?",
      width: 250,
      sticky: false,
      keyword: "Country",
      sorting: true,
    },
    {
      name: "Years of Administrative Experience",
      width: 220,
      sticky: false,
      keyword: "years_admin_exp",
      sorting: true,
    },
    {
      name: "Prior Experience/Roles",
      width: 200,
      sticky: false,
      keyword: "previous_exp",
      sorting: true,
    },
    {
      name: "Years of E-commerce Experience",
      width: 220,
      sticky: false,
      keyword: "Year_Ecom_Experience",
      sorting: true,
    },
    {
      name: "Software Tool Experience",
      width: 200,
      sticky: false,
      keyword: "Software_Tool_Experience",
      sorting: true,
    },
    {
      name: "Available To Work Graveyard? (9AM - 6PM EST/PST)",
      width: 350,
      sticky: false,
      keyword: "Graveyard_Availability",
      sorting: true,
    },
    {
      name: "Currently Studying Or Planning To Study",
      width: 280,
      sticky: false,
      keyword: "Studying_Planning_Studying",
      sorting: true,
    },
    {
      name: "Rehirable",
      width: 100,
      sticky: false,
      keyword: "rehirable",
      sorting: true,
    },
    {
      name: "Currency",
      width: 100,
      sticky: false,
      keyword: "currency",
      sorting: true,
    },
    {
      name: "Speed Test Link",
      width: 150,
      sticky: false,
      keyword: "Speedtest_Link",
      sorting: true,
      child: (item: any) => (
        <div className="text-[#4285F4] cursor-pointer underline">
          {item.Speedtest_Link}
        </div>
      ),
    },
    {
      name: "Application Resume Link",
      width: 200,
      sticky: false,
      keyword: "Applicant_Resume",
      sorting: true,
      child: (item: any) =>
        item?.Applicant_Resume ? (
          <div className="text-[#4285F4] cursor-pointer underline">
            {item.Applicant_Resume}
          </div>
        ) : (
          "-"
        ),
    },
  ];

  

  const handleSelect = (item: any) => {
    let temp = [...selected];
    if (selected.includes(item)) {
      temp = temp.filter((ticket) => ticket !== item);
      setselected(temp);
    } else {
      temp.push(item);
      setselected(temp);
      console.log("temp", temp);
    }
  };

  const CheckBox = ({ item, selected, handleSelect }: any) => {
    return (
      <div
        style={{
          background: selected.includes(item) ? "#69C920" : "white",
          borderWidth: selected.includes(item) ? 0 : 1,
          height: "17px",
          width: "17px",
        }}
        onClick={() => handleSelect(item)}
        className="  rounded-sm border-black flex items-center justify-center cursor-pointer "
      >
        {selected.includes(item) ? (
          <Check color="white" size={"90%"} strokeWidth={2} className=" " />
        ) : null}
      </div>
    );
  };
  const [sortBy, setsortBy] = useState("");
  const [sortOrder, setsortOrder] = useState("asc");
  const [currentpage, setcurrentpage] = useState(1);
  const [totalPages, settotalPages] = useState(0);

  const {
    selectedCountry,
    selectedEmail,
    selectedLanguageSpoken,
    selectedRS,
    selectedSkillAssessmentScore,
  } = useContext(AppContext);

  const { data, isLoading, error, isError, isFetching } = useFetchAGATableData(
    currentpage,
    sortBy,
    sortOrder
  );

  useEffect(() => {
    console.log("error", error);
  }, [isError]);

  useEffect(() => {
    if (isFetching == false) {
      settotalPages(data?.pagination?.totalPages);
    }
  }, [isFetching]);

  useEffect(() => {
    setcurrentpage(1);
  }, [
    selectedCountry,
    selectedEmail,
    selectedLanguageSpoken,
    selectedRS,
    selectedSkillAssessmentScore,
  ]);

  return (
    <div>
      <div className=" flex w-full justify-between p-2">
        <div className=" flex items-center gap-3">
          <span className=" text-xl font-semibold">Overview</span>
          <SelectedRSFilter className=" bg-white pointer-events-none opacity-50 w-[140px] flex items-center justify-center p-2" />
          <div className=" w-[160px] opacity-50 flex items-center justify-center border  rounded-full py-2 text-sm font-normal bg-[#69C920] text-[white]">
            Apply
          </div>
        </div>
        <div className=" flex items-center gap-2 mr-4">
          <div className="w-[120px] opacity-50 flex items-center justify-center border border-[#69C920]  rounded-full py-2 text-sm font-normal bg-[white]">
            Pending
          </div>
          {/* <div className="w-[120px] cursor-pointer flex items-center justify-center border border-[#FF3434]  rounded-full py-2 text-sm font-normal bg-[white]">
            Failed
          </div> */}
        </div>
      </div>
      <div className=" w-full mt-5 ">
        <CustomTable
          Data={data?.data}
          Columns={ColumnData}
          TableWidth="90vw"
          TableHeight="full"
          Loading={isLoading}
          pagination={{
            enabled: true,
            currentpage: currentpage,
            setcurrentpage: setcurrentpage,
            totalPages: totalPages,
          }}
          Sorting={{
            sortBy: sortBy,
            setsortBy: setsortBy,
            sortOrder: sortOrder,
            setsortOrder: setsortOrder,
          }}
          tableIcon={{
            Icon: [
              <CheckBox
                // item={yourItem}
                selected={selected}
                handleSelect={handleSelect}
              />,

              <ExternalLink
                color="#69C920"
                size={20}
                strokeWidth={2}
                className=" cursor-pointer"
              />,
            ],

            width: 100,
            sticky: true,
            onClick: (item: any) => handleSelect(item),
          }}
        />
      </div>
    </div>
  );
}
