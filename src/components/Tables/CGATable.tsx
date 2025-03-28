import { useState } from "react";
import CustomTable from "../CustomTableComponent/CustomTableComponent";
import { Check, ExternalLink } from "lucide-react";

export default function CGATable() {
  const ColumnData = [
    {
      name: "Ticket Name",
      width: 150,
      sticky: true,
      keyword: "ticketName",
      sorting: true,
    },
    {
      name: "RS (Vetter)",
      width: 150,
      sticky: true,
      keyword: "rsVetter",
      sorting: true,
    },
    {
      name: "Q1",
      width: 400,
      sticky: false,
      keyword: "q1",
      sorting: true,
    },
    {
      name: "Q2",
      width: 400,
      sticky: false,
      keyword: "q2",
      sorting: true,
    },
    {
      name: "Q3",
      width: 400,
      sticky: false,
      keyword: "q3",
      sorting: true,
    },
    {
      name: "Q4",
      width: 450,
      sticky: false,
      keyword: "q4",
      sorting: true,
    },
    {
      name: "Q5",
      width: 600,
      sticky: false,
      keyword: "q5",
      sorting: true,
    },
    {
      name: "Email",
      width: 200,
      sticky: false,
      keyword: "email",
      sorting: true,
    },
    {
      name: "Phone Number",
      width: 150,
      sticky: false,
      keyword: "phoneNumber",
      sorting: true,
    },
    {
      name: "Skills Assessment Score",
      width: 200,
      sticky: false,
      keyword: "skillsAssessmentScore",
      sorting: true,
    },
    {
      name: "Device Processor Specs",
      width: 200,
      sticky: false,
      keyword: "deviceProcessorSpecs",
      sorting: true,
    },
    {
      name: "Device Ram/Memory Capacity",
      width: 200,
      sticky: false,
      keyword: "deviceRamMemoryCapacity",
      sorting: true,
    },
    {
      name: "Years of Graphic Design Experience",
      width: 250,
      sticky: false,
      keyword: "graphicDesignExperience",
      sorting: true,
    },
    {
      name: "Years of Adobe Creative Cloud Experience",
      width: 280,
      sticky: false,
      keyword: "adobeCreativeCloudExperience",
      sorting: true,
    },
    {
      name: "Years of Video Editing Experience",
      width: 250,
      sticky: false,
      keyword: "videoEditingExperience",
      sorting: true,
    },
    {
      name: "What is your availability?",
      width: 250,
      sticky: false,
      keyword: "availability",
      sorting: true,
    },
    {
      name: "What is your current employment status?",
      width: 280,
      sticky: false,
      keyword: "employmentStatus",
      sorting: true,
    },
    {
      name: "Existing Commitments/Obligations",
      width: 280,
      sticky: false,
      keyword: "existingCommitments",
      sorting: true,
    },
    {
      name: "If Hired, How Soon Would You Be Able To Get Started?",
      width: 350,
      sticky: false,
      keyword: "startDate",
      sorting: true,
    },
    {
      name: "What country are you applying from?",
      width: 280,
      sticky: false,
      keyword: "applyingCountry",
      sorting: true,
    },
    {
      name: "Cover Letter",
      width: 200,
      sticky: false,
      keyword: "coverLetter",
      sorting: false,
    },
    {
      name: "Years of E-commerce Experience",
      width: 250,
      sticky: false,
      keyword: "ecommerceExperience",
      sorting: true,
    },
    {
      name: "Speed Test Link",
      width: 150,
      sticky: false,
      keyword: "speedTestLink",
      sorting: true,
      child: (item: any) => (
        <div className="text-[#4285F4] cursor-pointer underline">
          {item.speedTestLink}
        </div>
      ),
    },
    {
      name: "Application Resume Link",
      width: 200,
      sticky: false,
      keyword: "applicationResumeLink",
      sorting: true,
      child: (item: any) => (
        <div className="text-[#4285F4] cursor-pointer underline">
          {item.applicationResumeLink}
        </div>
      ),
    },
    {
      name: "Creative Portfolio Link",
      width: 200,
      sticky: false,
      keyword: "creativePortfolioLink",
      sorting: true,
      child: (item: any) => (
        <div className="text-[#4285F4] cursor-pointer underline">
          {item.creativePortfolioLink}
        </div>
      ),
    },
  ];

  const DummyData = [
    {
      ticketName: "Ticket 1",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email1@example.com",
      phoneNumber: "123-456-7890",
      skillsAssessmentScore: 85,
      deviceProcessorSpecs: "Intel i7",
      deviceRamMemoryCapacity: "16GB",
      graphicDesignExperience: 5,
      adobeCreativeCloudExperience: 7,
      videoEditingExperience: 3,
      availability: "Full-time",
      employmentStatus: "Employed",
      existingCommitments: "None",
      startDate: "Immediately",
      applyingCountry: "USA",
      coverLetter: "Link1",
      ecommerceExperience: 4,
      speedTestLink: "speedtest.net/1",
      applicationResumeLink: "resume.com/1",
      creativePortfolioLink: "portfolio.com/1",
    },
    {
      ticketName: "Ticket 2",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email2@example.com",
      phoneNumber: "987-654-3210",
      skillsAssessmentScore: 92,
      deviceProcessorSpecs: "AMD Ryzen 7",
      deviceRamMemoryCapacity: "32GB",
      graphicDesignExperience: 8,
      adobeCreativeCloudExperience: 9,
      videoEditingExperience: 6,
      availability: "Part-time",
      employmentStatus: "Unemployed",
      existingCommitments: "Some",
      startDate: "2 weeks",
      applyingCountry: "Canada",
      coverLetter: "Link2",
      ecommerceExperience: 6,
      speedTestLink: "speedtest.net/2",
      applicationResumeLink: "resume.com/2",
      creativePortfolioLink: "portfolio.com/2",
    },
    {
      ticketName: "Ticket 3",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email3@example.com",
      phoneNumber: "111-222-3333",
      skillsAssessmentScore: 78,
      deviceProcessorSpecs: "Intel i5",
      deviceRamMemoryCapacity: "8GB",
      graphicDesignExperience: 2,
      adobeCreativeCloudExperience: 4,
      videoEditingExperience: 1,
      availability: "Full-time",
      employmentStatus: "Self-employed",
      existingCommitments: "A lot",
      startDate: "1 month",
      applyingCountry: "UK",
      coverLetter: "Link3",
      ecommerceExperience: 2,
      speedTestLink: "speedtest.net/3",
      applicationResumeLink: "resume.com/3",
      creativePortfolioLink: "portfolio.com/3",
    },
    {
      ticketName: "Ticket 4",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email4@example.com",
      phoneNumber: "444-555-6666",
      skillsAssessmentScore: 88,
      deviceProcessorSpecs: "AMD Ryzen 5",
      deviceRamMemoryCapacity: "16GB",
      graphicDesignExperience: 6,
      adobeCreativeCloudExperience: 8,
      videoEditingExperience: 4,
      availability: "Part-time",
      employmentStatus: "Employed",
      existingCommitments: "None",
      startDate: "3 weeks",
      applyingCountry: "Germany",
      coverLetter: "Link4",
      ecommerceExperience: 5,
      speedTestLink: "speedtest.net/4",
      applicationResumeLink: "resume.com/4",
      creativePortfolioLink: "portfolio.com/4",
    },
    {
      ticketName: "Ticket 5",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email5@example.com",
      phoneNumber: "777-888-9999",
      skillsAssessmentScore: 95,
      deviceProcessorSpecs: "Intel i9",
      deviceRamMemoryCapacity: "64GB",
      graphicDesignExperience: 10,
      adobeCreativeCloudExperience: 10,
      videoEditingExperience: 8,
      availability: "Full-time",
      employmentStatus: "Unemployed",
      existingCommitments: "Some",
      startDate: "Immediately",
      applyingCountry: "France",
      coverLetter: "Link5",
      ecommerceExperience: 8,
      speedTestLink: "speedtest.net/5",
      applicationResumeLink: "resume.com/5",
      creativePortfolioLink: "portfolio.com/5",
    },
    {
      ticketName: "Ticket 6",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email6@example.com",
      phoneNumber: "321-654-0987",
      skillsAssessmentScore: 80,
      deviceProcessorSpecs: "AMD Ryzen 9",
      deviceRamMemoryCapacity: "32GB",
      graphicDesignExperience: 3,
      adobeCreativeCloudExperience: 5,
      videoEditingExperience: 2,
      availability: "Part-time",
      employmentStatus: "Self-employed",
      existingCommitments: "A lot",
      startDate: "2 weeks",
      applyingCountry: "Japan",
      coverLetter: "Link6",
      ecommerceExperience: 3,
      speedTestLink: "speedtest.net/6",
      applicationResumeLink: "resume.com/6",
      creativePortfolioLink: "portfolio.com/6",
    },
    {
      ticketName: "Ticket 7",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email7@example.com",
      phoneNumber: "901-234-5678",
      skillsAssessmentScore: 75,
      deviceProcessorSpecs: "Intel Xeon",
      deviceRamMemoryCapacity: "16GB",
      graphicDesignExperience: 1,
      adobeCreativeCloudExperience: 3,
      videoEditingExperience: 1,
      availability: "Full-time",
      employmentStatus: "Employed",
      existingCommitments: "None",
      startDate: "1 month",
      applyingCountry: "Australia",
      coverLetter: "Link7",
      ecommerceExperience: 1,
      speedTestLink: "speedtest.net/7",
      applicationResumeLink: "resume.com/7",
      creativePortfolioLink: "portfolio.com/7",
    },
    {
      ticketName: "Ticket 8",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email8@example.com",
      phoneNumber: "876-543-2109",
      skillsAssessmentScore: 90,
      deviceProcessorSpecs: "AMD Threadripper",
      deviceRamMemoryCapacity: "64GB",
      graphicDesignExperience: 7,
      adobeCreativeCloudExperience: 9,
      videoEditingExperience: 5,
      availability: "Part-time",
      employmentStatus: "Unemployed",
      existingCommitments: "Some",
      startDate: "3 weeks",
      applyingCountry: "Brazil",
      coverLetter: "Link8",
      ecommerceExperience: 7,
      speedTestLink: "speedtest.net/8",
      applicationResumeLink: "resume.com/8",
      creativePortfolioLink: "portfolio.com/8",
    },
    {
      ticketName: "Ticket 9",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email9@example.com",
      phoneNumber: "234-567-8901",
      skillsAssessmentScore: 82,
      deviceProcessorSpecs: "Intel Celeron",
      deviceRamMemoryCapacity: "8GB",
      graphicDesignExperience: 4,
      adobeCreativeCloudExperience: 6,
      videoEditingExperience: 3,
      availability: "Full-time",
      employmentStatus: "Self-employed",
      existingCommitments: "A lot",
      startDate: "Immediately",
      applyingCountry: "India",
      coverLetter: "Link9",
      ecommerceExperience: 4,
      speedTestLink: "speedtest.net/9",
      applicationResumeLink: "resume.com/9",
      creativePortfolioLink: "portfolio.com/9",
    },
    {
      ticketName: "Ticket 10",
      rsVetter: "RS(Vetter)",
      q1: "What did you do on the day of your last birthday?",
      q2: "Imagine you woke up on your perfect day today! Tell us what you are doing this day",
      q3: "Tell us about what success looks like for you in the next 5 years.",
      q4: "What adjustments would you make to this photo to make it more visually appealing? (identify assets to use)",
      q5: "Can you describe your design process from start to finish? How do you approach a new design project and what steps do you take to bring it to completion?",
      email: "email10@example.com",
      phoneNumber: "789-012-3456",
      skillsAssessmentScore: 87,
      deviceProcessorSpecs: "AMD Athlon",
      deviceRamMemoryCapacity: "16GB",
      graphicDesignExperience: 6,
      adobeCreativeCloudExperience: 7,
      videoEditingExperience: 4,
      availability: "Part-time",
      employmentStatus: "Employed",
      existingCommitments: "None",
      startDate: "2 weeks",
      applyingCountry: "China",
      coverLetter: "Link10",
      ecommerceExperience: 5,
      speedTestLink: "speedtest.net/10",
      applicationResumeLink: "resume.com/10",
      creativePortfolioLink: "portfolio.com/10",
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
      <div className=" flex w-full justify-between p-2">
        <div className=" flex items-center gap-3">
          <span className=" text-xl font-semibold">Overview</span>
          <div className=" w-[160px] opacity-50  flex items-center justify-center border  rounded-full py-2 text-sm font-normal bg-[white]">
            Select RS
          </div>
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
}
