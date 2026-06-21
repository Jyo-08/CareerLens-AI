import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  TrendingUp,
  AlertCircle,
  Flame,
  Clock,
  Rocket,
  CheckCircle,
} from "lucide-react";

function Roadmap() {
  const highPriority = [
    {
      title: "Learn Docker",
      time: "5 Days",
      impact: "+8% Role Match",
      description:
        "Docker will strengthen your deployment knowledge and make your AI projects look production-ready.",
    },
    {
      title: "Deploy an AI Project",
      time: "1 Week",
      impact: "+10% Recruiter Score",
      description:
        "Deploy one complete AI/ML project with a live link, GitHub README, and clear technical explanation.",
    },
  ];

  const mediumPriority = [
    {
      title: "Contribute to Open Source",
      time: "2 Weeks",
      impact: "Industry Visibility",
    },
    {
      title: "Improve Resume Metrics",
      time: "2 Days",
      impact: "ATS Improvement",
    },
  ];

  const projects = [
    {
      title: "AI Resume Analyzer",
      difficulty: "Medium",
      focus: "NLP + FastAPI + React",
    },
    {
      title: "End-to-End MLOps Pipeline",
      difficulty: "Hard",
      focus: "ML Deployment + Docker",
    },
    {
      title: "Job Trend Predictor",
      difficulty: "Medium",
      focus: "Data Science + Visualization",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-900">
      <main className="mx-auto max-w-6xl px-8 py-10">
        <Link
          to="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium text-gray-500">
            Personalized Growth Plan
          </p>

          <h1 className="text-4xl font-bold">
            Career Roadmap for AI/ML Intern
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            Based on your resume analysis, CareerLens AI generated a focused
            action plan to improve your role match, ATS compatibility, and
            recruiter impression.
          </p>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">
                Current Readiness
              </span>
              <span className="text-sm font-semibold">72%</span>
            </div>

            <div className="h-3 w-full rounded-full bg-gray-200">
              <div className="h-3 w-[72%] rounded-full bg-black"></div>
            </div>

            <div className="mt-3 flex justify-between text-sm text-gray-500">
              <span>Current: 72%</span>
              <span>Target: 90%</span>
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <Target className="mb-4" size={24} />
            <p className="text-sm text-gray-500">Current Score</p>
            <h2 className="mt-2 text-3xl font-bold">72%</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <TrendingUp className="mb-4" size={24} />
            <p className="text-sm text-gray-500">Target Score</p>
            <h2 className="mt-2 text-3xl font-bold">90%</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <AlertCircle className="mb-4" size={24} />
            <p className="text-sm text-gray-500">Skills Missing</p>
            <h2 className="mt-2 text-3xl font-bold">4</h2>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">High Priority Actions</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {highPriority.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                    <Flame size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">High Priority</p>
                  </div>
                </div>

                <p className="text-gray-600">{item.description}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <Clock size={18} className="mb-2" />
                    <p className="text-xs text-gray-500">Estimated Time</p>
                    <p className="font-semibold">{item.time}</p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <TrendingUp size={18} className="mb-2" />
                    <p className="text-xs text-gray-500">Expected Impact</p>
                    <p className="font-semibold">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Medium Priority Actions</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {mediumPriority.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle size={24} className="mb-4" />
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <div className="mt-4 flex gap-3 text-sm">
                  <span className="rounded-full bg-gray-100 px-3 py-1">
                    {item.time}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1">
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Rocket size={26} />
            <h2 className="text-2xl font-bold">Recommended Projects</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-gray-200 bg-[#fafafa] p-5"
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{project.focus}</p>

                <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600">
                  {project.difficulty}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Roadmap;