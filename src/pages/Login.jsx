import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="mt-2 text-gray-600">
          Login to access your private CareerLens workspace.
        </p>

        <input
          className="mt-6 w-full rounded-2xl border px-4 py-3 outline-none focus:border-black"
          placeholder="Email"
          type="email"
        />

        <input
          className="mt-4 w-full rounded-2xl border px-4 py-3 outline-none focus:border-black"
          placeholder="Password"
          type="password"
        />

        <button
          onClick={() => navigate("/upload")}
          className="mt-6 w-full rounded-2xl bg-black py-3 text-white"
        >
          Login
        </button>

        <p className="mt-5 text-sm text-gray-600">
          New user?{" "}
          <Link to="/signup" className="font-semibold text-black">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;