import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Create Account</h1>

        <input
          className="mt-6 w-full rounded-2xl border px-4 py-3"
          placeholder="Email"
        />

        <input
          className="mt-4 w-full rounded-2xl border px-4 py-3"
          placeholder="Password"
          type="password"
        />

        <button
          onClick={() => navigate("/login")}
          className="mt-6 w-full rounded-2xl bg-black py-3 text-white"
        >
          Create Account
        </button>

        <p className="mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-black">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;