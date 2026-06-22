import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UploadCloud, FileText, Sparkles } from "lucide-react";
import MobileNav from "../components/MobileNav.jsx";

function Upload() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [role, setRole] = useState("AI/ML Intern");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-900">
      <nav className="flex items-center justify-between px-8 py-6">
        <Link to="/" className="text-2xl font-bold">
          CareerLens AI
        </Link>

        <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 border">
          Resume Intelligence Workspace
        </span>
      </nav>

      <main className="mx-auto max-w-4xl px-8 py-12">
        <div className="mb-10">
          <p className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Sparkles size={16} />
            Step 1 of Career Analysis
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Upload your resume.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            CareerLens AI will analyze your resume, detect skill gaps,
            evaluate role match, and generate recruiter-style feedback.
          </p>
        </div>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <label className="block">
            <div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-[#fafafa] px-6 py-14 text-center transition hover:border-black">
              <UploadCloud size={44} className="mb-4 text-gray-500" />

              <h2 className="text-xl font-semibold">
                Drop your resume here
              </h2>

              <p className="mt-2 text-gray-500">
                Upload a PDF file to begin analysis
              </p>

              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />

              <span className="mt-5 rounded-xl bg-black px-5 py-3 text-white">
                Choose PDF
              </span>
            </div>
          </label>

          {fileName && (
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <FileText className="text-gray-600" />
              <div>
                <p className="font-medium">{fileName}</p>
                <p className="text-sm text-gray-500">Ready for analysis</p>
              </div>
            </div>
          )}

          <div className="mt-8">
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Target Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 outline-none focus:border-black"
            >
              <option>AI/ML Intern</option>
              <option>Data Scientist</option>
              <option>Web Developer</option>
              <option>Backend Developer</option>
              <option>Cybersecurity Intern</option>
              <option>Cloud Engineer</option>
            </select>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-8 w-full rounded-2xl bg-black px-6 py-4 text-lg font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-500"
          >
            {loading ? "Analyzing Resume..." : "Analyze Resume"}
          </button>
        </section>
      </main>
    </div>
  );
}

export default Upload;