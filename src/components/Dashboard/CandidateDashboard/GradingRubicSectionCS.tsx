// import { useQuestionResultStore } from '@/store/useQuestionResultStore'
// import TriangleShape from './TriangleShape'

// const getQuestionResult = (score: string[]) => {
//   const sum = score.reduce((acc, val) => acc + parseFloat(val), 0)

//   const result = (sum / 20) * 100
//   // console.log(result)
//   if (isNaN(result)) {
//     return 0
//   }
//   return result?.toFixed(1).replace(/[.,]0$/, '')
// }

// const GradingRubicSectionCS = () => {
//   const {
//     question1_Result,
//     question2_Result,
//     question3_Result,
//     question4_Result,
//     question5_Result,
//     setQuestion1_Result,
//     setQuestion2_Result,
//     setQuestion3_Result,
//     setQuestion4_Result,
//     setQuestion5_Result,
//     handleInputChange,
//   } = useQuestionResultStore()
//   return (
//     <section className=' px-2 pb-5 flex flex-col gap-y-5 border-l-2 border-dashed border-indigo-300 opacity-84 max-h-screen overflow-y-scroll no-scrollbar'>
//       {' '}
//       <div className='flex justify-between text-[#1C908A] items-center m-2 '>
//         <h1 className=' text-lg font-medium w-full'>Grading Rubric</h1>
//         <div className='w-full flex'>
//           <div className='w-full p-3 '>
//             {' '}
//             <TriangleShape direction='up' text='Q1' />
//           </div>
//           <div className='w-full p-3'>
//             {' '}
//             <TriangleShape direction='down' text='Q2' />
//           </div>
//           <div className='w-full p-3'>
//             {' '}
//             <TriangleShape direction='up' text='Q3' />
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2  items-center'>
//         <span className=' text-sm text-red-500 font-medium'>
//           English Fluency (Word choice/Awkward language - How native of an
//           English writer/speaker are they?) (0.5 pt each)
//         </span>
//         <div className='flex justify-center gap-x-2 '>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion1Array = [...question1_Result]
//                   updatedQuestion1Array[0] = '0'
//                   setQuestion1_Result(updatedQuestion1Array)
//                 }
//               }}
//               type='number'
//               name='question_1_grade'
//               id='question_1_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] min-w-0 flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={10}
//               value={question1_Result[0] === '' ? '0' : question1_Result[0]}
//               onChange={(e) => handleInputChange(e, 0, 10)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /10
//             </span>
//           </div>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion2Array = [...question2_Result]
//                   updatedQuestion2Array[0] = '0'
//                   setQuestion2_Result(updatedQuestion2Array)
//                 }
//               }}
//               type='number'
//               name='question_2_grade'
//               id='question_2_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7]  flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question2_Result[0] === '' ? '0' : question2_Result[0]}
//               onChange={(e) => handleInputChange(e, 0, 10)}
//             />
//             <span className='inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /10
//             </span>
//           </div>{' '}
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion3Array = [...question3_Result]
//                   updatedQuestion3Array[0] = '0'
//                   setQuestion3_Result(updatedQuestion3Array)
//                 }
//               }}
//               type='number'
//               name='question_3_grade'
//               id='question_3_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question3_Result[0] === '' ? '0' : question3_Result[0]}
//               onChange={(e) => handleInputChange(e, 0, 10)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /10
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2  items-center'>
//         <span className=' text-sm text-[#7000FF] font-medium'>
//           Grammar/Sentence Structure (Capitalization/Spelling /Punctuation,
//           Count all the errors and subtract from 6 (-0.5pts for each, if repeat
//           of same mistake, only count once))
//         </span>
//         <div className='flex justify-center gap-x-2 '>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion1Array = [...question1_Result]
//                   updatedQuestion1Array[1] = '0'
//                   setQuestion1_Result(updatedQuestion1Array)
//                 }
//               }}
//               type='number'
//               name='question_1_grade'
//               id='question_1_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               value={question1_Result[1] === '' ? '0' : question1_Result[1]}
//               onChange={(e) => handleInputChange(e, 1, 6)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /06
//             </span>
//           </div>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion2Array = [...question2_Result]
//                   updatedQuestion2Array[1] = '0'
//                   setQuestion2_Result(updatedQuestion2Array)
//                 }
//               }}
//               type='number'
//               name='question_2_grade'
//               id='question_2_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               value={question2_Result[1] === '' ? '0' : question2_Result[1]}
//               onChange={(e) => handleInputChange(e, 1, 6)}
//             />
//             <span className='inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /06
//             </span>
//           </div>{' '}
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion3Array = [...question3_Result]
//                   updatedQuestion3Array[1] = '0'
//                   setQuestion3_Result(updatedQuestion3Array)
//                 }
//               }}
//               type='number'
//               name='question_3_grade'
//               id='question_3_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7]  flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question3_Result[1] === '' ? '0' : question3_Result[1]}
//               onChange={(e) => handleInputChange(e, 1, 6)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /06
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2  items-center'>
//         <span className=' text-sm text-red-500 font-medium'>
//           Followed Instructions (-0.5 pts for each, if the instructions weren't
//           followed)
//         </span>
//         <div className='flex justify-center gap-x-2 '>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion1Array = [...question1_Result]
//                   updatedQuestion1Array[2] = '0'
//                   setQuestion1_Result(updatedQuestion1Array)
//                 }
//               }}
//               type='number'
//               name='question_1_grade'
//               id='question_1_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               value={question1_Result[2] === '' ? '0' : question1_Result[2]}
//               onChange={(e) => handleInputChange(e, 2, 4)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /04
//             </span>
//           </div>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion2Array = [...question2_Result]
//                   updatedQuestion2Array[2] = '0'
//                   setQuestion2_Result(updatedQuestion2Array)
//                 }
//               }}
//               type='number'
//               name='question_2_grade'
//               id='question_2_grade'
//               className=' w-11 text-center focus:outline-none flex-1 bg-[#e4ffe7] rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               value={question2_Result[2] === '' ? '0' : question2_Result[2]}
//               onChange={(e) => handleInputChange(e, 2, 4)}
//             />
//             <span className='inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /04
//             </span>
//           </div>{' '}
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion3Array = [...question3_Result]
//                   updatedQuestion3Array[2] = '0'
//                   setQuestion3_Result(updatedQuestion3Array)
//                 }
//               }}
//               type='number'
//               name='question_3_grade'
//               id='question_3_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question3_Result[2] === '' ? '0' : question3_Result[2]}
//               onChange={(e) => handleInputChange(e, 2, 4)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /04
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className=' grid grid-cols-2 text-black items-center m-2 text-sm font-medium '>
//         <div className='flex gap-x-2'>
//           <span className=' flex flex-col items-center'>
//             Q1{' '}
//             <span className='bg-[#DFFFD0] px-3 py-2'>
//               {getQuestionResult(question1_Result)}
//             </span>
//           </span>
//           <span className=' flex flex-col items-center'>
//             Q2{' '}
//             <span className='bg-[#DFFFD0] px-3 py-2'>
//               {getQuestionResult(question2_Result)}
//             </span>
//           </span>
//           <span className=' flex flex-col items-center'>
//             Q3{' '}
//             <span className='bg-[#DFFFD0] px-3 py-2'>
//               {getQuestionResult(question3_Result)}
//             </span>
//           </span>
//           <span className=' flex flex-col items-center'>
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
//           </span>
//         </div>
//         <div className='w-full flex justify-evenly'>
//           <div className=' w-16  h-16  '>
//             {' '}
//             <TriangleShape direction='up' text='Q4' />
//           </div>
//           <div className='w-16  h-16 '>
//             {' '}
//             <TriangleShape direction='down' text='Q5' />
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2  items-center'>
//         <span className=' text-sm text-red-500 font-medium'>
//           Grammar/Sentence Structure (Capitalization/Spelling/Punctuation, Count
//           all the errors and subtract from 7 (-0.5pts for each, if repeat of
//           same mistake, only count once))
//         </span>
//         <div className='flex justify-evenly gap-x-2 '>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion4Array = [...question4_Result]
//                   updatedQuestion4Array[0] = '0'
//                   setQuestion4_Result(updatedQuestion4Array)
//                 }
//               }}
//               type='number'
//               name='question_4_grade'
//               id='question_4_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question4_Result[0] === '' ? '0' : question4_Result[0]}
//               onChange={(e) => handleInputChange(e, 0, 7)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /07
//             </span>
//           </div>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion5Array = [...question5_Result]
//                   updatedQuestion5Array[0] = '0'
//                   setQuestion5_Result(updatedQuestion5Array)
//                 }
//               }}
//               type='number'
//               name='question_5_grade'
//               id='question_5_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question5_Result[0] === '' ? '0' : question5_Result[0]}
//               onChange={(e) => handleInputChange(e, 0, 7)}
//             />
//             <span className='inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /07
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2  items-center'>
//         <span className=' text-sm text-[#7000FF] font-medium'>
//           Content/ Solutions-Oriented in the best way possible? (-0.5 pts for
//           each, responds to questions in a clear manner/resolution, closing
//           remarks, clarity of resolution)
//         </span>
//         <div className='flex justify-evenly gap-x-2 '>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion4Array = [...question4_Result]
//                   updatedQuestion4Array[1] = '0'
//                   setQuestion4_Result(updatedQuestion4Array)
//                 }
//               }}
//               type='number'
//               name='question_4_grade'
//               id='question_4_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question4_Result[1] === '' ? '0' : question4_Result[1]}
//               onChange={(e) => handleInputChange(e, 1, 6)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /06
//             </span>
//           </div>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion5Array = [...question5_Result]
//                   updatedQuestion5Array[1] = '0'
//                   setQuestion5_Result(updatedQuestion5Array)
//                 }
//               }}
//               type='number'
//               name='question_5_grade'
//               id='question_5_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question5_Result[1] === '' ? '0' : question5_Result[1]}
//               onChange={(e) => handleInputChange(e, 1, 6)}
//             />
//             <span className='inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /06
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2  items-center'>
//         <span className=' text-sm text-red-500 font-medium'>
//           Formatting (Salutation and complimentary close (worth 0.5 pt each),
//           Paragraph formatting, i.e. strikes the right balance of # of
//           paragraphs)
//         </span>
//         <div className='flex justify-evenly gap-x-2 '>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion4Array = [...question4_Result]
//                   updatedQuestion4Array[2] = '0'
//                   setQuestion4_Result(updatedQuestion4Array)
//                 }
//               }}
//               type='number'
//               name='question_4_grade'
//               id='question_4_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               value={question4_Result[2] === '' ? '0' : question4_Result[2]}
//               onChange={(e) => handleInputChange(e, 2, 4)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /04
//             </span>
//           </div>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion5Array = [...question5_Result]
//                   updatedQuestion5Array[2] = '0'
//                   setQuestion5_Result(updatedQuestion5Array)
//                 }
//               }}
//               type='number'
//               name='question_5_grade'
//               id='question_5_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question5_Result[2] === '' ? '0' : question5_Result[2]}
//               onChange={(e) => handleInputChange(e, 2, 4)}
//             />
//             <span className='inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /04
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2  items-center'>
//         <span className=' text-sm text-[#7000FF] font-medium'>
//           Appropriate Tone (Empathy/Friendliness, i.e. thank you, apology,
//           considerate in response) (-0.5pt)
//         </span>
//         <div className='flex justify-evenly gap-x-2 '>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion4Array = [...question4_Result]
//                   updatedQuestion4Array[3] = '0'
//                   setQuestion4_Result(updatedQuestion4Array)
//                 }
//               }}
//               type='number'
//               name='question_4_grade'
//               id='question_4_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               value={question4_Result[3] === '' ? '0' : question4_Result[3]}
//               onChange={(e) => handleInputChange(e, 3, 3)}
//             />
//             <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /03
//             </span>
//           </div>
//           <div className='flex rounded-md '>
//             <input
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace') {
//                   e.preventDefault() // Prevent the Backspace key from navigating back
//                   const updatedQuestion5Array = [...question5_Result]
//                   updatedQuestion5Array[3] = '0'
//                   setQuestion5_Result(updatedQuestion5Array)
//                 }
//               }}
//               type='number'
//               name='question_5_grade'
//               id='question_5_grade'
//               className=' w-11 text-center focus:outline-none bg-[#e4ffe7] flex-1 rounded-none rounded-l-md  border-0  text-gray-900  sm:text-sm sm:leading-6'
//               placeholder='0'
//               min={0}
//               max={9}
//               value={question5_Result[3] === '' ? '0' : question5_Result[3]}
//               onChange={(e) => handleInputChange(e, 3, 3)}
//             />
//             <span className='inline-flex items-center text-center rounded-r-md border border-l-0 border-gray-300 px-2 text-gray-500 sm:text-sm'>
//               /03
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GradingRubicSectionCS

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useQuestionResultStore } from "@/store/useQuestionResultStore";
// import TriangleShape from "./TriangleShape";

import { AlertCircle } from "lucide-react";
import { useState } from "react";

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
  const [Q1Bool, setQ1Bool] = useState(false);
  const [Q2Bool, setQ2Bool] = useState(false);
  const [Q3Bool, setQ3Bool] = useState(false);
  const [Q4Bool, setQ4Bool] = useState(false);
  const [Q5Bool, setQ5Bool] = useState(false);

  const toggle = (passed: string) => {
    console.log("passed", passed);
    if (passed === "Q1") {
      setQ1Bool(!Q1Bool);
      console.log("here", Q1Bool);
      setQ2Bool(false);
      setQ3Bool(false);
      setQ4Bool(false);
      setQ5Bool(false);
    } else if (passed === "Q2") {
      console.log("here2");
      setQ2Bool(!Q2Bool);
      console.log("here", Q2Bool);

      setQ1Bool(false);
      setQ3Bool(false);
      setQ4Bool(false);
      setQ5Bool(false);
    } else if (passed === "Q3") {
      setQ3Bool(!Q3Bool);
      console.log("here", Q3Bool);

      setQ2Bool(false);
      setQ1Bool(false);
      setQ4Bool(false);
      setQ5Bool(false);
    } else if (passed === "Q4") {
      setQ4Bool(!Q4Bool);
      console.log("here", Q4Bool);

      setQ2Bool(false);
      setQ3Bool(false);
      setQ1Bool(false);
      setQ5Bool(false);
    } else if (passed === "Q5") {
      setQ5Bool(!Q5Bool);
      console.log("here", Q5Bool);

      setQ2Bool(false);
      setQ3Bool(false);
      setQ4Bool(false);
      setQ1Bool(false);
    }
  };

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
          <div
            style={{ alignItems: "center" }}
            className=" flex flex-row justify-center gap-2 "
          >
            <h1 className=" flex">Q1</h1>
            <div
           
            onMouseEnter={() => toggle("Q1")}
            onMouseLeave={() => toggle("Q1")}  onClick={() => toggle("Q1")}>
              <AlertCircle className="w-4 h-4 text-[black]  cursor-pointer" />
              {Q1Bool == true ? (
                <div
                  className=" rounded-2xl"
                  style={{
                    position: "absolute",
                    maxWidth: "15vw",
                    background: "#222222",
                    fontSize: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    paddingLeft: "0.7vw",
                    paddingRight: "0.7vw",
                    color: "white",
                    // textAlign:'center',
                    // borderColor: "#222222",
                    // borderWidth: 1,
                    right: "25vw",
                    top: "16.5vh",
                  }}
                >
                  1-English Fluency (Word choice/Awkward language - How native
                  of an English writer/speaker are they?) (0.5 pt each)
                  <br />
                  <br />
                  2-Grammar/Sentence Structure (Capitalization/Spelling
                  /Punctuation, Count all the errors and subtract from 6
                  (-0.5pts for each, if repeat of same mistake, only count
                  once))
                  <br />
                  <br />
                  3-Followed Instructions (-0.5 pts for each, if the
                  instructions weren't followed)
                </div>
              ) : null}
            </div>
          </div>

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

          <div
            style={{ alignItems: "center" }}
            className=" flex flex-row justify-center gap-2 mt-10 "
          >
            <h1 className=" flex">Q4</h1>
            <div 
            onMouseEnter={() => toggle("Q4")}
            onMouseLeave={() => toggle("Q4")} onClick={() => toggle("Q4")}>
              <AlertCircle className="w-4 h-4 text-[black]  cursor-pointer" />
              {Q4Bool == true ? (
                <div
                  className=" rounded-2xl"
                  style={{
                    position: "absolute",
                    maxWidth: "30vw",
                    background: "#222222",
                    fontSize: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    paddingLeft: "0.7vw",
                    paddingRight: "0.7vw",
                    // textAlign:'center',
                    borderColor: "black",
                    color: "white",
                    borderWidth: 1,
                    right: "25vw",
                    top: "10vh",
                  }}
                >
                  Grammar/Sentence Structure
                  (Capitalization/Spelling/Punctuation, Count all the errors and
                  subtract from 7 (-0.5pts for each, if repeat of same mistake,
                  only count once))
                  <br />
                  <br />
                  Content/ Solutions-Oriented in the best way possible? (-0.5
                  pts for each, responds to questions in a clear
                  manner/resolution, closing remarks, clarity of resolution)
                  <br />
                  <br />
                  Formatting (Salutation and complimentary close (worth 0.5 pt
                  each), Paragraph formatting, i.e. strikes the right balance of
                  # of paragraphs)
                  <br />
                  <br />
                  Appropriate Tone (Empathy/Friendliness, i.e. thank you,
                  apology, considerate in response) (-0.5pt)
                </div>
              ) : null}
            </div>
          </div>

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
          <div
            style={{ alignItems: "center" }}
            className=" flex flex-row justify-center gap-2 "
          >
            <h1 className=" flex">Q2</h1>
            <div
            onMouseEnter={() => toggle("Q2")}
            onMouseLeave={() => toggle("Q2")}  onClick={() => toggle("Q2")}>
              <AlertCircle className="w-4 h-4 text-[black]  cursor-pointer" />
              {Q2Bool == true ? (
                <div
                  className=" rounded-2xl"
                  style={{
                    position: "absolute",
                    maxWidth: "15vw",
                    background: "#222222",
                    fontSize: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    paddingLeft: "0.7vw",
                    paddingRight: "0.7vw",
                    color: "white",
                    // textAlign:'center',

                    right: "14.6vw",
                    whiteSpace: "break-spaces",
                    top: "16.5vh",
                  }}
                >
                  1-English Fluency (Word choice/Awkward language - How native
                  of an English writer/speaker are they?) (0.5 pt each)
                  <br />
                  <br />
                  2-Grammar/Sentence Structure (Capitalization/Spelling
                  /Punctuation, Count all the errors and subtract from 6
                  (-0.5pts for each, if repeat of same mistake, only count
                  once))
                  <br />
                  <br />
                  3-Followed Instructions (-0.5 pts for each, if the
                  instructions weren't followed)
                </div>
              ) : null}
            </div>
          </div>
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
          <div
            style={{ alignItems: "center" }}
            className=" flex flex-row justify-center gap-2 mt-10 "
          >
            <h1 className=" flex">Q5</h1>
            <div
            onMouseEnter={() => toggle("Q5")}
            onMouseLeave={() => toggle("Q5")} 
            onClick={() => toggle("Q5")}>
              <AlertCircle className="w-4 h-4 text-[black]  cursor-pointer" />
              {Q5Bool == true ? (
                <div
                  
                  className=" rounded-2xl"
                  style={{
                    position: "absolute",
                    maxWidth: "30vw",
                    background: "#222222",
                    fontSize: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    paddingLeft: "0.7vw",
                    paddingRight: "0.7vw",
                    // textAlign:'center',

                    color: "white",
                    right: "14.5vw",
                    top: "10vh",
                  }}
                >
                  Grammar/Sentence Structure
                  (Capitalization/Spelling/Punctuation, Count all the errors and
                  subtract from 7 (-0.5pts for each, if repeat of same mistake,
                  only count once))
                  <br />
                  <br />
                  Content/ Solutions-Oriented in the best way possible? (-0.5
                  pts for each, responds to questions in a clear
                  manner/resolution, closing remarks, clarity of resolution)
                  <br />
                  <br />
                  Formatting (Salutation and complimentary close (worth 0.5 pt
                  each), Paragraph formatting, i.e. strikes the right balance of
                  # of paragraphs)
                  <br />
                  <br />
                  Appropriate Tone (Empathy/Friendliness, i.e. thank you,
                  apology, considerate in response) (-0.5pt)
                </div>
              ) : null}
            </div>
          </div>
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
          <div
            style={{ alignItems: "center" }}
            className=" flex flex-row justify-center gap-2 "
          >
            <h1 className=" flex">Q3</h1>
            <div
            onMouseEnter={() => toggle("Q3")}
            onMouseLeave={() => toggle("Q3")}  onClick={() => toggle("Q3")}>
              <AlertCircle className="w-4 h-4 text-[black]  cursor-pointer" />
              {Q3Bool == true ? (
                <div
                  className=" rounded-2xl"
                  style={{
                    position: "absolute",
                    maxWidth: "15vw",
                    background: "#222222",

                    fontSize: "15px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    paddingLeft: "0.7vw",
                    // textAlign:'center',
                    color: "white",
                    right: "4vw",
                    top: "16.5vh",
                  }}
                >
                  1-English Fluency (Word choice/Awkward language - How native
                  of an English writer/speaker are they?) (0.5 pt each)
                  <br />
                  <br />
                  2-Grammar/Sentence Structure (Capitalization/Spelling
                  /Punctuation, Count all the errors and subtract from 6
                  (-0.5pts for each, if repeat of same mistake, only count
                  once))
                  <br />
                  <br />
                  3-Followed Instructions (-0.5 pts for each, if the
                  instructions weren't followed)
                </div>
              ) : null}
            </div>
          </div>

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
