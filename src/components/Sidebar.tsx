import { useAuthStore } from "@/store/useAuthStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClipboardListIcon, LogOut } from "lucide-react";
import { AnalyticsIcon } from "@/lib/Icons";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQuestionResultStore } from "@/store/useQuestionResultStore";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const tempp = () => {
    console.log("first", location.pathname);
  };

  useEffect(() => {
    tempp();
  }, []);

  const { access_token, logout, user } = useAuthStore();
  const { setCandidateId_AGA, setCandidateId_CGA, setCandidateId_CS } =
    useQuestionResultStore();

  const navigate = useNavigate();
  const handleLogout = () => {
    setCandidateId_AGA(null);
    setCandidateId_CGA(null);
    setCandidateId_CS(null);
    logout();
    navigate("/login");
  };
  return (
    <div
      className={` ${access_token ? "sticky" : "hidden"} ${
        user?.role !== "manager" ? "h-screen" : "h-auto"
      }   bg-white border-r flex  w-min  pt-5 flex-col justify-between items-center pb-5 `}
    >
      <div className="   rounded-full flex flex-col gap-y-4 items-center  mx-2">
        <Avatar className="   w-11 h-11">
          <AvatarImage
            src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user?.user_name}&scale=160&radius=50`}
            alt="AVATAR"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <button
          onClick={() =>
            user?.role !== "manager"
              ? navigate("/candidate-dashboard/CS")
              : navigate("/admin-dashboard")
          }
          className=" hover:scale-110 duration-500 rounded-full  border-[#69C920] border-[2px] w-11 h-11"
          style={{
            background:
              location.pathname == "/candidate-dashboard/CS"
                ? "#69C920"
                : "white",
                color:
                location.pathname == "/candidate-dashboard/CS"
                  ? "white"
                  : "black",
          }}
        >
          CS
        </button>
        <button
          onClick={() =>
            user?.role !== "manager"
              ? navigate("/candidate-dashboard/AGA")
              : navigate("/admin-dashboard")
          }
          className="  hover:scale-110 duration-500 rounded-full  border-[#69C920] border-[2px] w-11 h-11"
          style={{
            background:
              location.pathname == "/candidate-dashboard/AGA"
                ? "#69C920"
                : "white",
            color:
              location.pathname == "/candidate-dashboard/AGA"
                ? "white"
                : "black",
          }}
        >
          AGA
        </button>
        <button
          onClick={() =>
            user?.role !== "manager"
              ? navigate("/candidate-dashboard/CGA")
              : navigate("/admin-dashboard")
          }
          className="  hover:scale-110 duration-500 rounded-full  border-[#69C920] border-[2px] w-11 h-11"
          style={{
            background:
              location.pathname == "/candidate-dashboard/CGA"
                ? "#69C920"
                : "white",
                color:
                location.pathname == "/candidate-dashboard/CGA"
                  ? "white"
                  : "black",
                
          }}
        >
          CGA
        </button>
        <button
          onClick={() => navigate("/analytics")}
          className=" hover:scale-110 duration-500"
        >
          {/* <AnalyticsIcon /> */}
          <div className="w-11 h-11  border-[#69C920] border-2 rounded-full flex items-center justify-center">
          <ClipboardListIcon className=" w-58 h-8" strokeWidth={1.5} color="#69C920"/>
          </div>
          
        </button>
      
      </div>
      <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleLogout()}
                className="text-[#018037] flex justify-center hover:scale-110 duration-500"
              >
                <div className="w-11 h-11   border-slate-200 border-2 rounded-full flex items-center justify-center">
                <LogOut className=" w-5 h-5" color="red" />
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent className=" bg-red-400 text-white">
              <p>Log Out</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </div>
  );
};

export default Sidebar;
