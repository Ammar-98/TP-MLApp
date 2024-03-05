import { useQuestionResultStore } from "@/store/useQuestionResultStore";
import TriangleShape from "./TriangleShape";

const getQuestionResult = (score: string[]) => {
  const sum = score.reduce((acc, val) => acc + parseFloat(val), 0);

  const result = (sum / 20) * 100;
  // console.log(result)
  if (isNaN(result)) {
    return 0;
  }
  return result?.toFixed(1).replace(/[.,]0$/, "");
};

const GradingRubicSectionCS = () => {
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
    handleInputChange,
  } = useQuestionResultStore();
  return (
    <section className="  px-2 pb-5 flex flex-col gap-y-2 border-l-2 border-dashed border-gray-500 opacity-84 max-h-screen overflow-y-scroll no-scrollbar">
      <div className="flex justify-between text-[black] bg text-lg font-medium pt-2">
        <h1
          style={{ fontWeight: "600" }}
          className=" text-lg font-medium w-full"
        >
          Grading Rubric
        </h1>
      </div>
      <div className="grid grid-cols-3">
        <div className="grid grid-rows-9  items-center">
          <h1 className=" w-full justify-center flex">Q1</h1>
          <div className="flex h-7 rounded-md mt-2 justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion1Array = [...question1_Result];
                  updatedQuestion1Array[0] = "0";
                  setQuestion1_Result(updatedQuestion1Array);
                }
              }}
              type="number"
              name="question_1_grade"
              id="question_1_grade"
              className=" w-11 text-center focus:outline-none border bg-[#e3fee7] min-w-0  rounded-none rounded-l-md  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={10}
              value={question1_Result[0] === "" ? "0" : question1_Result[0]}
              onChange={(e) => handleInputChange(e, 0, 10)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              10
            </span>
          </div>

          <div className="flex h-7 mt-10 rounded-md justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion1Array = [...question1_Result];
                  updatedQuestion1Array[1] = "0";
                  setQuestion1_Result(updatedQuestion1Array);
                }
              }}
              type="number"
              name="question_1_grade"
              id="question_1_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7] rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              value={question1_Result[1] === "" ? "0" : question1_Result[1]}
              onChange={(e) => handleInputChange(e, 1, 6)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              6
            </span>
          </div>

          <div className="flex h-7 mt-10 rounded-md justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion1Array = [...question1_Result];
                  updatedQuestion1Array[2] = "0";
                  setQuestion1_Result(updatedQuestion1Array);
                }
              }}
              type="number"
              name="question_1_grade"
              id="question_1_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              value={question1_Result[2] === "" ? "0" : question1_Result[2]}
              onChange={(e) => handleInputChange(e, 2, 4)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              4
            </span>
          </div>

          <span className=" flex flex-col mt-5 items-center">
            Q1 Total{" "}
            <span className="bg-[#DFFFD0] w-20 justify-center border flex py-1 mt-1 rounded-2xl shadow-sm">
              {getQuestionResult(question1_Result)}
            </span>
          </span>

          <h1 className=" w-full justify-center flex mt-10">Q4</h1>


          <div className=" flex h-7  rounded-md mt-2  justify-center ">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion4Array = [...question4_Result];
                  updatedQuestion4Array[0] = "0";
                  setQuestion4_Result(updatedQuestion4Array);
                }
              }}
              type="number"
              name="question_4_grade"
              id="question_4_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question4_Result[0] === "" ? "0" : question4_Result[0]}
              onChange={(e) => handleInputChange(e, 0, 7)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              7
            </span>
          </div>

          <div className="flex h-7 rounded-md mt-10 justify-center ">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion4Array = [...question4_Result];
                  updatedQuestion4Array[1] = "0";
                  setQuestion4_Result(updatedQuestion4Array);
                }
              }}
              type="number"
              name="question_4_grade"
              id="question_4_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question4_Result[1] === "" ? "0" : question4_Result[1]}
              onChange={(e) => handleInputChange(e, 1, 6)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              6
            </span>
          </div>

          <div className="flex h-7 rounded-md mt-10 justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion4Array = [...question4_Result];
                  updatedQuestion4Array[2] = "0";
                  setQuestion4_Result(updatedQuestion4Array);
                }
              }}
              type="number"
              name="question_4_grade"
              id="question_4_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              value={question4_Result[2] === "" ? "0" : question4_Result[2]}
              onChange={(e) => handleInputChange(e, 2, 4)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              4
            </span>
          </div>

          <div className="flex h-7 rounded-md mt-10 justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion4Array = [...question4_Result];
                  updatedQuestion4Array[3] = "0";
                  setQuestion4_Result(updatedQuestion4Array);
                }
              }}
              type="number"
              name="question_4_grade"
              id="question_4_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              value={question4_Result[3] === "" ? "0" : question4_Result[3]}
              onChange={(e) => handleInputChange(e, 3, 3)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              3
            </span>
          </div>

          <span className=" flex flex-col mt-5 items-center ">
            Q4 Total{" "}
            <span className="bg-[#DFFFD0] w-20 justify-center  flex py-1 mt-1 rounded-2xl shadow-sm border">
              {getQuestionResult(question4_Result)}
            </span>
          </span>
        </div>

        <div className="grid border-l-2 grid-rows-9  items-center">
          <h1 className=" w-full justify-center flex">Q2</h1>
          <div className="flex h-7 mt-2 rounded-md justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion2Array = [...question2_Result];
                  updatedQuestion2Array[0] = "0";
                  setQuestion2_Result(updatedQuestion2Array);
                }
              }}
              type="number"
              name="question_2_grade"
              id="question_2_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question2_Result[0] === "" ? "0" : question2_Result[0]}
              onChange={(e) => handleInputChange(e, 0, 10)}
            />
            <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              10
            </span>
          </div>{" "}
          <div className="flex h-7 mt-10 rounded-md justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion2Array = [...question2_Result];
                  updatedQuestion2Array[1] = "0";
                  setQuestion2_Result(updatedQuestion2Array);
                }
              }}
              type="number"
              name="question_2_grade"
              id="question_2_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              value={question2_Result[1] === "" ? "0" : question2_Result[1]}
              onChange={(e) => handleInputChange(e, 1, 6)}
            />
            <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              6
            </span>
          </div>{" "}
          <div className="flex h-7 mt-10 rounded-md justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion2Array = [...question2_Result];
                  updatedQuestion2Array[2] = "0";
                  setQuestion2_Result(updatedQuestion2Array);
                }
              }}
              type="number"
              name="question_2_grade"
              id="question_2_grade"
              className=" w-11 text-center focus:outline-none  bg-[#e4ffe7] rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              value={question2_Result[2] === "" ? "0" : question2_Result[2]}
              onChange={(e) => handleInputChange(e, 2, 4)}
            />
            <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              4
            </span>
          </div>{" "}
          <span className=" flex mt-5 flex-col items-center">
            Q2 Total{" "}
            <span className="bg-[#DFFFD0] w-20 justify-center flex py-1 mt-1 rounded-2xl shadow-sm border">
              {getQuestionResult(question2_Result)}
            </span>
          </span>
          <h1 className=" w-full justify-center flex mt-10">Q5</h1>

          <div className=" flex mt-2 h-7 justify-center rounded-md ">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion5Array = [...question5_Result];
                  updatedQuestion5Array[0] = "0";
                  setQuestion5_Result(updatedQuestion5Array);
                }
              }}
              type="number"
              name="question_5_grade"
              id="question_5_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7] rounded-none rounded-l-md  border text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question5_Result[0] === "" ? "0" : question5_Result[0]}
              onChange={(e) => handleInputChange(e, 0, 7)}
            />
            <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              7
            </span>
          </div>
          <div className="flex mt-10 h-7 rounded-md justify-center ">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion5Array = [...question5_Result];
                  updatedQuestion5Array[1] = "0";
                  setQuestion5_Result(updatedQuestion5Array);
                }
              }}
              type="number"
              name="question_5_grade"
              id="question_5_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question5_Result[1] === "" ? "0" : question5_Result[1]}
              onChange={(e) => handleInputChange(e, 1, 6)}
            />
            <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              6
            </span>
          </div>
          <div className="flex mt-10 h-7 rounded-md justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion5Array = [...question5_Result];
                  updatedQuestion5Array[2] = "0";
                  setQuestion5_Result(updatedQuestion5Array);
                }
              }}
              type="number"
              name="question_5_grade"
              id="question_5_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question5_Result[2] === "" ? "0" : question5_Result[2]}
              onChange={(e) => handleInputChange(e, 2, 4)}
            />
            <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              4
            </span>
          </div>
          <div className="flex h-7 mt-10 rounded-md justify-center">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion5Array = [...question5_Result];
                  updatedQuestion5Array[3] = "0";
                  setQuestion5_Result(updatedQuestion5Array);
                }
              }}
              type="number"
              name="question_5_grade"
              id="question_5_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question5_Result[3] === "" ? "0" : question5_Result[3]}
              onChange={(e) => handleInputChange(e, 3, 3)}
            />
            <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              3
            </span>
          </div>
          <span className=" flex flex-col mt-5 items-center">
            Q5 Total{" "}
            <span className="bg-[#DFFFD0] w-20 justify-center mt-1 flex py-1 rounded-2xl shadow-sm border">
              {getQuestionResult(question5_Result)}
            </span>
          </span>
        </div>

        <div className="flex border-l-2 flex-col">
          <h1 className=" w-full justify-center bg-red flex">Q3</h1>

          <div className="flex rounded-md mt-2 justify-center h-7">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion3Array = [...question3_Result];
                  updatedQuestion3Array[0] = "0";
                  setQuestion3_Result(updatedQuestion3Array);
                }
              }}
              type="number"
              name="question_3_grade"
              id="question_3_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7] rounded-none rounded-l-md  border text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question3_Result[0] === "" ? "0" : question3_Result[0]}
              onChange={(e) => handleInputChange(e, 0, 10)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              10
            </span>
            {/* </div> */}
          </div>

          <div className="flex mt-10 rounded-md justify-center h-7">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion3Array = [...question3_Result];
                  updatedQuestion3Array[1] = "0";
                  setQuestion3_Result(updatedQuestion3Array);
                }
              }}
              type="number"
              name="question_3_grade"
              id="question_3_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]   rounded-none rounded-l-md  border text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question3_Result[1] === "" ? "0" : question3_Result[1]}
              onChange={(e) => handleInputChange(e, 1, 6)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              6
            </span>
            {/* </div> */}
          </div>

          <div className="flex mt-10 rounded-md justify-center h-7">
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault(); // Prevent the Backspace key from navigating back
                  const updatedQuestion3Array = [...question3_Result];
                  updatedQuestion3Array[2] = "0";
                  setQuestion3_Result(updatedQuestion3Array);
                }
              }}
              type="number"
              name="question_3_grade"
              id="question_3_grade"
              className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border  text-gray-900  sm:text-sm sm:leading-6"
              placeholder="0"
              min={0}
              max={9}
              value={question3_Result[2] === "" ? "0" : question3_Result[2]}
              onChange={(e) => handleInputChange(e, 2, 4)}
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
              4
            </span>
            {/* </div> */}
          </div>

          <span className=" flex mt-5 flex-col items-center">
            Q3 Total{" "}
            <span className="bg-[#DFFFD0] w-20 justify-center flex py-1 mt-1 rounded-2xl shadow-sm border">
              {getQuestionResult(question3_Result)}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default GradingRubicSectionCS;
// {
//   <div className="grid grid-cols-3  items-center">
//         {/* <span className=' text-sm text-red-500 font-medium'>
//           English Fluency (Word choice/Awkward language - How native of an
//           English writer/speaker are they?) (0.5 pt each)
//         </span> */}
//         {/* <div className="flex justify-evenly "> */}
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion1Array = [...question1_Result];
//                 updatedQuestion1Array[0] = "0";
//                 setQuestion1_Result(updatedQuestion1Array);
//               }
//             }}
//             type="number"
//             name="question_1_grade"
//             id="question_1_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7] min-w-0  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={10}
//             value={question1_Result[0] === "" ? "0" : question1_Result[0]}
//             onChange={(e) => handleInputChange(e, 0, 10)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             10
//           </span>
//         </div>
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion2Array = [...question2_Result];
//                 updatedQuestion2Array[0] = "0";
//                 setQuestion2_Result(updatedQuestion2Array);
//               }
//             }}
//             type="number"
//             name="question_2_grade"
//             id="question_2_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question2_Result[0] === "" ? "0" : question2_Result[0]}
//             onChange={(e) => handleInputChange(e, 0, 10)}
//           />
//           <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             10
//           </span>
//         </div>{" "}
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion3Array = [...question3_Result];
//                 updatedQuestion3Array[0] = "0";
//                 setQuestion3_Result(updatedQuestion3Array);
//               }
//             }}
//             type="number"
//             name="question_3_grade"
//             id="question_3_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7] rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question3_Result[0] === "" ? "0" : question3_Result[0]}
//             onChange={(e) => handleInputChange(e, 0, 10)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             10
//           </span>
//           {/* </div> */}
//         </div>
//       </div>
//       <div className="grid grid-cols-3  items-center">
//         {/* <span className=' text-sm text-[#7000FF] font-medium'>
//           Grammar/Sentence Structure (Capitalization/Spelling /Punctuation,
//           Count all the errors and subtract from 6 (-0.5pts for each, if repeat
//           of same mistake, only count once))
//         </span> */}
//         {/* <div className="flex justify-evenly "> */}
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion1Array = [...question1_Result];
//                 updatedQuestion1Array[1] = "0";
//                 setQuestion1_Result(updatedQuestion1Array);
//               }
//             }}
//             type="number"
//             name="question_1_grade"
//             id="question_1_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7] rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             value={question1_Result[1] === "" ? "0" : question1_Result[1]}
//             onChange={(e) => handleInputChange(e, 1, 6)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             6
//           </span>
//         </div>
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion2Array = [...question2_Result];
//                 updatedQuestion2Array[1] = "0";
//                 setQuestion2_Result(updatedQuestion2Array);
//               }
//             }}
//             type="number"
//             name="question_2_grade"
//             id="question_2_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             value={question2_Result[1] === "" ? "0" : question2_Result[1]}
//             onChange={(e) => handleInputChange(e, 1, 6)}
//           />
//           <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             6
//           </span>
//         </div>{" "}
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion3Array = [...question3_Result];
//                 updatedQuestion3Array[1] = "0";
//                 setQuestion3_Result(updatedQuestion3Array);
//               }
//             }}
//             type="number"
//             name="question_3_grade"
//             id="question_3_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]   rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question3_Result[1] === "" ? "0" : question3_Result[1]}
//             onChange={(e) => handleInputChange(e, 1, 6)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             6
//           </span>
//           {/* </div> */}
//         </div>
//       </div>
//       <div className="grid grid-cols-3  items-center">
//         {/* <span className=' text-sm text-red-500 font-medium'>
//           Followed Instructions (-0.5 pts for each, if the instructions weren't
//           followed)
//         </span> */}
//         {/* <div className="flex justify-evenly "> */}
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion1Array = [...question1_Result];
//                 updatedQuestion1Array[2] = "0";
//                 setQuestion1_Result(updatedQuestion1Array);
//               }
//             }}
//             type="number"
//             name="question_1_grade"
//             id="question_1_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             value={question1_Result[2] === "" ? "0" : question1_Result[2]}
//             onChange={(e) => handleInputChange(e, 2, 4)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             4
//           </span>
//         </div>
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion2Array = [...question2_Result];
//                 updatedQuestion2Array[2] = "0";
//                 setQuestion2_Result(updatedQuestion2Array);
//               }
//             }}
//             type="number"
//             name="question_2_grade"
//             id="question_2_grade"
//             className=" w-11 text-center focus:outline-none  bg-[#e4ffe7] rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             value={question2_Result[2] === "" ? "0" : question2_Result[2]}
//             onChange={(e) => handleInputChange(e, 2, 4)}
//           />
//           <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             4
//           </span>
//         </div>{" "}
//         <div className="flex rounded-md justify-center ">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion3Array = [...question3_Result];
//                 updatedQuestion3Array[2] = "0";
//                 setQuestion3_Result(updatedQuestion3Array);
//               }
//             }}
//             type="number"
//             name="question_3_grade"
//             id="question_3_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question3_Result[2] === "" ? "0" : question3_Result[2]}
//             onChange={(e) => handleInputChange(e, 2, 4)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             4
//           </span>
//           {/* </div> */}
//         </div>
//       </div>
//       <div className=" grid grid-cols-3 text-black items-center justify-center m-2 text-sm font-medium ">
//         {/* <div className="flex  justify-evenly"> */}
//         <span className=" flex flex-col items-center">
//           Q1{" "}
//           <span className="bg-[#DFFFD0] w-20 justify-center flex py-1 rounded-2xl shadow-sm">
//             {getQuestionResult(question1_Result)}
//           </span>
//         </span>
//         <span className=" flex flex-col items-center">
//           Q2{" "}
//           <span className="bg-[#DFFFD0] w-20 justify-center flex py-1  rounded-2xl shadow-sm">
//             {getQuestionResult(question2_Result)}
//           </span>
//         </span>
//         <span className=" flex flex-col items-center">
//           Q3{" "}
//           <span className="bg-[#DFFFD0] w-20 justify-center flex py-1 rounded-2xl shadow-sm">
//             {getQuestionResult(question3_Result)}
//           </span>
//         </span>
//         {/* <span className=' flex flex-col items-center'>
//             Q4{' '}
//             <span className='bg-[#DFFFD0] px-3 py-2'>
//               {getQuestionResult(question4_Result)}
//             </span>
//           </span>
//           <span className=' flex flex-col items-center'>
//             Q5{' '}
//             <span className='bg-[#DFFFD0] px-3 py-2'>
//               {getQuestionResult(question5_Result)}
//             </span>
//           </span> */}
//         {/* </div> */}
//         {/* <div className='w-full flex justify-evenly'>
//           <div className=' w-16  h-16  '>
//             {' '}
//             <TriangleShape direction='up' text='Q4' />
//           </div>
//           <div className='w-16  h-16 '>
//             {' '}
//             <TriangleShape direction='down' text='Q5' />
//           </div>
//         </div> */}
//       </div>
//       <div className="grid grid-cols-3  items-center">
//         {/* <span className=' text-sm text-red-500 font-medium'>
//           Grammar/Sentence Structure (Capitalization/Spelling/Punctuation, Count
//           all the errors and subtract from 7 (-0.5pts for each, if repeat of
//           same mistake, only count once))
//         </span> */}
//         {/* <div className="flex justify-evenly "> */}
//         <div className=" flex  rounded-md  justify-center ">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion4Array = [...question4_Result];
//                 updatedQuestion4Array[0] = "0";
//                 setQuestion4_Result(updatedQuestion4Array);
//               }
//             }}
//             type="number"
//             name="question_4_grade"
//             id="question_4_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question4_Result[0] === "" ? "0" : question4_Result[0]}
//             onChange={(e) => handleInputChange(e, 0, 7)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             7
//           </span>
//         </div>
//         <div className=" flex justify-center rounded-md ">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion5Array = [...question5_Result];
//                 updatedQuestion5Array[0] = "0";
//                 setQuestion5_Result(updatedQuestion5Array);
//               }
//             }}
//             type="number"
//             name="question_5_grade"
//             id="question_5_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7] rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question5_Result[0] === "" ? "0" : question5_Result[0]}
//             onChange={(e) => handleInputChange(e, 0, 7)}
//           />
//           <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             7
//           </span>
//         </div>
//         {/* </div> */}
//       </div>
//       <div className="grid grid-cols-3  items-center">
//         {/* <span className=' text-sm text-[#7000FF] font-medium'>
//           Content/ Solutions-Oriented in the best way possible? (-0.5 pts for
//           each, responds to questions in a clear manner/resolution, closing
//           remarks, clarity of resolution)
//         </span> */}
//         {/* <div className="flex justify-evenly  "> */}
//         <div className="flex rounded-md justify-center ">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion4Array = [...question4_Result];
//                 updatedQuestion4Array[1] = "0";
//                 setQuestion4_Result(updatedQuestion4Array);
//               }
//             }}
//             type="number"
//             name="question_4_grade"
//             id="question_4_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question4_Result[1] === "" ? "0" : question4_Result[1]}
//             onChange={(e) => handleInputChange(e, 1, 6)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             6
//           </span>
//         </div>
//         <div className="flex rounded-md justify-center ">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion5Array = [...question5_Result];
//                 updatedQuestion5Array[1] = "0";
//                 setQuestion5_Result(updatedQuestion5Array);
//               }
//             }}
//             type="number"
//             name="question_5_grade"
//             id="question_5_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question5_Result[1] === "" ? "0" : question5_Result[1]}
//             onChange={(e) => handleInputChange(e, 1, 6)}
//           />
//           <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             6
//           </span>
//         </div>
//         {/* </div> */}
//       </div>
//       <div className="grid grid-cols-3  items-center">
//         {/* <span className=' text-sm text-red-500 font-medium'>
//           Formatting (Salutation and complimentary close (worth 0.5 pt each),
//           Paragraph formatting, i.e. strikes the right balance of # of
//           paragraphs)
//         </span> */}
//         {/* <div className="flex justify-evenly "> */}
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion4Array = [...question4_Result];
//                 updatedQuestion4Array[2] = "0";
//                 setQuestion4_Result(updatedQuestion4Array);
//               }
//             }}
//             type="number"
//             name="question_4_grade"
//             id="question_4_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             value={question4_Result[2] === "" ? "0" : question4_Result[2]}
//             onChange={(e) => handleInputChange(e, 2, 4)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             4
//           </span>
//         </div>
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion5Array = [...question5_Result];
//                 updatedQuestion5Array[2] = "0";
//                 setQuestion5_Result(updatedQuestion5Array);
//               }
//             }}
//             type="number"
//             name="question_5_grade"
//             id="question_5_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question5_Result[2] === "" ? "0" : question5_Result[2]}
//             onChange={(e) => handleInputChange(e, 2, 4)}
//           />
//           <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             4
//           </span>
//         </div>
//         {/* </div> */}
//       </div>
//       <div className="grid grid-cols-3  items-center">
//         {/* <span className=' text-sm text-[#7000FF] font-medium'>
//           Appropriate Tone (Empathy/Friendliness, i.e. thank you, apology,
//           considerate in response) (-0.5pt)
//         </span> */}
//         {/* <div className="flex justify-evenly "> */}
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion4Array = [...question4_Result];
//                 updatedQuestion4Array[3] = "0";
//                 setQuestion4_Result(updatedQuestion4Array);
//               }
//             }}
//             type="number"
//             name="question_4_grade"
//             id="question_4_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             value={question4_Result[3] === "" ? "0" : question4_Result[3]}
//             onChange={(e) => handleInputChange(e, 3, 3)}
//           />
//           <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             3
//           </span>
//         </div>
//         <div className="flex rounded-md justify-center">
//           <input
//             onKeyDown={(e) => {
//               if (e.key === "Backspace") {
//                 e.preventDefault(); // Prevent the Backspace key from navigating back
//                 const updatedQuestion5Array = [...question5_Result];
//                 updatedQuestion5Array[3] = "0";
//                 setQuestion5_Result(updatedQuestion5Array);
//               }
//             }}
//             type="number"
//             name="question_5_grade"
//             id="question_5_grade"
//             className=" w-11 text-center focus:outline-none bg-[#e4ffe7]  rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6"
//             placeholder="0"
//             min={0}
//             max={9}
//             value={question5_Result[3] === "" ? "0" : question5_Result[3]}
//             onChange={(e) => handleInputChange(e, 3, 3)}
//           />
//           <span className="inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm">
//             3
//           </span>
//         </div>
//         {/* </div> */}
//       </div>
//       <div className=" grid grid-cols-3 text-black items-center justify-center m-2 text-sm font-medium ">
//         {/* <div className="flex  justify-evenly"> */}

//         <span className=" flex flex-col items-center ">
//           Q4{" "}
//           <span className="bg-[#DFFFD0] w-20 justify-center flex py-1 rounded-2xl shadow-sm">
//             {getQuestionResult(question4_Result)}
//           </span>
//         </span>
//         <span className=" flex flex-col items-center">
//           Q5{" "}
//           <span className="bg-[#DFFFD0] w-20 justify-center flex py-1 rounded-2xl shadow-sm">
//             {getQuestionResult(question5_Result)}
//           </span>
//         </span>
//         {/* </div> */}
//       </div>
// }
