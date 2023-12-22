import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";

const Alltask = () => {
 const axios = useAxios();
  const {
    data: task = [], isLoading: loading,refetch,} = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get("/gettask");
      return res.data;
    },
  });

// console.log(task);
  return (
    <div>
      <div className="grid grid-cols-3 text-center mt-10 gap-3">
      <div className="border shadow-lg shadow-slate-700 bg-slate-100">
        <div className="bg-[#0273ba] rounded-t-lg">
          <h1 className="text-xl font-semibold py-3 text-white">Todo list</h1>
        </div>
        <div className="mb-5">
          {task.map(item => <>
          <div  key={item?._id} className="w-11/12 bg-white mx-auto my-2 rounded-lg text-left shadow-xl shadow-slate-400 px-2">
            <h1  className="font-semibold text-md">{item?.name}</h1>
            <p><span className="font-semibold">Deadline:</span> {item?.deadline}</p>
            <p><span className="font-semibold  text-sm">Description:</span> {item?.description}</p>
          </div>
          </>)}
        </div>
      </div>
      <div className="border shadow-lg shadow-slate-700 bg-slate-100">
      <div className="bg-[#0273ba] rounded-t-lg">
          <h1 className="text-xl font-semibold py-3 text-white">Ongoing</h1>
        </div>
      </div>
      <div className="border shadow-lg shadow-slate-700 bg-slate-100">
      <div className="bg-[#0273ba] rounded-t-lg">
          <h1 className="text-xl font-semibold py-3 text-white">Completed</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Alltask;