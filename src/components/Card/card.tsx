import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircleIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { TooltipArrow, TooltipPortal } from "@radix-ui/react-tooltip";

export interface CardProps {
  text: string;
  value: number | string;
  tooltip?: string | null;
  color?: string;
}

export default function CardComp({ text, value, tooltip, color }: CardProps) {
  return (
    <Card className="flex flex-col justify-between shadow-none h-28 border  rounded-2xl min:w-full p-4">
      <CardHeader className="font-semibold p-0 flex flex-row items-baseline justify-between ">
        <div className="flex justify-between p-0 items-center align-middle w-full">
          <CardTitle className="text-base font-semibold text-[#163143]">
            {text}
          </CardTitle>
          <TooltipProvider delayDuration={10}>
            <Tooltip>
              <TooltipTrigger
                className="flex align-middle items-center w-4 h-4 opacity-50"
                style={{ marginTop: 2 }}
              >
                <AlertCircleIcon />
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent className="bg-[#163143] max-w-[404px] rounded-lg text-white text-xs font-normal font-poppins">
                  <TooltipArrow fill="#163143" />
                  {tooltip}
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className={`text-2xl text-[${color}] font-semibold p-1`}>
        {value}
      </CardContent>
    </Card>
  );
}
