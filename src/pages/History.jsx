import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  TrendingUp,
  Calendar,
  CheckCircle,
} from "lucide-react";

function History() {
  const history = [
    {
      version: "Resume V1",
      date: "June 18, 2026",
      ats: "68/100",
      match: "54%",
      status: "Needs Improvement",
      note: "Missing role-specific keywords and measurable project impact.",
    },
    {
      version: "Resume V2",
      date: "June 20, 2026",
      ats: "76/100",
      match: "69%",
      status: "Improved",
      note: "Added stronger project descriptions and better skill alignment.",
    },
    {
      version: "Resume V3",
      date: "June 21, 2026",
      ats: "82/100",
      match: "76%",
      status: "Strong",
      note: "Improved ATS score and recruiter readability.",
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
            Resume Evolution Tracker
          </p>

          <h1 className="text-4xl font-bold">Analysis History</h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            Track how your resume improves over time across ATS score,
            role match, recruiter readability, and career readiness.
          </p>
        </section>

        <section className="grid gap-5">
          {history.map((item) => (
            <div
              key={item.version}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100">
                      <FileText size={22} />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">{item.version}</h2>
                      <p className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        {item.date}
                      </p>
                    </div>
                  </div>

                  <p className="max-w-xl text-gray-600">{item.note}</p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-500">ATS</p>
                    <h3 className="mt-1 font-bold">{item.ats}</h3>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-500">Match</p>
                    <h3 className="mt-1 font-bold">{item.match}</h3>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-500">Status</p>
                    <h3 className="mt-1 font-bold">{item.status}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <TrendingUp size={26} />
            <h2 className="text-2xl font-bold">Progress Summary</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <CheckCircle className="mb-3" size={22} />
              <p className="text-sm text-gray-500">ATS Improvement</p>
              <h3 className="mt-1 text-2xl font-bold">+14</h3>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <CheckCircle className="mb-3" size={22} />
              <p className="text-sm text-gray-500">Role Match Growth</p>
              <h3 className="mt-1 text-2xl font-bold">+22%</h3>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <CheckCircle className="mb-3" size={22} />
              <p className="text-sm text-gray-500">Latest Status</p>
              <h3 className="mt-1 text-2xl font-bold">Strong</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default History;