from typing import Dict

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI()

class Item(BaseModel):
    name: str = Field(..., min_length=1)
    description: str | None = None
    price: float = Field(..., gt=0)

# In-memory storage
items: Dict[int, Item] = {}
next_id = 1


@app.get("/items")
def list_items():
    return [{"id": i, **items[i].dict()} for i in items]


@app.get("/items/{item_id}")
def get_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"id": item_id, **items[item_id].dict()}


@app.post("/items", status_code=201)
def create_item(item: Item):
    global next_id
    items[next_id] = item
    created = {"id": next_id, **item.dict()}
    next_id += 1
    return created


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    items[item_id] = item
    return {"id": item_id, **item.dict()}


@app.delete("/items/{item_id}", status_code=204)
def delete_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    del items[item_id]
    return None

{
  "id": "fastapi-rest-api",
  "title": "FastAPI REST API",
  "description": "Build a REST API using FastAPI, Pydantic models, and automatic API documentation.",
  "path": "assignments/fastapi-rest-api",
  "dueDate": "2026-07-10",
  "attachments": [
    {
      "name": "Starter Code",
      "file": "starter_code.py",
      "type": "python"
    },
    {
      "name": "Requirements",
      "file": "requirements.txt",
      "type": "text"
    }
  ]
}