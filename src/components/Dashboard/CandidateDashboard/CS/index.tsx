import Header from "@/components/Dashboard/CandidateDashboard/Header/Header";
import {
  questionsAGA,
  questionsCGA,
  questionsCS,
} from "@/components/StaticData/QuesionsData";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuestionResultStore } from "@/store/useQuestionResultStore";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
// import GradingRubicSectionCS from "../GradingRubicSectionCS";

const CandidateTypeCA = () => {
  const { access_token } = useAuthStore();

  const {
    question1_Result,
    question2_Result,
    question3_Result,
    question4_Result,
    question5_Result,
    setQuestion1_Result,
    setQuestion2_Result,
    setQuestion3_Result,
    setQuestion4_Result,
    setQuestion5_Result,
    nextApplication,
    prevApplication,
    setCandidateType,
    setCandidateId_CS,
    setQuestion1_ML_Result,
    setQuestion2_ML_Result,
    setQuestion3_ML_Result,
    setQuestion4_ML_Result,
    setQuestion5_ML_Result,
    candidate_id_cs,
    ascApplication,
  } = useQuestionResultStore();
  const [questions, setquestions] = useState([""]);

  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["candidate-data"],
    queryFn: () => getCandidateData(),
  });
  // console.log('NEXT', nextApplication, 'PREV', prevApplication)

  const getCandidateData = async () => {
    if (candidate_id_cs) {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }/candidate_cs?candidate_id=${candidate_id_cs}&next_candidate=${nextApplication}&prev_candidate=${prevApplication}&asc=${ascApplication}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const candidate = await res.json();
        console.log("NEW CANDIDATE", candidate);

        if (res.status === 401) {
          return { message: "Not authenticated" };
        }
        return candidate;
      } catch (error: any) {
        return { message: "Internal Server Error" };
      }
    }

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/candidate_cs?next_candidate=${nextApplication}&prev_candidate=${prevApplication}&asc=${ascApplication}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const candidate = await res.json();
      // console.log('candidate', candidate)
      if (res.status === 401) {
        return { message: "Not authenticated" };
      }
      return candidate;
    } catch (error: any) {
      return { message: "Internal Server Error" };
    }
  };
  useEffect(() => {
    console.log("dataaaaaa", data);
    if (data) {
      setCandidateId_CS(data?.id);
      if (data.question1_result) {
        setQuestion1_ML_Result(data.question1_result.score);
      }
      if (data.question2_result) {
        setQuestion2_ML_Result(data.question2_result.score);
      }
      if (data.question3_result) {
        setQuestion3_ML_Result(data.question3_result.score);
      }
      if (data.question4_result) {
        setQuestion4_ML_Result(data.question4_result.score);
      }
      if (data.question5_result) {
        setQuestion5_ML_Result(data.question5_result.score);
      }

      if (data?.candidate_type) {
        setCandidateType(data?.candidate_type);
        if (data?.candidate_type === "CS") {
          setquestions(questionsCS);
        } else if (data?.candidate_type === "AGA") {
          setquestions(questionsAGA);
        } else {
          setquestions(questionsCGA);
        }
      }
    }
  }, [data]);

  if (isLoading || isFetching)
    return (
      <div className="grid place-items-center h-screen w-full bg-gray-200">
        <span className="loader" />
      </div>
    );

  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message) {
    if (data.message === "Not authenticated")
      return (
        <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
      );
    return <p className=" text-base text-[#69C920]">{data.message}</p>;
  }
  if (data?.detail == "No Candidate Found") {
    return (
      <p className="  grid place-items-center font-semibold underline text-[#69C920] tracking-widest w-full text-4xl">
        {" "}
        No Candidate Found
      </p>
    );
  }

  const CandidateDetailsView = () => {
    return (
      <div className="px-4 bg-[#ebf3f4] pb-5 max-h-screen overflow-y-scroll no-scrollbar w-2/5">
        <div className="flex text-black my-2 flex-col  ">
          <h1 style={{ fontWeight: "600" }} className=" text-lg font-medium">
            Candidate Application
          </h1>
          <div className=" font-normal text-sm text-[#163143B2] pt-4">
            {" "}
            Details
          </div>
          <div className="flex gap-x-2 pt-2">
            <span
              className={` ${
                data?.repeat ? "bg-red-500" : "bg-[#FAFFF6]"
              } text-sm p-2 px-4 text-black rounded-2xl  flex items-center justify-center border-[#A8A8A8] drop-shadow-sm`}
            >
              Duplicate: {data?.repeat ? "Yes" : "No"}
            </span>

            <span
              className={` ${
                data?.candidate_type == "CS" ? "bg-[#FAFFF6]" : "bg-[#faa946]"
              } text-black p-2 text-sm px-4 rounded-2xl  flex items-center justify-center border-[#A8A8A8] drop-shadow-sm`}
            >
              Type: {data?.candidate_type}
            </span>
          </div>
          <div className=" font-normal text-sm text-[#163143B2] pt-4 pb-2">
            {" "}
            Links
          </div>
          <div className=" lg:text-sm text-xs text-center flex flex-col gap-x-3 gap-y-2 justify-between ">
            <button
              onClick={() =>
                data?.please_record_a_short_loom_video_introducing_yourself
                  ? window.open(
                      data?.please_record_a_short_loom_video_introducing_yourself
                    )
                  : alert("Voice Introduction Link Not Found")
              }
              className={` flex gap-2 items-center text-sm font-normal text-[#163143] text-left   tracking-[1px] hover:text-black duration-300 after:content-[''] after:bg-[#6BF4A4] after:h-[3px] after:w-[100%] after:left-0 after:-bottom-[10px] after:absolute`}
            >
              Voice Introduction Link{" "}
              <ExternalLink size={17} strokeWidth={2} color="#69C920" />
            </button>
            <button
              onClick={() =>
                data?.Speedtest_Link
                  ? window.open(data?.Speedtest_Link)
                  : alert("Speed Test Link Not Found")
              }
              className={`flex gap-2 text-sm font-normal text-left text-[#163143]   tracking-[1px] hover:text-black duration-300 after:content-[''] after:bg-[#6BF4A4] after:h-[3px] after:w-[100%] after:left-0 after:-bottom-[10px] after:absolute`}
            >
              Speed Test Link{" "}
              <ExternalLink size={17} strokeWidth={2} color="#69C920" />
            </button>
            <button
              onClick={() =>
                data?.Applicant_Resume
                  ? window.open(data?.Applicant_Resume)
                  : alert("Application Resume Link Not Found")
              }
              className={`flex gap-2 text-sm font-normal text-left text-[#163143]  tracking-[1px] hover:text-black duration-300 after:content-[''] after:bg-[#6BF4A4] after:h-[3px] after:w-[100%] after:left-0 after:-bottom-[10px] after:absolute`}
            >
              Application Resume Link{" "}
              <ExternalLink size={17} strokeWidth={2} color="#69C920" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 pt-4 ">
          <div className="flex gap-x-5 text-sm">
            <div className="grow flex flex-col gap-y-2">
              <Label
                className="text-sm font-normal  text-[#163143B2]"
                htmlFor="firstName"
              >
                First Name
              </Label>
              <Input
                className="bg-white  h-8 text-sm focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
                name="firstName"
                value={data?.First_Name ? data.First_Name : "Not Provided"}
                readOnly
                type="text"
              />
            </div>
            <div className="grow flex flex-col gap-y-2">
              <Label
                className="text-sm font-normal text-[#163143B2]"
                htmlFor="lastName"
              >
                Last Name
              </Label>
              <Input
                className="bg-white  text-sm h-8 focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
                name="lastName"
                type="text"
                value={data?.Last_Name ? data.Last_Name : "Not Provided"}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label
              className="text-sm font-normal text-[#163143B2]"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              className="bg-white h-9 rounded-full font-normal text-[#163143]  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
              name="email"
              value={data?.Email_Address ? data.Email_Address : "Not Provided"}
              readOnly
              type="text"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label
              className="text-sm font-normal text-[#163143B2]"
              htmlFor="phoneNumber"
            >
              Phone Number
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="phoneNumber"
              value={data?.phonenumber ? data.phonenumber : "Not Provided"}
              readOnly
              type="text"
            />
          </div>
          <div className="grow flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Skills Assessment Score"
            >
              Skills Assessment Score
            </Label>
            <Input
              className="bg-white   text-sm h-8 focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Skills Assessment Score"
              type="text"
              value={
                data?.Skill_Assesment_Score
                  ? data.Skill_Assesment_Score
                  : "Not Provided"
              }
              readOnly
            />
          </div>
          <div className="flex gap-x-5 text-sm">
            <div className="grow flex flex-col gap-y-2">
              <Label
                className="text-sm text-[#163143B2] font-normal"
                htmlFor="Years of Customer Service Experience"
              >
                Years of Customer Service Experience
              </Label>
              <Input
                className="bg-white  h-8 text-sm focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
                name="Years of Customer Service Experience"
                value={
                  data?.Years_CS_Experience
                    ? data.Years_CS_Experience
                    : "Not Provided"
                }
                readOnly
                type="text"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="What is your availability?"
            >
              What is your availability?
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="What is your availability?"
              value={data?.Availability ? data.Availability : "Not Provided"}
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="What is your current employment status?"
            >
              What is your current employment status?
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="What is your current employment status?"
              value={
                data?.Current_Employment_Status
                  ? data.Current_Employment_Status
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Existing Commitments/Obligations"
            >
              Existing Commitments/Obligations
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Existing Commitments/Obligations"
              value={
                data?.Existing_Commitment
                  ? data.Existing_Commitment
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="If Hired, How Soon Would You Be Able To Get Started?"
            >
              If Hired, How Soon Would You Be Able To Get Started?
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="If Hired, How Soon Would You Be Able To Get Started?"
              value={
                data?.Tentative_Start_Date
                  ? data.Tentative_Start_Date
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="What country are you applying from?"
            >
              What country are you applying from?
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="What country are you applying from?"
              value={data?.Country ? data.Country : "Not Provided"}
              readOnly
              type="text"
            />
          </div>

          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Years of E-commerce Experience"
            >
              Years of E-commerce Experience
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Years of E-commerce Experience"
              value={
                data?.Year_Ecom_Experience
                  ? data.Year_Ecom_Experience
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2 ">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Software Tool Experience"
            >
              Software Tool Experience
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Software Tool Experience"
              value={
                data?.Software_Tool_Experience
                  ? data.Software_Tool_Experience
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Available To Work Graveyard? (9AM - 6PM EST/PST)"
            >
              Available To Work Graveyard? (9AM - 6PM EST/PST)
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Available To Work Graveyard? (9AM - 6PM EST/PST)"
              value={
                data?.Graveyard_Availability
                  ? data.Graveyard_Availability
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Currently Studying Or Planning To Study"
            >
              Currently Studying Or Planning To Study
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Currently Studying Or Planning To Study"
              value={
                data?.Studying_Planning_Studying
                  ? data.Studying_Planning_Studying
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm font-normal text-[#163143B2]"
              htmlFor="Rehirable"
            >
              Rehirable
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Rehirable"
              value={data?.rehirable ? data.rehirable : "Not Provided"}
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm font-normal text-[#163143B2]"
              htmlFor="Currency"
            >
              Currency
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Currency"
              value={data?.currency ? data.currency : "Not Provided"}
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Device Processor Specs"
            >
              Device Processor Specs
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Device Processor Specs"
              value={
                data?.device_processor_specs
                  ? data.device_processor_specs
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Device Ram/Memory Capacity"
            >
              Device Ram/Memory Capacity
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Device Ram/Memory Capacity"
              value={
                data?.device_ram_memory_capacity
                  ? data.device_ram_memory_capacity
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Application Code"
            >
              Application Code
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Application Code"
              value={
                data?.Application_Code ? data.Application_Code : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>

          <div className=" flex flex-col gap-y-2">
            <Label
              className="text-sm text-[#163143B2] font-normal"
              htmlFor="Years Of Sales Experience"
            >
              Years Of Sales Experience
            </Label>
            <Input
              className="bg-white h-9  focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920] rounded-full font-normal text-[#163143]"
              name="Years Of Sales Experience"
              value={
                data?.years_of_sales_experience
                  ? data.years_of_sales_experience
                  : "Not Provided"
              }
              readOnly
              type="text"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" flex flex-col max-h-screen w-full">
      <Header refetch={refetch} />

      <div
        style={{
          backgroundImage: `linear-gradient(90deg,#f1f5f5,#f1f5f5)`,
        }}
        className=" flex  overflow-hidden pt-3  "
      >
        <QuestionnaireView
          setQuestion1_Result={setQuestion1_Result}
          setQuestion2_Result={setQuestion2_Result}
          setQuestion3_Result={setQuestion3_Result}
          setQuestion4_Result={setQuestion4_Result}
          setQuestion5_Result={setQuestion5_Result}
          question1_Result={question1_Result}
          question2_Result={question2_Result}
          question3_Result={question3_Result}
          question4_Result={question4_Result}
          question5_Result={question5_Result}
          data={data}
          questions={questions}
        />
        <CandidateDetailsView />
      </div>
    </div>
  );
};

export default CandidateTypeCA;

const QuestionnaireView = ({
  setQuestion1_Result,
  setQuestion2_Result,
  setQuestion3_Result,
  setQuestion4_Result,
  setQuestion5_Result,
  question1_Result,
  question2_Result,
  question3_Result,
  question4_Result,
  question5_Result,
  data,
  questions,
}: any) => {
  return (
    <div className=" bg-[#f1f5f5] pl-2 pb-5 max-h-screen overflow-y-scroll no-scrollbar w-3/5 ">
      <div
        className="flex text-[black] "
        style={{ alignItems: "center", paddingLeft: "10px", gap: "10px" }}
      >
        <h1 style={{ fontWeight: "600" }} className=" text-lg font-medium">
          {data?.candidate_type} Quiz Questionnaire
        </h1>
      </div>
      <div className=" pl-2 pt-10 pb-5 w-full gap-3 flex flex-col  ">
        <div className=" text-[#163143B2] text-sm font-semibold">
          Questionnaire AI Scores:
        </div>
        <div className=" flex w-full gap-4">
          <div className=" flex gap-1">
            <div className={`font-semibold text-base `}>Avg AI Score:</div>
            <div
              className={`
         ${
           data?.aggregate_score_ml >= 89
             ? "text-[#69C920]"
             : data?.aggregate_score_ml >= 79
             ? "text-[#69C920]"
             : "text-[#FF3434] "
         } `}
            >
              {data?.aggregate_score_ml?.toFixed(1)?.replace(/[.,]0$/, "")}
            </div>
          </div>

          {questions.map((_: any, index: any) => (
            <div className=" flex gap-1">
              <div className={`font-semibold text-base `}>Q{index + 1}:</div>
              <div
                className={` text-[#69C920]
         ${
           data[`question${index + 1}_result`]?.score >= 89
             ? "text-[#69C920]"
             : data[`question${index + 1}_result`]?.score >= 79
             ? "text-[#69C920]"
             : "text-red-400 "
         } `}
              >
                {String(data[`question${index + 1}_result`]?.score).includes(
                  "."
                )
                  ? data[`question${index + 1}_result`]?.score
                      .toFixed(1)
                      .replace(/[.,]0$/, "")
                  : data[`question${index + 1}_result`]?.score}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-5 text-sm ">
        <div className=" flex flex-col gap-y-1 ">
          <div className=" pl-2 font-bold text-sm tect-[#163143B2">
            Question 1
          </div>
          <span className="  font-normal text-sm text-[#163143B2] mx-2 flex  gap-x-1">
            {" "}
            <span>{questions[0]}</span>{" "}
          </span>
          <div className=" pl-2 text-sm font-semibold text-[#163143B2">
            Response:
          </div>
          <div className="p-3  rounded-2xl bg-white relative mr-6">
            {data[`CS_Quiz_1`]}
          </div>
          <div className=" pl-2 text-sm font-semibold text-[#163143] pt-3 ">
            Update Yout Score Here:
          </div>
          <div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  setQuestion1_Result("");
                }
              }}
              type="number"
              name="question_1_grade"
              id="question_1_grade"
              className=" w-11 text-center focus:outline-none border-[#69C920] ml-2 border bg-white  min-w-0  rounded-md text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={100}
              value={question1_Result == "0" ? "0" : question1_Result}
              onChange={(e) =>
                Number(e.target.value) <= 100 && Number(e.target.value) > 0
                  ? setQuestion1_Result(e.target.value)
                  : null
              }
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-1 ">
          <div className=" pl-2 font-bold text-sm tect-[#163143B2">
            Question 2
          </div>
          <span className="  font-normal text-sm text-[#163143B2] mx-2 flex  gap-x-1">
            {" "}
            <span>{questions[1]}</span>{" "}
          </span>
          <div className=" pl-2 text-sm font-semibold text-[#163143B2">
            Response:
          </div>
          <div className="p-3 text-[#808080] rounded-2xl bg-white relative mr-6">
            {data[`CS_Quiz_2`]}
          </div>
          <div className=" pl-2 text-sm font-semibold text-[#163143] pt-3 ">
            Update Yout Score Here:
          </div>
          <div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  setQuestion2_Result("");
                }
              }}
              type="number"
              name="question_2_grade"
              id="question_2_grade"
              className=" w-11 text-center focus:outline-none border-[#69C920] ml-2 border bg-white  min-w-0  rounded-md text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={100}
              value={question2_Result == "0" ? "0" : question2_Result}
              onChange={(e) =>
                Number(e.target.value) <= 100 && Number(e.target.value) > 0
                  ? setQuestion2_Result(e.target.value)
                  : null
              }
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-1 ">
          <div className=" pl-2 font-bold text-sm tect-[#163143B2">
            Question 3
          </div>
          <span className="  font-normal text-sm text-[#163143B2] mx-2 flex  gap-x-1">
            {" "}
            <span>{questions[2]}</span>{" "}
          </span>
          <div className=" pl-2 text-sm font-semibold text-[#163143B2">
            Response:
          </div>
          <div className="p-3 text-[#808080] rounded-2xl bg-white relative mr-6">
            {data[`CS_Quiz_3`]}
          </div>
          <div className=" pl-2 text-sm font-semibold text-[#163143] pt-3 ">
            Update Yout Score Here:
          </div>
          <div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  setQuestion3_Result("");
                }
              }}
              type="number"
              name="question_2_grade"
              id="question_2_grade"
              className=" w-11 text-center focus:outline-none border-[#69C920] ml-2 border bg-white  min-w-0  rounded-md text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={100}
              value={question3_Result == "0" ? "0" : question3_Result}
              onChange={(e) =>
                Number(e.target.value) <= 100 && Number(e.target.value) > 0
                  ? setQuestion3_Result(e.target.value)
                  : null
              }
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-1 ">
          <div className=" pl-2 font-bold text-sm tect-[#163143B2">
            Question 4
          </div>
          <span className="  font-normal text-sm text-[#163143B2] mx-2 flex  gap-x-1">
            {" "}
            <span>{questions[3]}</span>{" "}
          </span>
          <div className=" pl-2 text-sm font-semibold text-[#163143B2">
            Response:
          </div>
          <div className="p-3 text-[#808080] rounded-2xl bg-white relative mr-6">
            {data[`CS_Quiz_4`]}
          </div>
          <div className=" pl-2 text-sm font-semibold text-[#163143] pt-3 ">
            Update Yout Score Here:
          </div>
          <div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  setQuestion4_Result("");
                }
              }}
              type="number"
              name="question_2_grade"
              id="question_2_grade"
              className=" w-11 text-center focus:outline-none border-[#69C920] ml-2 border bg-white  min-w-0  rounded-md text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={100}
              value={question4_Result == "0" ? "0" : question4_Result}
              onChange={(e) =>
                Number(e.target.value) <= 100 && Number(e.target.value) > 0
                  ? setQuestion4_Result(e.target.value)
                  : null
              }
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-1 ">
          <div className=" pl-2 font-bold text-sm tect-[#163143B2">
            Question 5
          </div>
          <span className="  font-normal text-sm text-[#163143B2] mx-2 flex  gap-x-1">
            {" "}
            <span>{questions[4]}</span>{" "}
          </span>
          <div className=" pl-2 text-sm font-semibold text-[#163143B2">
            Response:
          </div>
          <div className="p-3 text-[#808080] rounded-2xl bg-white relative mr-6">
            {data[`CS_Quiz_5`]}
          </div>
          <div className=" pl-2 text-sm font-semibold text-[#163143] pt-3 ">
            Update Yout Score Here:
          </div>
          <div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  setQuestion5_Result("");
                }
              }}
              type="number"
              name="question_2_grade"
              id="question_2_grade"
              className=" w-11 text-center focus:outline-none border-[#69C920] ml-2 border bg-white  min-w-0  rounded-md text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={100}
              value={question5_Result == "0" ? "0" : question5_Result}
              onChange={(e) =>
                Number(e.target.value) <= 100 && Number(e.target.value) > 0
                  ? setQuestion5_Result(e.target.value)
                  : null
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
