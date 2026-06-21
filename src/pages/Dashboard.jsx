import { Link } from "react-router-dom";
import {
  Brain,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Target,
  MessageCircle,
  Map,
  TrendingUp,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-900">
      <div className="flex">
        <aside className="hidden min-h-screen w-72 border-r border-gray-200 bg-white p-6 md:block">
          <Link to="/" className="text-2xl font-bold">
            CareerLens AI
          </Link>

          <nav className="mt-10 space-y-3 text-sm">
            <Link className="block rounded-xl bg-black px-4 py-3 text-white" to="/dashboard">
              Overview
            </Link>
            <Link className="block rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-100" to="/recruiter-ai">
              Recruiter AI
            </Link>
            <Link className="block rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-100" to="/roadmap">
              Career Roadmap
            </Link>
            <Link className="block rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-100" to="/history">
              Analysis History
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium text-gray-500">
              Resume Intelligence Report
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Your CareerLens analysis is ready.
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Based on your resume and selected target role, CareerLens AI has
              generated recruiter-style insights, skill gaps, and improvement actions.
            </p>

            <section className="mt-8 grid gap-4 md:grid-cols-4">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100">
                  <Target size={22} />
                </div>
                <p className="text-sm text-gray-500">ATS Score</p>
                <h2 className="mt-2 text-3xl font-bold">82/100</h2>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100">
                  <Briefcase size={22} />
                </div>
                <p className="text-sm text-gray-500">Role Match</p>
                <h2 className="mt-2 text-3xl font-bold">76%</h2>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100">
                  <Brain size={22} />
                </div>
                <p className="text-sm text-gray-500">Domain</p>
                <h2 className="mt-2 text-3xl font-bold">AI/ML</h2>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100">
                  <TrendingUp size={22} />
                </div>
                <p className="text-sm text-gray-500">Strength</p>
                <h2 className="mt-2 text-3xl font-bold">Strong</h2>
              </div>
            </section>

            <section className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle size={20} />
                  <h2 className="text-xl font-semibold">Skills Found</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "React", "FastAPI", "Machine Learning", "GitHub"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <AlertCircle size={20} />
                  <h2 className="text-xl font-semibold">Missing Skills</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Docker", "TensorFlow", "MLOps", "Deployment"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-red-50 px-4 py-2 text-sm text-red-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Recruiter POV</h2>

              <p className="mt-4 leading-relaxed text-gray-600">
                Your resume shows strong technical potential with good project exposure.
                However, it needs stronger deployment proof, measurable impact, and more
                role-specific AI/ML tools. Adding quantified project outcomes and
                production-ready project links can significantly improve your shortlist chances.
              </p>
            </section>

            <section className="mt-6 grid gap-6 md:grid-cols-2">
              <Link
                to="/recruiter-ai"
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <MessageCircle size={26} />
                <h2 className="mt-4 text-xl font-semibold">Talk to Recruiter AI</h2>
                <p className="mt-2 text-gray-600">
                  Ask questions about your resume, role fit, project quality, and next steps.
                </p>
              </Link>

              <Link
                to="/roadmap"
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Map size={26} />
                <h2 className="mt-4 text-xl font-semibold">View Career Roadmap</h2>
                <p className="mt-2 text-gray-600">
                  Get a personalized improvement plan based on missing skills and target role.
                </p>
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;