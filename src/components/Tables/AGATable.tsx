import { useContext, useEffect, useState } from "react";
import CustomTable from "../CustomTableComponent/CustomTableComponent";
import { Check, ExternalLink } from "lucide-react";
import SelectedRSFilter from "../FIlters/SelectedRSFilter";
import { useFetchAGATableData } from "@/hooks/useFetchAGATableData";
import AppContext from "@/context/AppContext";

export default function AGATable() {
  const ColumnData = [
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

  // const DummyData = [
  //   {
  //     ticketName: "Support Ticket 1",
  //     rsVetter: "John Doe",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
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
  //     administrativeExperience: 2,
  //     priorRoles: "Customer Support",
  //     ecommerceExperience: 1,
  //     softwareToolExperience: "Salesforce",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "Yes",
  //     currency: "USD",
  //     speedTestLink: "http://example.com/speedtest1",
  //     applicationResumeLink: "http://example.com/resume1",
  //   },
  //   {
  //     ticketName: "Inquiry Ticket 2",
  //     rsVetter: "Jane Smith",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test2@example.com",
  //     phoneNumber: "987-654-3210",
  //     skillsAssessmentScore: 92,
  //     customerServiceExperience: 5,
  //     deviceProcessorSpecs: "AMD Ryzen 7",
  //     deviceRamMemoryCapacity: "16GB",
  //     availability: "Part-time",
  //     employmentStatus: "Unemployed",
  //     commitmentsObligations: "Family",
  //     startDate: "2 weeks",
  //     country: "Canada",
  //     administrativeExperience: 4,
  //     priorRoles: "Team Lead",
  //     ecommerceExperience: 3,
  //     softwareToolExperience: "Zendesk",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "Yes",
  //     currency: "CAD",
  //     speedTestLink: "http://example.com/speedtest2",
  //     applicationResumeLink: "http://example.com/resume2",
  //   },
  //   {
  //     ticketName: "Problem Ticket 3",
  //     rsVetter: "Alice Johnson",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test3@example.com",
  //     phoneNumber: "111-222-3333",
  //     skillsAssessmentScore: 78,
  //     customerServiceExperience: 2,
  //     deviceProcessorSpecs: "Intel i3",
  //     deviceRamMemoryCapacity: "4GB",
  //     availability: "Full-time",
  //     employmentStatus: "Employed",
  //     commitmentsObligations: "School",
  //     startDate: "1 month",
  //     country: "UK",
  //     administrativeExperience: 1,
  //     priorRoles: "Intern",
  //     ecommerceExperience: 0,
  //     softwareToolExperience: "Freshdesk",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "No",
  //     currency: "GBP",
  //     speedTestLink: "http://example.com/speedtest3",
  //     applicationResumeLink: "http://example.com/resume3",
  //   },
  //   {
  //     ticketName: "Question Ticket 4",
  //     rsVetter: "Bob Williams",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test4@example.com",
  //     phoneNumber: "444-555-6666",
  //     skillsAssessmentScore: 88,
  //     customerServiceExperience: 4,
  //     deviceProcessorSpecs: "Apple M1",
  //     deviceRamMemoryCapacity: "8GB",
  //     availability: "Part-time",
  //     employmentStatus: "Self-employed",
  //     commitmentsObligations: "Freelance",
  //     startDate: "ASAP",
  //     country: "Australia",
  //     administrativeExperience: 3,
  //     priorRoles: "Consultant",
  //     ecommerceExperience: 2,
  //     softwareToolExperience: "Zoho",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "Yes",
  //     currency: "AUD",
  //     speedTestLink: "http://example.com/speedtest4",
  //     applicationResumeLink: "http://example.com/resume4",
  //   },
  //   {
  //     ticketName: "Feedback Ticket 5",
  //     rsVetter: "Charlie Brown",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test5@example.com",
  //     phoneNumber: "777-888-9999",
  //     skillsAssessmentScore: 95,
  //     customerServiceExperience: 6,
  //     deviceProcessorSpecs: "Intel i7",
  //     deviceRamMemoryCapacity: "32GB",
  //     availability: "Full-time",
  //     employmentStatus: "Employed",
  //     commitmentsObligations: "None",
  //     startDate: "Negotiable",
  //     country: "Germany",
  //     administrativeExperience: 5,
  //     priorRoles: "Manager",
  //     ecommerceExperience: 4,
  //     softwareToolExperience: "Help Scout",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "Yes",
  //     currency: "EUR",
  //     speedTestLink: "http://example.com/speedtest5",
  //     applicationResumeLink: "http://example.com/resume5",
  //   },
  //   {
  //     ticketName: "Issue Ticket 6",
  //     rsVetter: "Diana Davis",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test6@example.com",
  //     phoneNumber: "333-444-5555",
  //     skillsAssessmentScore: 80,
  //     customerServiceExperience: 1,
  //     deviceProcessorSpecs: "AMD Ryzen 5",
  //     deviceRamMemoryCapacity: "8GB",
  //     availability: "Part-time",
  //     employmentStatus: "Student",
  //     commitmentsObligations: "School",
  //     startDate: "Flexible",
  //     country: "France",
  //     administrativeExperience: 0,
  //     priorRoles: "Volunteer",
  //     ecommerceExperience: 0,
  //     softwareToolExperience: "Intercom",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "No",
  //     currency: "EUR",
  //     speedTestLink: "http://example.com/speedtest6",
  //     applicationResumeLink: "http://example.com/resume6",
  //   },
  //   {
  //     ticketName: "Request Ticket 7",
  //     rsVetter: "Ethan Garcia",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test7@example.com",
  //     phoneNumber: "123-789-4560",
  //     skillsAssessmentScore: 75,
  //     customerServiceExperience: 2,
  //     deviceProcessorSpecs: "Intel Celeron",
  //     deviceRamMemoryCapacity: "4GB",
  //     availability: "Full-time",
  //     employmentStatus: "Unemployed",
  //     commitmentsObligations: "Job Search",
  //     startDate: "2 weeks",
  //     country: "Japan",
  //     administrativeExperience: 1,
  //     priorRoles: "Assistant",
  //     ecommerceExperience: 1,
  //     softwareToolExperience: "LiveAgent",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "Yes",
  //     currency: "JPY",
  //     speedTestLink: "http://example.com/speedtest7",
  //     applicationResumeLink: "http://example.com/resume7",
  //   },
  //   {
  //     ticketName: "Bug Ticket 8",
  //     rsVetter: "Fiona Hernandez",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test8@example.com",
  //     phoneNumber: "654-321-0987",
  //     skillsAssessmentScore: 90,
  //     customerServiceExperience: 3,
  //     deviceProcessorSpecs: "AMD Athlon",
  //     deviceRamMemoryCapacity: "16GB",
  //     availability: "Part-time",
  //     employmentStatus: "Employed",
  //     commitmentsObligations: "Family",
  //     startDate: "1 month",
  //     country: "China",
  //     administrativeExperience: 2,
  //     priorRoles: "Coordinator",
  //     ecommerceExperience: 2,
  //     softwareToolExperience: "Kayako",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "Yes",
  //     currency: "CNY",
  //     speedTestLink: "http://example.com/speedtest8",
  //     applicationResumeLink: "http://example.com/resume8",
  //   },
  //   {
  //     ticketName: "Feature Ticket 9",
  //     rsVetter: "George Lee",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test9@example.com",
  //     phoneNumber: "987-123-6540",
  //     skillsAssessmentScore: 82,
  //     customerServiceExperience: 4,
  //     deviceProcessorSpecs: "Intel Pentium",
  //     deviceRamMemoryCapacity: "32GB",
  //     availability: "Full-time",
  //     employmentStatus: "Self-employed",
  //     commitmentsObligations: "Freelance",
  //     startDate: "ASAP",
  //     country: "India",
  //     administrativeExperience: 3,
  //     priorRoles: "Specialist",
  //     ecommerceExperience: 3,
  //     softwareToolExperience: "osTicket",
  //     graveyardAvailability: "Yes",
  //     studyingStatus: "No",
  //     rehirable: "No",
  //     currency: "INR",
  //     speedTestLink: "http://example.com/speedtest9",
  //     applicationResumeLink: "http://example.com/resume9",
  //   },
  //   {
  //     ticketName: "Improvement Ticket 10",
  //     rsVetter: "Hannah Kim",
  //     q1: "What did you do on the day of your last birthday?",
  //     q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
  //     q3: "Tell us about what success looks like for you in the next 5 years.",
  //     q4: "In your opinion, what are the key qualities or skills that an effective Administrative Growth Assistant should possess? How do you embody these qualities in your work?",
  //     q5: "Can you provide an example of a time when you successfully collaborated with colleagues to achieve a common goal or complete a project? What strategies did you use to contribute to the team's success?",
  //     email: "test10@example.com",
  //     phoneNumber: "456-987-3210",
  //     skillsAssessmentScore: 87,
  //     customerServiceExperience: 5,
  //     deviceProcessorSpecs: "AMD Sempron",
  //     deviceRamMemoryCapacity: "64GB",
  //     availability: "Part-time",
  //     employmentStatus: "Student",
  //     commitmentsObligations: "School",
  //     startDate: "Negotiable",
  //     country: "Brazil",
  //     administrativeExperience: 4,
  //     priorRoles: "Analyst",
  //     ecommerceExperience: 4,
  //     softwareToolExperience: "ServiceNow",
  //     graveyardAvailability: "No",
  //     studyingStatus: "Yes",
  //     rehirable: "Yes",
  //     currency: "BRL",
  //     speedTestLink: "http://example.com/speedtest10",
  //     applicationResumeLink: "http://example.com/resume10",
  //   },
  // ];

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
