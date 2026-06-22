import { Link } from "react-router-dom";
import {
  SparklesIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  TrophyIcon,
  ChatBubbleLeftRightIcon,
  MapIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

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
              Career Progress
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium text-gray-500">Resume Intelligence Report</p>

            <h1 className="mt-2 text-4xl font-bold">
              Your CareerLens analysis is ready.
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Based on your resume and selected target role, CareerLens AI has
              generated recruiter-style insights, skill gaps, and improvement actions.
            </p>

            <section className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                ["ATS Score", "82/100", TrophyIcon],
                ["Role Match", "76%", BriefcaseIcon],
                ["Domain", "AI/ML", SparklesIcon],
                ["Strength", "Strong", ChartBarIcon],
              ].map(([title, value, Icon]) => (
                <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-gray-500">{title}</p>
                  <h2 className="mt-2 text-3xl font-bold">{value}</h2>
                </div>
              ))}
            </section>

            <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Career Readiness Level</p>
                  <h2 className="mt-2 text-3xl font-bold">Level 7 AI/ML Intern</h2>
                  <p className="mt-2 text-gray-600">
                    You are currently internship-ready but need stronger deployment,
                    production experience, and industry exposure to reach the next level.
                  </p>
                </div>

                <div className="hidden text-right md:block">
                  <p className="text-sm text-gray-500">Current Readiness</p>
                  <h3 className="text-5xl font-bold">72%</h3>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Level 7</span>
                  <span>Level 8</span>
                </div>

                <div className="h-3 w-full rounded-full bg-gray-200">
                  <div className="h-3 w-[72%] rounded-full bg-black"></div>
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  18% away from Junior AI Engineer level
                </p>
              </div>
            </section>

            <section className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Skills Found</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "React", "FastAPI", "Machine Learning", "GitHub"].map((skill) => (
                    <span key={skill} className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <ExclamationCircleIcon className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Missing Skills</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Docker", "TensorFlow", "MLOps", "Deployment"].map((skill) => (
                    <span key={skill} className="rounded-full bg-red-50 px-4 py-2 text-sm text-red-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Top 3 Improvements</h2>
              <p className="mt-2 text-gray-600">
                These changes will have the highest impact on your career readiness.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">#1 HIGH IMPACT</p>
                  <h3 className="mt-2 text-xl font-semibold">Learn Docker</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Improve deployment knowledge and industry readiness.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">#2 HIGH IMPACT</p>
                  <h3 className="mt-2 text-xl font-semibold">Deploy ElevateU</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Showcase real-world deployment experience.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">#3 MEDIUM IMPACT</p>
                  <h3 className="mt-2 text-xl font-semibold">Add Project Metrics</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Quantify project outcomes for stronger recruiter appeal.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Resume Health Check</h2>
              <p className="mt-2 text-gray-600">
                A recruiter-style checklist of your resume quality.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                  <span>Contact Information</span>
                  <span className="font-semibold text-green-600">✓ Good</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                  <span>Projects Section</span>
                  <span className="font-semibold text-green-600">✓ Good</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                  <span>Skills Section</span>
                  <span className="font-semibold text-green-600">✓ Good</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                  <span>Certifications</span>
                  <span className="font-semibold text-yellow-600">⚠ Missing</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                  <span>Deployment Links</span>
                  <span className="font-semibold text-yellow-600">⚠ Improve</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                  <span>Open Source Contributions</span>
                  <span className="font-semibold text-red-600">✗ Not Found</span>
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

            <section className="mt-6 grid gap-6 md:grid-cols-3">
              <Link to="/recruiter-ai" className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <ChatBubbleLeftRightIcon className="h-7 w-7" />
                <h2 className="mt-4 text-xl font-semibold">Talk to Recruiter AI</h2>
                <p className="mt-2 text-gray-600">
                  Ask questions about your resume, role fit, project quality, and next steps.
                </p>
              </Link>

              <Link to="/roadmap" className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <MapIcon className="h-7 w-7" />
                <h2 className="mt-4 text-xl font-semibold">View Career Roadmap</h2>
                <p className="mt-2 text-gray-600">
                  Get a personalized improvement plan based on missing skills and target role.
                </p>
              </Link>

              <Link to="/history" className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <ChartBarIcon className="h-7 w-7" />
                <h2 className="mt-4 text-xl font-semibold">Career Progress</h2>
                <p className="mt-2 text-gray-600">
                  Track your career growth, readiness improvements, and skill progression over time.
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