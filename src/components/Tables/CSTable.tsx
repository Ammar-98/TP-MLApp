import { useContext, useEffect, useState } from "react";
import CustomTable from "../CustomTableComponent/CustomTableComponent";
import { Check, ExternalLink } from "lucide-react";
import SelectedRSFilter from "../FIlters/SelectedRSFilter";
import { useFetchCSTableData } from "@/hooks/useFetchCSTableData";
import AppContext from "@/context/AppContext";

export default function CSTable() {

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
      name: "Years of E-commerce Experience",
      width: 250,
      sticky: false,
      keyword: "Year_Ecom_Experience",
      sorting: true,
    },
    {
      name: "Software Tool Experience",
      width: 250,
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
      width: 300,
      sticky: false,
      keyword: "Studying_Planning_Studying",
      sorting: true,
    },
    {
      name: "Rehirable",
      width: 150,
      sticky: false,
      keyword: "rehirable",
      sorting: true,
    },
    {
      name: "Currency",
      width: 150,
      sticky: false,
      keyword: "currency",
      sorting: true,
    },
    {
      name: "Application Code",
      width: 200,
      sticky: false,
      keyword: "Application_Code",
      sorting: true,
    },
    {
      name: "Years Of Sales Experience",
      width: 250,
      sticky: false,
      keyword: "years_of_sales_experience",
      sorting: true,
    },
    {
      name: "Voice Introduction Link",
      width: 250,
      sticky: false,
      keyword: "please_record_a_short_loom_video_introducing_yourself",
      sorting: true,
      child: (item: any) => (
        <div className="text-[#4285F4] cursor-pointer underline">
          {item.please_record_a_short_loom_video_introducing_yourself}
        </div>
      ),
    },
    {
      name: "Speed Test Link",
      width: 200,
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
      width: 250,
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

  // const DummyData = [
  //   {
  //     ticketName: "Support Ticket 1",
  //     rsVetter: "John Doe",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test1@example.com",
  //     phoneNumber: "123-456-7890",
  //     skillsAssessmentScore: 85,
  //     customerServiceExperience: 3,
  //     deviceProcessorSpecs: "Intel i5",
  //     deviceRamMemoryCapacity: "8GB",
  //     availability: "Full-time",
  //     employmentStatus: "Employed",
  //     commitmentsObligations: "None",
  //     startDate: "Immediately",
  //     country: "USA",
  //     ecommerceExperience: 2,
  //     softwareToolExperience: "Salesforce",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "Yes",
  //     currency: "USD",
  //     applicationCode: "APP001",
  //     salesExperience: 5,
  //     voiceIntroductionLink: "link1.com",
  //     speedTestLink: "speedtest1.com",
  //     applicationResumeLink: "resume1.com",
  //   },
  //   {
  //     ticketName: "Inquiry Ticket 2",
  //     rsVetter: "Jane Smith",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test2@example.com",
  //     phoneNumber: "987-654-3210",
  //     skillsAssessmentScore: 92,
  //     customerServiceExperience: 5,
  //     deviceProcessorSpecs: "AMD Ryzen 7",
  //     deviceRamMemoryCapacity: "16GB",
  //     availability: "Part-time",
  //     employmentStatus: "Unemployed",
  //     commitmentsObligations: "School",
  //     startDate: "2 weeks",
  //     country: "Canada",
  //     ecommerceExperience: 4,
  //     softwareToolExperience: "Zendesk",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "No",
  //     currency: "CAD",
  //     applicationCode: "APP002",
  //     salesExperience: 7,
  //     voiceIntroductionLink: "link2.com",
  //     speedTestLink: "speedtest2.com",
  //     applicationResumeLink: "resume2.com",
  //   },
  //   {
  //     ticketName: "Complaint Ticket 3",
  //     rsVetter: "Robert Johnson",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test3@example.com",
  //     phoneNumber: "555-123-4567",
  //     skillsAssessmentScore: 78,
  //     customerServiceExperience: 2,
  //     deviceProcessorSpecs: "Intel i3",
  //     deviceRamMemoryCapacity: "4GB",
  //     availability: "Full-time",
  //     employmentStatus: "Employed",
  //     commitmentsObligations: "Family",
  //     startDate: "1 month",
  //     country: "UK",
  //     ecommerceExperience: 1,
  //     softwareToolExperience: "HubSpot",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "Yes",
  //     currency: "GBP",
  //     applicationCode: "APP003",
  //     salesExperience: 3,
  //     voiceIntroductionLink: "link3.com",
  //     speedTestLink: "speedtest3.com",
  //     applicationResumeLink: "resume3.com",
  //   },
  //   {
  //     ticketName: "Feedback Ticket 4",
  //     rsVetter: "Alice Brown",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test4@example.com",
  //     phoneNumber: "111-222-3333",
  //     skillsAssessmentScore: 88,
  //     customerServiceExperience: 4,
  //     deviceProcessorSpecs: "AMD Ryzen 5",
  //     deviceRamMemoryCapacity: "8GB",
  //     availability: "Part-time",
  //     employmentStatus: "Student",
  //     commitmentsObligations: "School",
  //     startDate: "3 weeks",
  //     country: "Australia",
  //     ecommerceExperience: 3,
  //     softwareToolExperience: "Freshdesk",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "No",
  //     currency: "AUD",
  //     applicationCode: "APP004",
  //     salesExperience: 6,
  //     voiceIntroductionLink: "link4.com",
  //     speedTestLink: "speedtest4.com",
  //     applicationResumeLink: "resume4.com",
  //   },
  //   {
  //     ticketName: "Question Ticket 5",
  //     rsVetter: "Charlie Davis",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test5@example.com",
  //     phoneNumber: "444-555-6666",
  //     skillsAssessmentScore: 95,
  //     customerServiceExperience: 6,
  //     deviceProcessorSpecs: "Intel i7",
  //     deviceRamMemoryCapacity: "16GB",
  //     availability: "Full-time",
  //     employmentStatus: "Unemployed",
  //     commitmentsObligations: "None",
  //     startDate: "ASAP",
  //     country: "Germany",
  //     ecommerceExperience: 5,
  //     softwareToolExperience: "Zoho",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "Yes",
  //     currency: "EUR",
  //     applicationCode: "APP005",
  //     salesExperience: 8,
  //     voiceIntroductionLink: "link5.com",
  //     speedTestLink: "speedtest5.com",
  //     applicationResumeLink: "resume5.com",
  //   },
  //   {
  //     ticketName: "Issue Ticket 6",
  //     rsVetter: "Diana White",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test6@example.com",
  //     phoneNumber: "777-888-9999",
  //     skillsAssessmentScore: 80,
  //     customerServiceExperience: 1,
  //     deviceProcessorSpecs: "AMD Ryzen 3",
  //     deviceRamMemoryCapacity: "4GB",
  //     availability: "Part-time",
  //     employmentStatus: "Employed",
  //     commitmentsObligations: "Family",
  //     startDate: "2 months",
  //     country: "France",
  //     ecommerceExperience: 0,
  //     softwareToolExperience: "Help Scout",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "No",
  //     currency: "EUR",
  //     applicationCode: "APP006",
  //     salesExperience: 2,
  //     voiceIntroductionLink: "link6.com",
  //     speedTestLink: "speedtest6.com",
  //     applicationResumeLink: "resume6.com",
  //   },
  //   {
  //     ticketName: "Problem Ticket 7",
  //     rsVetter: "Ethan Green",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test7@example.com",
  //     phoneNumber: "333-444-5555",
  //     skillsAssessmentScore: 90,
  //     customerServiceExperience: 5,
  //     deviceProcessorSpecs: "Intel i5",
  //     deviceRamMemoryCapacity: "8GB",
  //     availability: "Full-time",
  //     employmentStatus: "Student",
  //     commitmentsObligations: "School",
  //     startDate: "4 weeks",
  //     country: "Japan",
  //     ecommerceExperience: 4,
  //     softwareToolExperience: "Intercom",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "Yes",
  //     rehirable: "Yes",
  //     currency: "JPY",
  //     applicationCode: "APP007",
  //     salesExperience: 7,
  //     voiceIntroductionLink: "link7.com",
  //     speedTestLink: "speedtest7.com",
  //     applicationResumeLink: "resume7.com",
  //   },
  //   {
  //     ticketName: "Request Ticket 8",
  //     rsVetter: "Sophia Hall",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test8@example.com",
  //     phoneNumber: "222-333-4444",
  //     skillsAssessmentScore: 82,
  //     customerServiceExperience: 3,
  //     deviceProcessorSpecs: "AMD Ryzen 7",
  //     deviceRamMemoryCapacity: "16GB",
  //     availability: "Part-time",
  //     employmentStatus: "Unemployed",
  //     commitmentsObligations: "None",
  //     startDate: "6 weeks",
  //     country: "China",
  //     ecommerceExperience: 2,
  //     softwareToolExperience: "Kayako",
  //     graveyardAvailability: "No",
  //     studyingStatus: "No",
  //     rehirable: "No",
  //     currency: "CNY",
  //     applicationCode: "APP008",
  //     salesExperience: 4,
  //     voiceIntroductionLink: "link8.com",
  //     speedTestLink: "speedtest8.com",
  //     applicationResumeLink: "resume8.com",
  //   },
  //   {
  //     ticketName: "Support Ticket 9",
  //     rsVetter: "Daniel King",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test9@example.com",
  //     phoneNumber: "666-777-8888",
  //     skillsAssessmentScore: 75,
  //     customerServiceExperience: 0,
  //     deviceProcessorSpecs: "Intel i3",
  //     deviceRamMemoryCapacity: "4GB",
  //     availability: "Full-time",
  //     employmentStatus: "Employed",
  //     commitmentsObligations: "Family",
  //     startDate: "3 months",
  //     country: "India",
  //     ecommerceExperience: 1,
  //     softwareToolExperience: "LiveAgent",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "Yes",
  //     rehirable: "Yes",
  //     currency: "INR",
  //     applicationCode: "APP009",
  //     salesExperience: 1,
  //     voiceIntroductionLink: "link9.com",
  //     speedTestLink: "speedtest9.com",
  //     applicationResumeLink: "resume9.com",
  //   },
  //   {
  //     ticketName: "Inquiry Ticket 10",
  //     rsVetter: "Olivia Taylor",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "Hi, my name is Susan. There is a problem with my order and I want a refund. Please advise. Thank you.",
  //     q5: "You are noticing that the company is continuously receiving negative feedback regarding sizing issues for the same product. How do you inform the team about this issue?",
  //     email: "test10@example.com",
  //     phoneNumber: "888-999-0000",
  //     skillsAssessmentScore: 98,
  //     customerServiceExperience: 7,
  //     deviceProcessorSpecs: "AMD Ryzen 5",
  //     deviceRamMemoryCapacity: "8GB",
  //     availability: "Part-time",
  //     employmentStatus: "Student",
  //     commitmentsObligations: "School",
  //     startDate: "5 weeks",
  //     country: "Brazil",
  //     ecommerceExperience: 6,
  //     softwareToolExperience: "Salesforce",
  //     graveyardAvailability: "No",
  //     studyingStatus: "No",
  //     rehirable: "No",
  //     currency: "BRL",
  //     applicationCode: "APP010",
  //     salesExperience: 9,
  //     voiceIntroductionLink: "link10.com",
  //     speedTestLink: "speedtest10.com",
  //     applicationResumeLink: "resume10.com",
  //   },
  // ];



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

  const { data, isLoading, error, isError, isFetching } = useFetchCSTableData(
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
          <div className=" w-[160px] opacity-50 flex items-center justify-center  rounded-full py-2 text-sm font-normal bg-[#69C920] text-[white]">
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
          Loading={isLoading}
          TableWidth="90vw"
          TableHeight="full"
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
