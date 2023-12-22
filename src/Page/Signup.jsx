import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../Hook/useAuth';

const Signup = () => {
  const { createUser, signInWithGoogle } = useAuth();
  const navigate= useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        // const user = result.user
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      navigate('/')  
    })
  .catch(error =>{
    console.error(error);
    })
  }


  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl my-3 text-center font-bold text-[#0776a6]">SIGN UP</h2>
        <form
        onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 md:w-1/4 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500">
                password should be at least 6 characters, a capital letter and a special character
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#0776a6] text-white ">
              Register
            </button>
          </div>
        </form>


          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-red-500 font-bold" to="/login">
              Login
            </Link>
          </p>
          <hr className="w-3/5 mx-auto my-3 " />
          <div className="flex justify-center items-center">
            <button onClick={handleGoogleSignin} className="mx-auto btn border-blue  w-fit ">
              <FcGoogle className=" text-2xl"></FcGoogle>
              Login with Google
            </button>
          </div>
      </div>
    </div>
  );
};

export default Signup;