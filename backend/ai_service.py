import requests
import os
from dotenv import load_dotenv
from database import SessionLocal
from models import Resume

load_dotenv()


def ask_ai(user_question: str):

    # Always read env variable inside function
    api_key = os.getenv("OPENROUTER_API_KEY")

    if not api_key:
        return "OpenRouter API key not configured on server."

    # -------- Fetch Resume --------
    try:
        db = SessionLocal()
        resume = db.query(Resume).first()
        db.close()
    except Exception:
        return "Database error while fetching resume."

    if not resume or not resume.content:
        return "Resume not found."

    resume_text = resume.content

    # -------- OpenRouter Config --------
    url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        # Recommended by OpenRouter
        "HTTP-Referer": "https://portfolio-ai",
        "X-Title": "Suhani Portfolio Assistant"
    }

    system_prompt = f"""
You are an AI assistant representing Suhani Dwivedi, a Full Stack Developer.

Behavior rules:

1. If user greets:
   - Respond politely and briefly.
   - Introduce yourself as Suhani's portfolio assistant.
   - Ask how you can help.

2. If user asks about skills, experience, projects, education:
   - Use ONLY the resume context.
   - Keep answers concise (3–6 sentences).
   - Be recruiter-friendly.
   - Use bullet points when appropriate.

3. If question is unrelated:
   - Say: "That information is not available in the resume."

4. Never invent information.

Tone:
Confident, professional, clear, slightly conversational.

Resume Context:
{resume_text}
"""

    data = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_question}
        ],
        "temperature": 0.7
    }

    try:
        response = requests.post(
            url,
            headers=headers,
            json=data,
            timeout=30
        )

        if response.status_code != 200:
            return f"OpenRouter error {response.status_code}: {response.text}"

        result = response.json()

        if "choices" not in result:
            return f"Unexpected OpenRouter response: {result}"

        return result["choices"][0]["message"]["content"]

    except requests.exceptions.Timeout:
        return "AI service timeout. Please try again."

    except Exception as e:
        return f"Server error: {str(e)}"
