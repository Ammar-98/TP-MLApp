import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
    console.log(
      'chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["dataset"]["data"]'
    );
    console.log(chart["$context"]["chart"]["tooltip"]);

    const value =
      chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["formattedValue"];
    const label =
      chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["dataset"][
        "label"
      ];

    // const client_percentage =
    //   chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["dataset"][
    //     "data"
    //   ][0].toLocaleString();
    // const tp_percentage =
    //   chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["dataset"][
    //     "data"
    //   ][1].toLocaleString();

    // const client_hours =
    //   chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["dataset"][
    //     "hours_worked"
    //   ][0].toLocaleString();
    // const tp_hours =
    //   chart["$context"]["chart"]["tooltip"]["dataPoints"][0]["dataset"][
    //     "hours_worked"
    //   ][1].toLocaleString();
    // console.log(tooltip.body);
    const titleLines = [label];
    const bodyLines = tooltip.body.map((b: any) => b.lines);

    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    console.log(titleLines);

    titleLines.forEach((title) => {
      const th = document.createElement("th");
      th.style.paddingTop = "6px";
      th.style.paddingBottom = "6px";
      th.style.paddingLeft = "6px";
      th.style.paddingRight = "6px";
      th.classList.add("text-xs");
      th.classList.add("font-semibold");
      th.textContent = title;
      tableHead.appendChild(th);
    });

    // console.log(bodyLines);

    bodyLines.forEach((body: any) => {
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");

      // console.log(client_percentage);
      console.log(value);
      console.log("body");
      console.log(body);

      td1.textContent = value;

      // td1.textContent = body[0].toLocaleString(undefined, {
      //   minimumFractionDigits: 2,
      //   maximumFractionDigits: 2,
      // }); // Assuming the first element is # of Hours Worked
      td1.style.textAlign = "center";
      td1.style.margin = "4px"; // Add spacing between columns

      td1.classList.add("text-xs");
      td1.classList.add("font-normal");

      tr.appendChild(td1);

      tableBody.appendChild(tr);
    });

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
  tooltipEl.style.width = "275px";
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = "4px";
  tooltipEl.style.zIndex = "9999";
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
      external: externalTooltipHandler,
    },
  },
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
      ticks: {
        color: "#9E9E9E",
      },
      title: {
        display: true,
        text: "Recruitment Specialists Names",
        color: "#163143",
        font: {
          size: 12,
        },
      },
    },
    y: {
      stacked: false,
      grid: {
        color: "#D7E6E7",
      },
      ticks: {
        color: "#9E9E9E",
      },
      title: {
        display: true,
        text: "# of Applications",
        color: "#163143",
        font: {
          size: 12,
        },
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const empty_data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [],
      backgroundColor: "#86FE96",
      borderRadius: {
        topLeft: 20,
        topRight: 20,
      },
    },
    {
      label: "Dataset 2",
      data: [],
      backgroundColor: "#69C920",
      borderRadius: {
        topLeft: 20,
        topRight: 20,
      },
    },
  ],
};

const getData = async () => {
  const data_to_send: any = {
    labels: [
      "Alice Smith",
      "Bob Johnson",
      "Charlie Brown",
      "Diana Miller",
      "Ethan Davis",
      "Fiona Wilson",
      "George Garcia",
      "Hannah Rodriguez",
    ],
    datasets: [
      {
        label: "Assigned",
        data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 51)), // Random data between 0 and 50
        backgroundColor: "#86FE96",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
      {
        label: "Graded",
        data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 51)),
        backgroundColor: "#69C920",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
      {
        label: "Pending",
        data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 51)),
        backgroundColor: "#FFE680",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
      {
        label: "Invited to  hireflix",
        data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 51)),
        backgroundColor: "#4F4F4F",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
    ],
  };

  return data_to_send;
};

const Applications = () => {
  const { data, isLoading, isRefetching }: any = useQuery({
    queryKey: ["Applications"],
    queryFn: () => getData(),
  });

  if (isLoading || isRefetching)
    return (
      <Skeleton className="relative h-[89px] rounded-2xl p-4 border bg-slate-200 font-bold text-[#163143]" />
    );

  return (
    <div className="flex flex-col gap-y-4 relative w-full">
      <div className="flex items-center align-middle justify-between">
        <span className="font-semibold text-xl text-main-text pl-3">
          Applications
        </span>
      </div>
      <div className="w-full flex flex-col space-y-4 mx-auto p-6 bg-white rounded-[32px] border border-grey-6 mt-2">
        <div className="flex justify-start space-x-4 item">
          <div className="flex space-x-2 items-center align-middle">
            <div className="w-[21px] h-[6px] bg-[#86FE96] rounded-full " />
            <div className="font-normal text-xs text-grey-2">Assigned</div>
          </div>
          <div className="flex space-x-2 items-center align-middle">
            <div className="w-[21px] h-[6px] bg-[#69C920] rounded-full " />
            <div className="font-normal text-xs text-grey-2">Graded</div>
          </div>
          <div className="flex space-x-2 items-center align-middle">
            <div className="w-[21px] h-[6px] bg-[#FFE680] rounded-full " />
            <div className="font-normal text-xs text-grey-2">Pending</div>
          </div>
          <div className="flex space-x-2 items-center align-middle">
            <div className="w-[21px] h-[6px] bg-[#808080] rounded-full " />
            <div className="font-normal text-xs text-grey-2">
              Invited to hireflix
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <Bar options={options} data={data ? data : empty_data} />
        </div>
      </div>
    </div>
  );
};

export default Applications;
