import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

import {
  // ArrowUpDown,
  ChevronRightCircle,
  // ArrowLeftCircle,
  ChevronLeftCircle,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
  Info,
} from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { useQuestionResultStore } from "@/store/useQuestionResultStore";
import Loading from "./Loading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PendingButton } from "./PendingButton";
import { FailCandidateButton } from "./FailCandidateButton";
import { CandidatePassButton } from "./CandidatepassButton";
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
      className=" flex gap-x-10 w-full px-10  bg-white h-[7vh]  border-b border-slate-300 "
      style={
        {
          // paddingBottom: "1vh",
          //     backgroundImage: `linear-gradient(
          //       90deg,
          //       #f1f5f5 10%,
          // #f1f5f5 10%
          //     )`,
          // paddingTop: "2vh",
        }
      }
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
                    className=" w-8 h-8 bg-white rounded-2xl "
                    color="black"
                    strokeWidth={1.2}
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
                    className=" w-8 h-8 bg-white rounded-2xl "
                    color="black"
                    strokeWidth={1.2}
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
                className="  items-center justify-center flex h-full"
                onClick={() => {
                  setAscApplicant(),
                    setTimeout(() => {
                      refetch();
                    }, 0);
                }}
              >
                {ascApplication === "true" ? (
                  <ArrowUpWideNarrow
                    strokeWidth={2}
                    className="w-6 h-6 text-[black]  cursor-pointer"
                  />
                ) : (
                  <ArrowDownWideNarrow
                    strokeWidth={2}
                    className="w-6 h-6 text-[black]  cursor-pointer"
                  />
                )}
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
          <div className="flex items-center align-middle gap-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info
                    className="cursor-pointer"
                    width={18}
                    height={18}
                    color="#69C920"
                  />
                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent className="bg-[#163143] text-white">
                  <p>This is the Total Count of CS, AGA, and CGA</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className=" text-[#163143] font-semibold text-sm">
              {data?.total_graded}/{data?.total_assigned}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-x-2 items-center justify-end">
        <PendingButton refetch={refetch} />
        <FailCandidateButton refetch={refetch} />
        <CandidatePassButton refetch={refetch} />
        <InviteToHireFlixButton refetch={refetch} />
      </div>
    </header>
  );
};

export default Header;
