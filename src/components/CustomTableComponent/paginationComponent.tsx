import  {  useState } from "react";


type PaginationComponentprops = {
  currentpage: number;
  setcurrentpage: any;
  totalPages: number;
};
export default function PaginationComponent({
  currentpage,
  setcurrentpage,
  totalPages,
}: PaginationComponentprops) {
  const handleNext = () => {
    if (currentpage < totalPages) {
      setcurrentpage((page: any) => page + 1);
    }
  };

  const handlePrevious = () => {
    if (currentpage > 1) {
      setcurrentpage((page: any) => page - 1);
    }
  };

  const Button = ({ title, onClick }: any) => {
    return (
      <div
        className={`${
          currentpage == title
            ? " text-green-500 bg-white  border  border-green-500"
            : " border"
        } cursor-pointer flex items-center justify-center bg-white px-2 w-[50px] text-sm  rounded-xl border`}
        onClick={onClick}
      >
        {title}
      </div>
    );
  };

  const ButtonJump = ({ title, onClick }: any) => {
    const [hover, sethover] = useState(false);
    return (
      <div
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        className={`${
          currentpage == title
        } cursor-pointer flex items-center justify-center bg-white px-2 w-[50px]  rounded-xl border hover:border-green-500  hover:text-green-500`}
        onClick={onClick}
      >
        {hover == true ? title : "..."}
      </div>
    );
  };

  const getFiveNumbersAround = (
    number: number,
    lowerLimit: number,
    upperLimit: number
  ) => {
    const result: number[] = [];

    // Start from the maximum of the lower limit or the beginning of the range
    const start = Math.max(lowerLimit, number - 2);

    for (let i = start; i < start + 5 && i <= upperLimit; i++) {
      result.push(i);
    }
    return result;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className=" bg-white min-h-full  border-t rounded-b-3xl  flex  flex-col items-center justify-center py-2 w-full">
      <div className=" flex gap-2 h-full">
        <Button title={"<"} onClick={() => handlePrevious()} />

        {currentpage > 3 && (
          <Button title={"1"} onClick={() => setcurrentpage(1)} />
        )}

        {currentpage > 4 && (
          <ButtonJump
            title={"<<"}
            onClick={() =>
              currentpage == 5
                ? setcurrentpage((page: any) => page - 4)
                : setcurrentpage((page: any) => page - 5)
            }
          />
        )}

        {getFiveNumbersAround(currentpage, 1, totalPages).map((item: any) => (
          <Button title={item} onClick={() => setcurrentpage(item)} />
        ))}

        {currentpage < totalPages - 3 && totalPages != 4 && totalPages != 5? (
          <ButtonJump
            title={">>"}
            onClick={() =>
              currentpage == totalPages - 4
                ? setcurrentpage((page: any) => page + 4)
                : setcurrentpage((page: any) => page + 5)
            }
          />
        ):null}

        {currentpage < totalPages - 2 && totalPages != 4 && totalPages != 5 ? (
          <Button
            title={totalPages}
            onClick={() => setcurrentpage(totalPages)}
          />
        ) : null}

        <Button title={">"} onClick={() => handleNext()} />
      </div>
    </div>
  );
}
