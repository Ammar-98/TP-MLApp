import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./pieChart.css";

import { Skeleton } from "@/components/ui/skeleton";
// import toast from "react-hot-toast";

const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "#fff";
    tooltipEl.style.borderRadius = "16px";
    tooltipEl.style.color = "#163143";
    // tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";

    const table = document.createElement("table");
    // table.style.margin = '3px';

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context: any) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    console.log("ACVT");
    console.log(chart["$context"]["chart"]["tooltip"]["dataPoints"]);

    const label =
      chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["label"];

    const value = `${chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["formattedValue"]}%`;

    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    console.log(label);

    const th = document.createElement("th");
    th.style.paddingTop = "6px";
    th.style.paddingBottom = "6px";
    th.style.paddingLeft = "6px";
    th.style.paddingRight = "6px";
    th.classList.add("text-xs");
    th.classList.add("font-semibold");
    th.textContent = label;
    tableHead.appendChild(th);

    // titleLines.forEach(title => {
    // const th = document.createElement('th');
    // th.style.paddingTop = "6px";
    // th.style.paddingBottom = "6px";
    // th.style.paddingLeft = "6px";
    // th.style.paddingRight = "6px";
    // th.classList.add("text-xs")
    // th.classList.add("font-semibold")
    // th.textContent = title;
    // tableHead.appendChild(th);
    // });

    // console.log(bodyLines);

    // bodyLines.forEach(() => {
    //   const tr = document.createElement('tr');

    //   const td1 = document.createElement('td');

    //   // console.log(client_percentage);
    //   // console.log(tp_percentage);
    //   // console.log(body);

    //   td1.textContent = value; // Assuming the first element is # of Hours Worked
    //   td1.style.textAlign = "center";
    //   td1.style.margin = '4px'; // Add spacing between columns

    //   td1.classList.add("text-xs")
    //   td1.classList.add("font-normal")

    //   tr.appendChild(td1);

    //   tableBody.appendChild(tr);
    // });

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");

    // console.log(client_percentage);
    // console.log(tp_percentage);
    // console.log(body);

    td1.textContent = value; // Assuming the first element is # of Hours Worked
    td1.style.textAlign = "center";
    td1.style.margin = "4px"; // Add spacing between columns

    td1.classList.add("text-xs");
    td1.classList.add("font-normal");

    tr.appendChild(td1);

    tableBody.appendChild(tr);

    const tableRoot = tooltipEl.querySelector("table");

    tableRoot.classList.add("mx-auto");

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.classList.add("shadow-md");
  tooltipEl.classList.add("text-main-text");
  tooltipEl.style.opacity = 1;
  tooltipEl.style.width = "200px";
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = "2px";
  tooltipEl.style.zIndex = "9999";
};

const pieChartOptions: any = {
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    tooltip: {
      enabled: false,
      external: externalTooltipHandler,
    },
  },
};

export type Data = {
  chart_data: any;
  yes: number;
  no: number;
};

const getData = async () => {
  try {
    const yes = 75;
    const no = 25;

    const chart_data = {
      labels: ["Yes", "No"],
      datasets: [
        {
          data: [yes, no],
          backgroundColor: ["#86FE96", "#FFE680"],
        },
      ],
    };

    return {
      chart_data,
      yes,
      no,
    };
  } catch (error) {
    console.log(error);
    return { message: "No Data Found" };
  }
};

const AGAPassedScreening: React.FC = () => {
  const { data, isLoading, isRefetching }: any = useQuery({
    queryKey: ["aga-passed-screening-piechart"],
    queryFn: () => getData(),
  });

  if (isLoading || isRefetching)
    return (
      <>
        <Skeleton className="w-[40%] relative h-[225px] rounded-2xl p-4 border bg-slate-200  font-bold text-[#163143]" />
      </>
    );

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex items-center align-middle justify-between">
        <span className="font-semibold text-xl text-main-text pl-3">
          AGA Passed Screening
        </span>
      </div>
      <div className="w-full flex flex-col text-main-text">
        <div className="shadow-none border flex bg-white py-8 px-5 space-x-11  rounded-3xl w-full  items-center ">
          <div className="relative w-1/2">
            <Pie
              data={data.chart_data}
              options={pieChartOptions}
              className=" z-50"
            />
          </div>
          <div className="flex gap-y-4 justify-between flex-col ">
            <div className="">
              <div className="flex flex-col space-y-1">
                <div className="flex space-x-2 items-center">
                  <div className="w-3 h-3 bg-[#86FE96] rounded-full " />

                  <div className="font-semibold text-xs">Yes</div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div>
                    <div className="font-semibold text-base pl-5">
                      {data?.yes.toLocaleString()}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col space-y-1">
                <div className="flex space-x-2 items-center">
                  <div className="w-3 h-3 bg-[#FFE680] rounded-full " />
                  <div className="font-semibold text-xs">No</div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div>
                    <div className="font-semibold text-base pl-5">
                      {data?.no.toLocaleString()}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AGAPassedScreening;
