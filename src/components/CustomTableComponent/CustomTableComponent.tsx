import  { useRef } from "react";
import { useEffect, useState } from "react";


import { ArrowDown, ArrowUp } from "lucide-react";
import { Skeleton } from "../ui/skeleton.tsx";
import PaginationComponent from "./paginationComponent.tsx";

type Columns = {
  name: string;
  width: number;
  sticky?: boolean;
  keyword: string;
  child?: any;
  sorting?: boolean;
};
type Icon = {
  Icon: any;
  onClick: any;
  width: number;
  sticky?: boolean;
};
type pagintationprops = {
  enabled: boolean;
  currentpage: number;
  setcurrentpage: any;
  totalPages: number;
};
type CustomTableProps = {
  Data: any[];
  Columns: Columns[];
  TableWidth: string;
  TableHeight?: string;
  tableIcon?: Icon;
  Loading?: boolean;
  pagination?: pagintationprops;
  // rowProps?:string
  rowProps?: (item: any) => string;

  Sorting?: {
    sortBy: any;
    setsortBy: any;
    sortOrder: any;
    setsortOrder: any;
  };
};

export default function CustomTable({
  Data,
  Columns,
  TableWidth,
  TableHeight,
  tableIcon,
  Loading,
  pagination,
  rowProps,
  Sorting,
}: CustomTableProps) {
  const [tableSizeWidth, settableSizeWidth] = useState(0);

  useEffect(() => {
    let width = 0;

    width = Columns.reduce((acc, item) => acc + item.width, 0);
    width = tableIcon?.width ? width + tableIcon.width : width;
    console.log("width", width);
    console.log(
      "temp",
      Columns.slice(0, 1).reduce((acc, item) => acc + item.width, 0)
    );

    settableSizeWidth(width);
  }, [Columns]);

  const divRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const TableComponent = () => {
    useEffect(() => {
      if (divRef.current) {
        if (divRef.current.clientHeight !== 0) {
          setHeight(divRef.current.clientHeight);
        }
      }

      console.log("Daaaattttttaaaa", Data, height);
    }, [divRef?.current?.clientHeight]);

    const ColumnComponent = ({ item, index }:any) => {
      const handleSorting = () => {
        if (Sorting?.sortBy == item.keyword) {
          if (Sorting?.sortOrder == "asc") {
            Sorting?.setsortOrder("desc");
          } else {
            Sorting?.setsortOrder("asc");
          }
        } else {
          Sorting?.setsortBy(item.keyword);
        }
      };

      return (
        <th
          key={index}
          style={{
            width: item.width,
            left:
              item.sticky == true
                ? Columns.slice(0, index).reduce(
                    (acc, item) => acc + item.width,
                    0
                  ) + (tableIcon?.width == undefined ? 0 : tableIcon.width)
                : 0,
          }}
          className={` ${
            item?.sticky == true ? `  sticky border-r-2 z-20` : ``
          }  items-center justify-center top-[0px] sticky  border-b-2  bg-white z-10 h-[50px] text-sm font-semibold flex-wrap px-1  `}
        >
          <div className=" w-full flex items-center justify-center gap-1">
            <div className=" max-w-[80%] cursor-default">{item.name}</div>
            {item?.sorting == true &&
              (Sorting?.sortOrder == "asc" ? (
                <ArrowUp
                  onClick={() => handleSorting()}
                  className=" cursor-pointer"
                  color={Sorting?.sortBy == item.keyword ? "#69C920" : "gray"}
                  size={15}
                />
              ) : (
                <ArrowDown
                  onClick={() => handleSorting()}
                  className=" cursor-pointer"
                  color={Sorting?.sortBy == item.keyword ? "#69C920" : "gray"}
                  size={15}
                />
              ))}
          </div>
        </th>
      );
    };

    if (Loading) {
      return (
        <div
          // style={{ flex: 1, minHeight: "100px" }}
          style={{ height: `${height}px`, minHeight: "100px" }}
          className=" w-full   "
        >
          <Skeleton
            style={{ minHeight: "100px" }}
            className=" w-full rounded-t-3xl h-full"
          />
        </div>
      );
    }

    if (Data?.length == 0 || Data == undefined) {
      return (
        <div
          style={{ height: "200px" }}
          className=" w-full   h-full flex bg-white items-center justify-center rounded-3xl  pt-4"
        >
          No Data Found
        </div>
      );
    }

    return (
      <div
        style={{
          width: TableWidth,

          height:
            pagination?.totalPages == 1 || Data?.length == 1
              ? undefined
              : "100%",
        }}
        className={`flex     overflow-scroll scrollbar-hide `}
      >
        <div
          ref={divRef}
          style={{ minWidth: `${tableSizeWidth + Columns.length}px` }}
          className=" flex  "
        >
          <table className=" table-fixed w-full border-separate ">
            <thead className=" w-full border-b-2 text-main-text ">
              <tr className="">
                {tableIcon == undefined ? null : (
                  <th
                    style={{
                      width:
                        tableIcon?.width == undefined ? 0 : tableIcon.width,
                      left: tableIcon?.sticky == true ? 0 : 0,
                    }}
                    className={` bg-white border-r-2 ${
                      tableIcon?.sticky == true ? `sticky z-20` : ``
                    } top-[0px] sticky border-b-2 z-10 `}
                  ></th>
                )}
                {Columns?.map((item, index) => (
                  <ColumnComponent item={item} index={index} />
                ))}
              </tr>
            </thead>
            <tbody>
              {Data?.map((item) => (
                <tr className={`${rowProps ? rowProps(item) : " "} bg-white `}>
                  {tableIcon == undefined ? null : (
                    <td
                      onClick={() => tableIcon.onClick(item)}
                      style={{
                        width:
                          tableIcon?.width == undefined ? 0 : tableIcon.width,
                        left: tableIcon?.sticky == true ? 0 : 0,
                      }}
                      className={`${tableIcon?.sticky == true ? `sticky` : ``}
                        bg-white text-center items-center border-r-2`}
                    >
                      <div className=" w-full flex items-center justify-center gap-4">
                        {tableIcon.Icon}
                      </div>
                    </td>
                  )}
                  {Columns?.map((col, index) => (
                    <td
                      style={{
                        left:
                          Columns[index].sticky == true
                            ? Columns.slice(0, index).reduce(
                                (acc, item) => acc + item.width,
                                0
                              ) +
                              (tableIcon?.width == undefined
                                ? 0
                                : tableIcon.width)
                            : 0,
                      }}
                      className={`${
                        Columns[index].sticky == true
                          ? `  sticky  border-r-2`
                          : ``
                      }   text-center text-sm flex-wrap h-[50px] px-2 py-2 break-words ${
                        rowProps ? rowProps(item) : "bg-white  "
                      }
                      `}
                    >
                      {col.child
                        ? col.child(item)
                        : item[col.keyword]
                        ? typeof item[col.keyword] == "number"
                          ? Number.isInteger(item[col.keyword])
                            ? item[col.keyword]
                            : item[col.keyword].toFixed(2)
                          : item[col.keyword]?.toString()
                        : "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const tableHeight =
    pagination?.totalPages != undefined &&
    pagination?.totalPages >= 2 &&
    TableHeight
      ? TableHeight
      : undefined;

  // const tableHeight =undefined

  return (
    <div
      style={{
        width: TableWidth,
        height: tableHeight,
        maxHeight: TableHeight,
        borderWidth: 1,
        // borderColor: Focused == true ? "#69c820" : undefined,
      }}
      className=" flex flex-col flex-1  rounded-3xl     overflow-hidden"
    >
      <TableComponent />

      {pagination != undefined &&
      pagination.enabled == true &&
      Data?.length != 0 &&
      pagination?.totalPages >= 2 ? (
        <div
          style={{ height: "8%", minHeight: "50px" }}
          className=" w-full  flex overflow-hidden"
        >
          <PaginationComponent
            currentpage={pagination.currentpage}
            setcurrentpage={pagination.setcurrentpage}
            totalPages={pagination.totalPages}
          />
        </div>
      ) : null}
    </div>
  );
}
