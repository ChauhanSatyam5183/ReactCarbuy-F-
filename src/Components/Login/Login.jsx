import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        const formBody = new URLSearchParams();
        for (const key in data) {
            formBody.append(key, data[key]);
        }

        try {
          const response = await fetch("https://reactcarbuy-backend.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody.toString(),
            credentials: "include"  // ✅ Send and receive cookies
        });

            const result = await response.json();

            console.log(result);
            const mess=result.message; 
            if (result.success) {
                alert("You are logged in! 🎉");
                
                // localStorage.setItem("token", result.token); // Save token for authentication
                closeModal(); // Close modal after login
            } else {
                alert(mess);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    function closeModal() {
        const el = document.getElementById("my_modal_3");
        if (el) {
            el.close();
        }
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button 
                            type="button" 
                            onClick={closeModal} 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>

                        <h3 className="font-bold text-lg">Login!</h3>
                        
                        {/* Email Field */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br/>
                            <input type="email" placeholder="Enter your email"
                                className="w-80 py-1 px-3 border rounded-md"
                                {...register("Email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Password Field */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br/>
                            <input type="password" placeholder="Enter your password"
                                className="w-80 py-1 px-3 border rounded-md"
                                {...register("Password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Submit Button & Signup Link */}
                        <div className="flex justify-around mt-4">
                            <button 
                                type="submit"
                                className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
