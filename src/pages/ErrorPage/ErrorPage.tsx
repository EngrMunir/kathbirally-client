import { Link, useNavigate, useRouteError } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-yellow-50 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl w-full text-center">
        <img
          src="https://i.ibb.co/SxMVZWM/error.png"
          alt="Error"
          className="mx-auto max-w-[300px]"
        />

        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-gray-800">
          {error?.data || "Something went wrong"}
        </h1>

        <p className="text-red-600 text-lg mb-2">
          Error {error?.status || 404}:{" "}
          <span className="italic">
            {error?.statusText || error?.message || "Page not found"}
          </span>
        </p>

        <p className="text-gray-600 mb-6">
          Whoops! Looks like the page you're trying to reach doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded transition"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} Inkwell. Design with ❤️ by{" "}
          <a
            href="https://github.com/EngrMunir"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500"
          >
            Md Munir
          </a>
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
