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
import { useEffect, useState } from "react";
import GradingRubicSectionCS from "../GradingRubicSectionCS";

const CandidateTypeCA = () => {
  const { access_token } = useAuthStore();

  const {
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
  // console.log(data.id)
  // console.log(data)
  // console.log(data.candidate_type)

  return (
    <div className=" flex flex-col max-h-screen w-full">
      <Header refetch={refetch} />
      {/* <div className=" w-full  flex h-[90vh] bg-[#F1F5F5]">
        <div className=" w-[60%]   py-7 px-7 overflow-y-scroll">
          <div className=" text-black text-lg font-semibold">
            CS Quiz Questionnaire
          </div>
          <div className=" my-5 gap-3">
            <div className=" text-sm font-semibold mb-2">
              Questionnaire AI Score:
            </div>
            <div className=" flex">
              <div className=" flex gap-1">
                <div className=" text-base font-semibold">Avg AI Scores:</div>
                <div
                  className={`${
                    data?.aggregate_score_ml >= 89
                      ? `text-[#69C920]`
                      : data?.aggregate_score_ml >= 79
                      ? `text-[#69C920]`
                      : ` text-[#FF3434]`
                  } font-semibold`}
                >
                  {data?.aggregate_score_ml?.toFixed(1)?.replace(/[.,]0$/, "")}
                </div>
              </div>

              {questions.map((item, index) => (
                <div className=" flex gap-1 pl-5">
                  <div className=" text-base font-semibold">Q{index + 1}:</div>
                  <div
                    className={`${
                      data[`question${index + 1}_result`]?.score >= 89
                        ? `text-[#69C920]`
                        : data[`question${index + 1}_result`]?.score >= 79
                        ? `text-[#69C920]`
                        : ` text-[#FF3434]`
                    } font-semibold`}
                  >
                    {String(
                      data[`question${index + 1}_result`]?.score
                    ).includes(".")
                      ? data[`question${index + 1}_result`]?.score
                          .toFixed(1)
                          .replace(/[.,]0$/, "")
                      : data[`question${index + 1}_result`]?.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {questions.map((item, index) => (
              <div className=" py-4 ">
                <div className=" py-3 text-[15px] font-semibold">
                  Question {index + 1}:
                </div>
                <div className=" pb-3 text-[15px]  font-[300]">
                  Q{index + 1}, {item}
                </div>
                <div>
                  <div className=" pb-1 text-sm font-semibold ">Response:</div>
                  <div className=" bg-white py-3 px-3 rounded-3xl relative">
                    <div
                      className={` bg-[#e4ffe7] ${
                        data[`question${index + 1}_result`] === null
                          ? "hidden"
                          : "flex"
                      } absolute  items-center justify-center  text-sm text-black h-10 w-10 rounded-full border-[#A8A8A8] border top-[-20px] right-[-23px]`}
                    >
                      {String(
                        data[`question${index + 1}_result`]?.score
                      ).includes(".")
                        ? data[`question${index + 1}_result`]?.score
                            .toFixed(1)
                            .replace(/[.,]0$/, "")
                        : data[`question${index + 1}_result`]?.score}
                    </div>
                    <div className=" text-sm ">
                      {data[`CS_Quiz_${index + 1}`]}
                    </div>
                  </div>
                  <div className=" pt-4 text-sm font-semibold">
                    Update your Score Here:
                  </div>
                  <div className=" mt-1 flex ">
                    <div className="border-[#69C920] py-2 px-4 bg-white rounded border-2">
                      89
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-[40%] bg-[#D7E6E7]  py-7 px-7 overflow-y-scroll ">
          <div className=" text-black text-lg font-semibold">
            Candidate Application
          </div>
          <div className=" pt-4 text-[14px] pb-2">Details</div>
          <div className=" flex gap-3">
            <div className=" bg-white border border-[#69C920] rounded-full px-6 py-2 text-sm">
              RS Name:ADDDD
            </div>
            <div className=" flex">
              <div className=" bg-white border  rounded-full px-6 py-2 text-sm">
                Duplicate: {data?.repeat ? "Yes" : "No"}
              </div>
            </div>
          </div>
          <div className=" bg-white border  rounded-full mt-2   w-[100px] flex items-center justify-center py-2 text-sm">
            Type: {data?.candidate_type}
          </div>
          <div className=" pt-4 text-[14px] pb-2">Links</div>
        </div>
      </div> */}
      <div
        style={{
          backgroundImage: `linear-gradient(
    90deg,
   
    #f1f5f5,
    #f1f5f5

  )`,
        }}
        className="grid  grid-cols-3  overflow-hidden pt-3  "
      >
        <section className=" pl-2 pb-5 max-h-screen overflow-y-scroll no-scrollbar ">
          <div
            className="flex text-[black] "
            style={{ alignItems: "center", paddingLeft: "10px", gap: "10px" }}
          >
            <h1 style={{ fontWeight: "600" }} className=" text-lg font-medium">
              {data?.candidate_type} Quiz Questionnaire
            </h1>
            <span
              className={` ${
                data?.aggregate_score_ml >= 89
                  ? "bg-[#e4ffe7] text-black"
                  : data?.aggregate_score_ml >= 79
                  ? "bg-[#CEFF7E]"
                  : "bg-red-400 text-white"
              } text-sm rounded-full w-10 h-10 border flex items-center justify-center border-[#A8A8A8]`}
            >
              {data?.aggregate_score_ml?.toFixed(1)?.replace(/[.,]0$/, "")}
            </span>
          </div>
          <div className="flex flex-col gap-y-3 text-sm ">
            {questions.map((question, index) => (
              <div key={index} className=" flex flex-col gap-y-6 ">
                <span className=" font-medium mx-2 flex  gap-x-1">
                  {" "}
                  Q{index + 1}. <span>{question}</span>{" "}
                </span>
                <div className="p-3 text-[#808080] rounded-2xl bg-white relative mr-6">
                  {data[`CS_Quiz_${index + 1}`]}
                  <span
                    className={` bg-[#e4ffe7] ${
                      data[`question${index + 1}_result`] === null
                        ? "hidden"
                        : "flex"
                    } absolute  items-center justify-center text-black h-10 w-10 rounded-full border-[#A8A8A8] border top-[-20px] right-[-23px]`}
                  >
                    {String(
                      data[`question${index + 1}_result`]?.score
                    ).includes(".")
                      ? data[`question${index + 1}_result`]?.score
                          .toFixed(1)
                          .replace(/[.,]0$/, "")
                      : data[`question${index + 1}_result`]?.score}
                    
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 pb-5 max-h-screen overflow-y-scroll no-scrollbar">
          <div className="flex text-black my-2 flex-col  ">
            <h1 style={{ fontWeight: "600" }} className=" text-lg font-medium">
              Candidate Application
            </h1>
            <div className="flex gap-x-2 pt-2">
              <span
                className={` ${
                  data?.repeat ? "bg-red-500" : "bg-[white]"
                } text-sm p-2 px-4 text-black rounded-2xl  flex items-center justify-center border-[#A8A8A8] drop-shadow-sm`}
              >
                Duplicate: {data?.repeat ? "Yes" : "No"}
              </span>

              <span
                className={` ${
                  data?.candidate_type == "CS" ? "bg-[white]" : "bg-[#faa946]"
                } text-black p-2 text-sm px-4 rounded-2xl  flex items-center justify-center border-[#A8A8A8] drop-shadow-sm`}
              >
                Type: {data?.candidate_type}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-5 text-sm">
              <div className="grow flex flex-col gap-y-2">
                <Label className="text-sm" htmlFor="firstName">
                  First Name
                </Label>
                <Input
                  className="bg-white text-[#808080] h-8 text-sm focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                  name="firstName"
                  value={data?.First_Name ? data.First_Name : "Not Provided"}
                  readOnly
                  type="text"
                />
              </div>
              <div className="grow flex flex-col gap-y-2">
                <Label className="text-sm" htmlFor="lastName">
                  Last Name
                </Label>
                <Input
                  className="bg-white text-[#808080] text-sm h-8 focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                  name="lastName"
                  type="text"
                  value={data?.Last_Name ? data.Last_Name : "Not Provided"}
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-sm" htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                name="email"
                value={
                  data?.Email_Address ? data.Email_Address : "Not Provided"
                }
                readOnly
                type="text"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label className="text-sm" htmlFor="phoneNumber">
                Phone Number
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                name="phoneNumber"
                value={data?.phonenumber ? data.phonenumber : "Not Provided"}
                readOnly
                type="text"
              />
            </div>
            <div className="grow flex flex-col gap-y-2">
              <Label className="text-sm" htmlFor="Skills Assessment Score">
                Skills Assessment Score
              </Label>
              <Input
                className="bg-white text-[#808080] text-sm h-8 focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
                  className="text-sm"
                  htmlFor="Years of Customer Service Experience"
                >
                  Years of Customer Service Experience
                </Label>
                <Input
                  className="bg-white text-[#808080] h-8 text-sm focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
              <Label className="text-sm" htmlFor="What is your availability?">
                What is your availability?
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                name="What is your availability?"
                value={data?.Availability ? data.Availability : "Not Provided"}
                readOnly
                type="text"
              />
            </div>
            <div className=" flex flex-col gap-y-2">
              <Label
                className="text-sm"
                htmlFor="What is your current employment status?"
              >
                What is your current employment status?
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
                className="text-sm"
                htmlFor="Existing Commitments/Obligations"
              >
                Existing Commitments/Obligations
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
                className="text-sm"
                htmlFor="If Hired, How Soon Would You Be Able To Get Started?"
              >
                If Hired, How Soon Would You Be Able To Get Started?
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
                className="text-sm"
                htmlFor="What country are you applying from?"
              >
                What country are you applying from?
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                name="What country are you applying from?"
                value={data?.Country ? data.Country : "Not Provided"}
                readOnly
                type="text"
              />
            </div>
           

            <div className=" lg:text-sm text-xs text-center flex gap-x-3 justify-between my-4">
              <button
                onClick={() =>
                  data?.Applicant_Resume
                    ? window.open(data?.Applicant_Resume)
                    : alert("Application Resume Link Not Found")
                }
                className={`relative  text-[#7000FF] tracking-[1px] hover:text-black duration-300 after:content-[''] after:bg-[#6BF4A4] after:h-[3px] after:w-[100%] after:left-0 after:-bottom-[10px] after:absolute`}
              >
                Application Resume Link
              </button>
            

              <button
                onClick={() =>
                  data?.Speedtest_Link
                    ? window.open(data?.Speedtest_Link)
                    : alert("Speed Test Link Not Found")
                }
                className={`relative  text-[#7000FF] tracking-[1px] hover:text-black duration-300 after:content-[''] after:bg-[#6BF4A4] after:h-[3px] after:w-[100%] after:left-0 after:-bottom-[10px] after:absolute`}
              >
                Speed Test Link
              </button>
             
              <button
                onClick={() =>
                  data?.please_record_a_short_loom_video_introducing_yourself
                    ? window.open(
                        data?.please_record_a_short_loom_video_introducing_yourself
                      )
                    : alert("Voice Introduction Link Not Found")
                }
                className={`relative  text-[#7000FF] tracking-[1px] hover:text-black duration-300 after:content-[''] after:bg-[#6BF4A4] after:h-[3px] after:w-[100%] after:left-0 after:-bottom-[10px] after:absolute`}
              >
                Voice Introduction Link
              </button>
        
            </div>
            <div className=" flex flex-col gap-y-2">
              <Label
                className="text-sm"
                htmlFor="Years of E-commerce Experience"
              >
                Years of E-commerce Experience
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
            <div className=" flex flex-col gap-y-2">
              <Label className="text-sm" htmlFor="Software Tool Experience">
                Software Tool Experience
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
                className="text-sm"
                htmlFor="Available To Work Graveyard? (9AM - 6PM EST/PST)"
              >
                Available To Work Graveyard? (9AM - 6PM EST/PST)
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
                className="text-sm"
                htmlFor="Currently Studying Or Planning To Study"
              >
                Currently Studying Or Planning To Study
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
              <Label className="text-sm" htmlFor="Rehirable">
                Rehirable
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                name="Rehirable"
                value={data?.rehirable ? data.rehirable : "Not Provided"}
                readOnly
                type="text"
              />
            </div>
            <div className=" flex flex-col gap-y-2">
              <Label className="text-sm" htmlFor="Currency">
                Currency
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
                name="Currency"
                value={data?.currency ? data.currency : "Not Provided"}
                readOnly
                type="text"
              />
            </div>
            <div className=" flex flex-col gap-y-2">
              <Label className="text-sm" htmlFor="Device Processor Specs">
                Device Processor Specs
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
              <Label className="text-sm" htmlFor="Device Ram/Memory Capacity">
                Device Ram/Memory Capacity
              </Label>
              <Input
                className="bg-white h-9 text-[#808080] focus-visible:ring-offset-0 drop-shadow-md focus-visible:ring-[#69C920]"
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
          </div>
        </section>
        <GradingRubicSectionCS />
      </div>
    </div>
  );
};

export default CandidateTypeCA;
