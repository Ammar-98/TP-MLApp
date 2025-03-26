import Applications from "@/components/BarGraphs/Applications";
import DailyScreeningCountPerRS from "@/components/BarGraphs/DailyScreeningCountPerRS";
import FailedScreeningReasons from "@/components/BarGraphs/FailedScreeningReasons";
import CardComp from "@/components/Card/card";
import CustomTable from "@/components/CustomTableComponent/CustomTableComponent";
import EmailFilter from "@/components/FIlters/EmailFilter";
import FullNameFilter from "@/components/FIlters/FullNameFilter";
import TicketStatusFilter from "@/components/FIlters/TicketStatusFilter";
import TypeOfTicketsFilter from "@/components/FIlters/TypeOfTicketsFilter";
import AGAPassedScreening from "@/components/PieCharts/AGAPassedScreening";
import CGAPassedScreening from "@/components/PieCharts/CGAPassedScreening";
import CSPassedScreening from "@/components/PieCharts/CSPassedScreening";
import AGATable from "@/components/Tables/AGATable";
import CGATable from "@/components/Tables/CGATable";
import CSTable from "@/components/Tables/CSTable";
import { Tab, Tabs } from "@/components/Tabs/Tabs";
import { Check, ExternalLink, Filter } from "lucide-react";
import { useState } from "react";

function TicketsManagement() {
  return (
    <div className=" h-[100vh] w-full bg-[#F1F5F5] flex flex-col pt-8 pl-8 overflow-y-scroll pb-10 ">
      <div className=" text-2xl font-semibold text-[#163143]">
        Tickets Management
      </div>
      <div className=" flex w-full  my-5 gap-3">
        <div className=" flex items-center gap-1">
          <Filter strokeWidth={2} size={16} fill="black" />
          <span className=" text-sm font-bold">Filters: </span>
        </div>
        <TicketStatusFilter className=" bg-white flex items-center justify-between px-3" />
        <TypeOfTicketsFilter className=" bg-white flex items-center justify-between px-3" />
        <FullNameFilter className=" bg-white flex items-center justify-between px-3" />
        <EmailFilter className=" bg-white flex items-center justify-between px-3" />
      </div>
      <Tabs>
        <Tab data-label="All Tickets">
          <AllTicketsView />
        </Tab>
        <Tab data-label="CS">
          <CSTable />
        </Tab>
        <Tab data-label="AGA">
          <AGATable />
        </Tab>
        <Tab data-label="CGA">
          <CGATable />
        </Tab>
        <Tab data-label="Analytics">
          <AnalyticsView />
        </Tab>
      </Tabs>
    </div>
  );
}

const AllTicketsView = () => {
  const ColumnData = [
    {
      name: "Ful lName",
      width: 150,
      sticky: true,
      keyword: "fullName",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "RS",
      width: 150,
      sticky: true,
      keyword: "rs",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "Q1",
      width: 100,
      sticky: false,
      keyword: "Q1",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "Q2",
      width: 100,
      sticky: false,
      keyword: "Q2",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "Q3",
      width: 100,
      sticky: false,
      keyword: "Q3",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "Q4",
      width: 100,
      sticky: false,
      keyword: "Q4",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "Q5",
      width: 100,
      sticky: false,
      keyword: "Q5",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "Avg. Score",
      width: 100,
      sticky: false,
      keyword: "avgScore",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
    {
      name: "Ticket Status",
      width: 150,
      sticky: false,
      keyword: "ticketsStatus",
      sorting: true,

      // child?: any;
      // sorting?: boolean;
    },
  ];
  const DummyData = [
    {
      fullName: "Beta System",
      rs: "XYData",
      Q1: "76",
      Q2: "34",
      Q3: "50",
      Q4: "29",
      Q5: "65",
      avgScore: "71",
      ticketsStatus: "Passed",
    },
    {
      fullName: "Gamma Tool",
      rs: "ABData",
      Q1: "40",
      Q2: "55",
      Q3: "67",
      Q4: "73",
      Q5: "60",
      avgScore: "60",
      ticketsStatus: "Failed",
    },
    {
      fullName: "Delta Analyzer",
      rs: "CDData",
      Q1: "91",
      Q2: "89",
      Q3: "85",
      Q4: "90",
      Q5: "92",
      avgScore: "89",
      ticketsStatus: "Passed",
    },
    {
      fullName: "Epsilon Checker",
      rs: "EFData",
      Q1: "33",
      Q2: "47",
      Q3: "52",
      Q4: "45",
      Q5: "49",
      avgScore: "45",
      ticketsStatus: "Failed",
    },
    {
      fullName: "Zeta Monitor",
      rs: "GHData",
      Q1: "85",
      Q2: "79",
      Q3: "88",
      Q4: "81",
      Q5: "83",
      avgScore: "83",
      ticketsStatus: "Passed",
    },
    {
      fullName: "Eta Tracker",
      rs: "IJData",
      Q1: "58",
      Q2: "62",
      Q3: "55",
      Q4: "60",
      Q5: "59",
      avgScore: "59",
      ticketsStatus: "Failed",
    },
    {
      fullName: "Theta Logger",
      rs: "KLData",
      Q1: "92",
      Q2: "95",
      Q3: "96",
      Q4: "97",
      Q5: "94",
      avgScore: "95",
      ticketsStatus: "Passed",
    },
    {
      fullName: "Iota Scanner",
      rs: "MNData",
      Q1: "70",
      Q2: "75",
      Q3: "72",
      Q4: "78",
      Q5: "74",
      avgScore: "74",
      ticketsStatus: "Passed",
    },
    {
      fullName: "Kappa Audit",
      rs: "OPData",
      Q1: "48",
      Q2: "42",
      Q3: "50",
      Q4: "45",
      Q5: "47",
      avgScore: "47",
      ticketsStatus: "Failed",
    },
    {
      fullName: "Lambda Review",
      rs: "QRData",
      Q1: "80",
      Q2: "85",
      Q3: "83",
      Q4: "87",
      Q5: "82",
      avgScore: "83",
      ticketsStatus: "Passed",
    },
  ];

  const [selected, setselected] = useState<any[]>([]);

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

  return (
    <div>
      <div className=" flex w-full justify-between">
        <div className=" flex items-center gap-3">
          <span className=" text-xl font-semibold">Overview</span>
          <div className=" w-[160px]  cursor-pointer flex items-center justify-center border  rounded-full py-2 text-sm font-normal bg-[white]">
            Select RS
          </div>
          <div className=" w-[160px] cursor-pointer flex items-center justify-center border  rounded-full py-2 text-sm font-normal bg-[#69C920] text-[white]">
            Apply
          </div>
        </div>
        <div className=" flex items-center gap-2 mr-4">
          <div className="w-[120px] cursor-pointer flex items-center justify-center border border-[#69C920]  rounded-full py-2 text-sm font-normal bg-[white]">
            Pending
          </div>
          {/* <div className="w-[120px] cursor-pointer flex items-center justify-center border border-[#FF3434]  rounded-full py-2 text-sm font-normal bg-[white]">
            Failed
          </div> */}
        </div>
      </div>
      <div className=" w-full mt-5 ">
        <CustomTable
          Data={DummyData}
          Columns={ColumnData}
          TableWidth="90vw"
          TableHeight="full"
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
};

const AnalyticsView = () => {
  const ticketOverviewData = [
    {
      title: "Assigned Tickets",
      value: 436,
      tooltip: "Total number of tickets assigned to the team",
      color: "#69C920",
    },
    {
      title: "Unassigned Tickets",
      value: 120,
      tooltip: "Total number of tickets not yet assigned",
      color: "#FF3434",
    },
    {
      title: "# of Passed Screening",
      value: 350,
      tooltip: "Number of candidates who passed the screening process",
      color: "#69C920",
    },
    {
      title: "# of Pending Candidates",
      value: 86,
      tooltip: "Number of candidates currently pending review",
      color: "#69C920",
    },
    {
      title: "# of Failed Screening",
      value: 50,
      tooltip: "Number of candidates who failed the screening process",
      color: "#69C920",
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-10 p-2">
      <div className="flex flex-col space-y-3">
        <span className="text-xl font-semibold text-[#163143]">
          Tickets Overview
        </span>
        <div className="flex items-center align-middle justify-center space-x-4">
          {ticketOverviewData.map((data) => (
            <div className="w-1/5">
              <CardComp
                text={data.title}
                value={data.value}
                tooltip={data.tooltip}
                color={data.color}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-x-4">
        <CSPassedScreening />
        <AGAPassedScreening />
        <CGAPassedScreening />
      </div>
      <div className="flex gap-x-6">
        <FailedScreeningReasons />
        <DailyScreeningCountPerRS />
      </div>
      <div className="w-full">
        <Applications />
      </div>
    </div>
  );
};

export default TicketsManagement;
