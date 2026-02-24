from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, Base, SessionLocal
import models
from models import Resume
from pydantic import BaseModel
from ai_service import ask_ai

app = FastAPI()

# 🔥 CORS MUST BE HERE — immediately after app creation
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

# Dependency for DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "Backend is working"}

@app.post("/chat")
def chat(request: ChatRequest, db: Session = Depends(get_db)):
    resume = db.query(Resume).first()

    if not resume:
        return {"error": "Resume not found"}

    ai_reply = ask_ai(request.message)

    return {"reply": ai_reply}
import uvicorn

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000)
