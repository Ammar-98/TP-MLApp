import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
// import { SheetIcon } from "@/lib/Icons";
// import { failingReasons } from '@/components/StaticData/FailingReason'
import {
  // ArrowUpDown,
  ChevronRightCircle,
  // ArrowLeftCircle,
  ChevronLeftCircle,
  ArrowUpWideNarrow,
} from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
import { Progress } from "@/components/ui/progress";
import { useQuestionResultStore } from "@/store/useQuestionResultStore";
import Loading from "./Loading";
import { FailCandidateButton } from "./FailCandidateButton";
import { PendingButton } from "./PendingButton";
import { CandidatePassButton } from "./CandidatepassButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InviteToHireFlixButton } from "./InviteToHireFlix";

interface ChildProps {
  refetch: () => Promise<any>; // Define the prop type for the refetch function
}

const Header = ({ refetch }: ChildProps) => {
  const { access_token } = useAuthStore();
  const {
    setAscApplicant,
    ascApplication,
    setNextApplicant,
    setPrevApplicant,
  } = useQuestionResultStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["user-me"],
    queryFn: () => getUserData(),
  });
  const getUserData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/me`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const candidate = await res.json();
      console.log("candidate=====================>>>>>>>>>>>>", candidate);
      if (res.status === 401) {
        return { message: "Not authenticated" };
      }
      return candidate;
    } catch (error: any) {
      return { message: "Internal Server Error" };
    }
  };

  if (isLoading) return <Loading />;

  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message) {
    if (data.message === "Not authenticated")
      return (
        <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
      );
    return <p className=" text-base text-[#69C920]">{data.message}</p>;
  }
  if (data?.detail == "No Candidate Found") {
    return <p className=" text-base text-[#69C920]"> No Application Found</p>;
  }
  console.log(data);

  // const checkManualQuestionGrading = () => {
  //   let allQuestions
  //   if (candidate_Type == 'CS') {
  //     // Combine all question arrays into one array
  //     allQuestions = [
  //       ...question1_Result,
  //       ...question2_Result,
  //       ...question3_Result,
  //       ...question4_Result,
  //       ...question5_Result,
  //     ]

  //     // Check if any value is equal to 0
  //     if (allQuestions.some((value) => parseFloat(value) === 0)) {
  //       // At least one value is equal to 0, send old values
  //       alert('ML VAlues will be pushed')
  //     } else {
  //       // All values are greater than 0, send new values
  //       alert('NEW VALUES FOR CS WILL BE PUSHED')
  //     }
  //   } else {
  //     allQuestions = [
  //       ...question1_Result,
  //       ...question2_Result,
  //       ...question3_Result,
  //     ]
  //     // Check if any value is equal to 0
  //     if (allQuestions.some((value) => parseFloat(value) === 0)) {
  //       // At least one value is equal to 0, send old values
  //       alert('ML VAlues will be pushed')
  //     } else {
  //       // All values are greater than 0, send new values
  //       alert('NEW VALUES FOR !CS WILL BE PUSHED')
  //     }
  //   }
  // }
  console.log(data);
  const handleNext = () => {
    setNextApplicant(),
      setTimeout(() => {
        refetch();
      }, 0);
    return;
  };
  return (
    <header
      className=" flex gap-x-10 w-full px-10 py-1"
      style={{
        paddingBottom: "3vh",
        // backgroundImage: `linear-gradient(
        //   90deg,
        //   rgba(201, 255, 206, 0.52) 0%,
        //   rgba(171, 254, 206, 0.09) 33.33%,
        //   rgba(169, 177, 243, 0.44) 66.67%,
        //   rgba(158, 0, 255, 0.05) 100%
        // )`,
        backgroundImage: `linear-gradient(
          90deg,

          #f1f5f5 10%,
    #f1f5f5 10%
        



         
      
        )`,
        paddingTop: "2vh",
      }}
    >
      <div className=" flex items-center w-full gap-x-4">
        <div className="flex items-center gap-x-2">
          <TooltipProvider delayDuration={400}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => {
                    setPrevApplicant(),
                      setTimeout(() => {
                        refetch();
                      }, 0);
                  }}
                >
                  <ChevronLeftCircle
                    className=" w-8 h-8 bg-white rounded-2xl border"
                    color="black"
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent className=" bg-red-400 text-white">
                <p>Previous</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* <SheetIcon /> */}
          <TooltipProvider delayDuration={400}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => {
                    handleNext();
                  }}
                >
                  <ChevronRightCircle
                    className=" w-8 h-8 bg-white rounded-2xl border"
                    color="black"
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent className=" bg-green-400 text-white">
                <p>Next</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <TooltipProvider delayDuration={400}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => {
                  setAscApplicant(),
                    setTimeout(() => {
                      refetch();
                    }, 0);
                }}
              >
                <ArrowUpWideNarrow className="w-8 h-8 text-[black]  cursor-pointer" />
              </button>
            </TooltipTrigger>
            <TooltipContent className=" bg-green-400 text-white">
              <p>Order by {ascApplication === "true" ? "Oldest" : "Newest"} </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center gap-x-4 w-full ">
          <Progress
            value={(data?.total_graded / data?.total_assigned) * 100}
            className=" w-96 bg-gray-400 h-2"
          />
          <span className=" text-[#1ea656] font-semibold text-sm">
            {data?.total_graded}/{data?.total_assigned}
          </span>
        </div>
      </div>

      <div className="flex w-full gap-x-2 items-center justify-end">
        <PendingButton refetch={refetch} />
        <FailCandidateButton refetch={refetch} />
        <CandidatePassButton refetch={refetch} />
        <InviteToHireFlixButton refetch={refetch}/>
      </div>
    </header>
  );
};

export default Header;
