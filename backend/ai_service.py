import requests
import os
from dotenv import load_dotenv
from database import SessionLocal
from models import Resume

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

def ask_ai(user_question: str):
    # Fetch resume from DB
    db = SessionLocal()
    resume = db.query(Resume).first()
    db.close()

    if not resume:
        return "Resume not found."

    resume_text = resume.content

    url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    system_prompt = f"""
You are an AI assistant representing Suhani Dwivedi, a Full Stack Developer.

Your behavior rules:

1. If the user greets (hi, hello, hey, good morning, etc):
   - Respond politely and briefly.
   - Introduce yourself as Suhani's portfolio assistant.
   - Ask how you can help.
   - Do NOT give resume details unless asked.

2. If the user asks about skills, experience, projects, education:
   - Answer using ONLY the resume context below.
   - Keep answers concise (3–6 sentences max).
   - Be professional and recruiter-friendly.
   - Use bullet points when appropriate.

3. If the question is unrelated to the resume:
   - Say: "That information is not available in the resume."

4. Never invent information.

Tone:
- Confident
- Professional
- Clear
- Slightly conversational
- Not robotic
- Not overly long

Resume Context:
{resume_text}
"""

    data = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_question}
        ]
    }
    try:
        response = requests.post(url, headers=headers, json=data)

        if response.status_code != 200:
            return f"OpenRouter error {response.status_code}: {response.text}"

        result = response.json()
        return result["choices"][0]["message"]["content"]

    except Exception as e:
        return str(e)
