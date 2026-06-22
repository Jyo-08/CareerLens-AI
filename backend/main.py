from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pypdf import PdfReader
import io
import re

app = FastAPI(title="CareerLens ATS Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ROLE_SKILLS = {
    "AI/ML Intern": [
        "python", "machine learning", "deep learning", "numpy", "pandas",
        "scikit-learn", "tensorflow", "pytorch", "data preprocessing", "model training",
        "matplotlib", "git", "deployment"
    ],
    "Web Developer": [
        "html", "css", "javascript", "react", "tailwind", "api",
        "git", "responsive design", "frontend", "deployment"
    ],
    "Backend Developer": [
        "python", "fastapi", "node", "express", "sql", "database",
        "api", "authentication", "docker", "git"
    ],
    "Data Scientist": [
        "python", "pandas", "numpy", "statistics", "machine learning",
        "data visualization", "matplotlib", "seaborn", "sql", "scikit-learn"
    ],
    "Cybersecurity Intern": [
        "networking", "linux", "owasp", "burp suite", "vulnerability",
        "penetration testing", "nmap", "wireshark", "security", "python"
    ],
}

def extract_text_from_pdf(file_bytes):
    reader = PdfReader(io.BytesIO(file_bytes))
    text = ""

    for page in reader.pages:
        text += page.extract_text() or ""

    return text

def clean_text(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9+#.\s-]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text

def calculate_ats(text, role):
    required_skills = ROLE_SKILLS.get(role, ROLE_SKILLS["AI/ML Intern"])

    found_skills = []
    missing_skills = []

    for skill in required_skills:
        if skill.lower() in text:
            found_skills.append(skill.title())
        else:
            missing_skills.append(skill.title())

    ats_score = round((len(found_skills) / len(required_skills)) * 100)

    role_match = max(ats_score - 5, 0)

    if ats_score >= 80:
        strength = "Strong"
    elif ats_score >= 60:
        strength = "Moderate"
    else:
        strength = "Needs Improvement"

    return {
        "ats_score": ats_score,
        "role_match": role_match,
        "target_role": role,
        "resume_strength": strength,
        "skills_found": found_skills,
        "missing_skills": missing_skills,
        "recruiter_pov": generate_recruiter_pov(ats_score, missing_skills),
    }

def generate_recruiter_pov(score, missing_skills):
    if score >= 80:
        return "Your resume is well aligned with the target role. Improve it further by adding measurable project outcomes and stronger deployment proof."

    if score >= 60:
        return f"Your resume shows potential, but it is missing important role-specific skills such as {', '.join(missing_skills[:3])}. Adding these can improve your shortlist chances."

    return f"Your resume needs stronger alignment with the target role. Focus first on adding core skills such as {', '.join(missing_skills[:4])}."

@app.post("/analyze-resume")
async def analyze_resume(
    file: UploadFile = File(...),
    role: str = Form(...)
):
    file_bytes = await file.read()

    raw_text = extract_text_from_pdf(file_bytes)
    cleaned_text = clean_text(raw_text)

    result = calculate_ats(cleaned_text, role)

    return result