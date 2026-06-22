import { Link } from "react-router-dom";
import {
  PaperAirplaneIcon,
  CpuChipIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function RecruiterAI() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">
      <div className="mx-auto max-w-5xl p-8">
        <div className="mb-8">
          <Link to="/dashboard" className="text-sm text-gray-500 hover:text-black">
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-4xl font-bold">Recruiter AI</h1>

          <p className="mt-2 text-gray-600">
            Ask questions about your resume, skills, projects, and career growth.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <UserCircleIcon className="h-5 w-5" />
            </div>

            <div className="rounded-2xl bg-gray-100 px-4 py-3">
              Am I ready for an AI/ML internship?
            </div>
          </div>

          <div className="mb-8 flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <CpuChipIcon className="h-5 w-5" />
            </div>

            <div className="max-w-2xl rounded-2xl bg-[#f7f7f5] px-4 py-3">
              Based on your resume, you have a strong technical foundation.
              However, adding deployment experience, Docker knowledge, and
              measurable project impact would significantly improve your
              internship readiness.
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask Recruiter AI anything..."
                className="flex-1 rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />

              <button className="rounded-2xl bg-black px-5 text-white">
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <button className="rounded-2xl border bg-white p-4 text-left hover:bg-gray-50">
            How can I improve my ATS score?
          </button>

          <button className="rounded-2xl border bg-white p-4 text-left hover:bg-gray-50">
            What projects should I build next?
          </button>

          <button className="rounded-2xl border bg-white p-4 text-left hover:bg-gray-50">
            Am I ready for internships?
          </button>

          <button className="rounded-2xl border bg-white p-4 text-left hover:bg-gray-50">
            Rewrite my project description
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruiterAI;