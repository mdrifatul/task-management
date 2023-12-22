// import { useQuery } from "@tanstack/react-query";
// import useAxios from "../Hook/useAxios";

// const Tasklist = () => { 
//   const axios = useAxios();
//   const {
//     data: task = [], isLoading: loading,refetch,} = useQuery({
//     queryKey: ["task"],
//     queryFn: async () => {
//       const res = await axios.get("/gettask");
//       return res.data;
//     },
//   });


//   return (
//     <div className="grid grid-cols-3 text-center mt-10 gap-3">
//       <div className="border shadow-2xl shadow-slate-700">
//         <div className="bg-[#0273ba] rounded-t-lg">
//           <h1 className="text-xl font-semibold py-3 text-white">Todo list</h1>
//         </div>
//         <div>
          
//         </div>
//       </div>
//       <div className="bg-red-400" >ongoing</div>
//       <div> completed</div>
//     </div>
//   );
// };

// export default Tasklist;