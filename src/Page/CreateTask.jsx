import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../Hook/useAxios";

const CreateTask = () => {

  const { register, handleSubmit, reset } = useForm();
  const axios = useAxios();

  const onSubmit = async(data) => {
      const contestField = {
        name: data.name,
        deadline: data.deadline,
        description: data.description,

      } 
      console.log(contestField);
      const contestPost = await axios.post('/addtask', contestField)
      console.log(contestPost.data);
      if(contestPost.data.insertedId){
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Menu Item Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }

  };


  return (
    <div>
      <div className="md:my-32 w-8/12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-6 mb-10">
            <div className="form-control">
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Contest Name"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("description", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Description"
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                step="0.01"
                {...register("deadline", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Deadline"
              />
            </div>
            <div className="form-control">
              <select {...register("tags", { required: true })} className="select select-ghost w-full max-w-xs rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none text-gray-500 text-base"
              >
                <option disabled selected>
                Select Priority
                </option>
                <option>low</option>
                <option>moderate</option>
                <option>article</option>
                <option>high</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline w-40 mx-auto outline-[#0776a6] text-[#0776a6] hover:bg-[#5999b5] "
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;