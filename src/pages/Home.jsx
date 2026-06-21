import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-900">
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">CareerLens AI</h1>

        <Link
          to="/upload"
          className="rounded-xl bg-black px-5 py-2 text-white"
        >
          Analyze Resume
        </Link>
      </nav>

      <main className="mx-auto max-w-5xl px-8 py-20 text-center">
        <p className="mb-4 text-sm font-medium text-gray-500">
          NLP-Powered Resume Intelligence Platform
        </p>

        <h2 className="text-5xl font-bold leading-tight">
          Transform your resume into career intelligence.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          CareerLens AI analyzes your resume, identifies skill gaps,
          simulates recruiter feedback, and generates a personalized
          career roadmap.
        </p>

        <div className="mt-10">
          <Link
            to="/login"
            className="rounded-2xl bg-black px-8 py-4 text-white text-lg"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;