import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/features/hook";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));

      toast.success("Logged in", { id: toastId, duration: 2000, position: 'top-center' });
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const handleAdminClick = () => {
    setValue("email", "munir@gmail.com");
    setValue("password", "123456");
  };

  const handleUserClick = () => {
    setValue("email", "siraj@gmail.com");
    setValue("password", "123456");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <div className="flex justify-between mb-4">
          <button
            type="button"
            onClick={handleAdminClick}
            className="border px-4 py-2 rounded hover:bg-gray-100 transition text-sm"
          >
            Admin
          </button>
          <button
            type="button"
            onClick={handleUserClick}
            className="border px-4 py-2 rounded hover:bg-gray-100 transition text-sm"
          >
            User
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          New here?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
