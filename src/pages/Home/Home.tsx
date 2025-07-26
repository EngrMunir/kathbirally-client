
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/features/hook";
import { logout } from "../../redux/features/auth/authSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Welcome 👋</h1>

        {user ? (
          <>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Role:</strong> {user.role}
            </p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
