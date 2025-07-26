// components/Navbar.tsx
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/features/hook";
import { logout } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">MyApp</Link>

      <div className="flex gap-4">
        {user ? (
          <>
            <span className="text-gray-700">{user.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1 rounded bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
