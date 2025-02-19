import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../NAVBAR/Navbar";
import Login from "../Login/Login";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const formBody = new URLSearchParams();
    for (const key in data) {
      formBody.append(key, data[key]);
    }

    try {
      const response = await fetch("https://reactcarbuy-backend.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody.toString()
      });
      console.log("sugnu response",response);
      if (response.ok) {
        alert("Signup successful!");
        reset(); // Clear form after successful signup
      } else if(response.status===401) {
        alert(" Signup failed! \n Due to same Email or PhoneNumber Already in Use ! \n Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex mt-4 items-center justify-center">
        <div className="rounded-md w-[500px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </Link>

              <h3 className="font-bold text-lg">Signup!</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  {...register("Name", { required: true })}
                />
                <br />
                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Phone Number</span>
                <br />
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  {...register("PhoneNumber", { required: true })}
                />
                <br />
                {errors.phone && <span className="text-red-500 text-sm">This field is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  {...register("Email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  {...register("Password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
              </div>

              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
