from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from langgraph_agent import run_agent
from database import engine, SessionLocal
from models import Interaction
from sqlalchemy.orm import Session

app = FastAPI()
Interaction.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class SaveRequest(BaseModel):
    hcp: str
    type: str
    sentiment: str
    material: str

@app.get("/")
def home():
    return {"message": "AIVOA Backend Running"}

@app.post("/chat")
def chat(data: ChatRequest):
    reply = run_agent(data.message)
    return {"reply": reply}

@app.post("/save")
def save_data(data: SaveRequest):
    db = SessionLocal()

    item = Interaction(
        hcp=data.hcp,
        type=data.type,
        sentiment=data.sentiment,
        material=data.material
    )

    db.add(item)
    db.commit()
    db.close()

    return {"message": "Interaction saved successfully"}


@app.get("/records")
def get_records():
    db = SessionLocal()

    data = db.query(Interaction).all()

    results = []

    for item in data:
        results.append({
            "id": item.id,
            "hcp": item.hcp,
            "type": item.type,
            "sentiment": item.sentiment,
            "material": item.material
        })

    db.close()

    return results
