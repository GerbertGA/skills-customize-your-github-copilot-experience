# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a small RESTful API using the FastAPI framework. You will implement CRUD endpoints, request validation with Pydantic models, and use automatic API documentation.

## 📝 Tasks

### 🛠️ Implement the REST API (Core)

#### Description

Create a FastAPI application that manages a simple resource (e.g., `Item`) with endpoints to create, read, update and delete items. Store data in-memory (a Python dict) for simplicity.

#### Requirements
Completed program should:

- Expose endpoints: `GET /items`, `GET /items/{id}`, `POST /items`, `PUT /items/{id}`, `DELETE /items/{id}`
- Use Pydantic models for request validation and response models
- Return appropriate HTTP status codes (201 for create, 404 when not found, etc.)
- Handle invalid input with clear error messages
- Include basic in-memory storage (no external DB required)

### 🛠️ Documentation and Extras

#### Description

Enhance the API with OpenAPI docs (FastAPI provides them automatically) and add an example of how to run and test the service locally.

#### Requirements

- Ensure automatic docs are accessible at `/docs` and `/redoc`
- Provide example `curl` commands to test each endpoint in the README
- (Optional) Add filtering or query parameters for `GET /items`

## Example requests

Create item:

```
curl -sS -X POST http://localhost:8000/items -H "Content-Type: application/json" -d '{"name":"Notebook","price":9.99}'
```

Get items:

```
curl http://localhost:8000/items
```

Get item by id:

```
curl http://localhost:8000/items/1
```

Update item:

```
curl -X PUT http://localhost:8000/items/1 -H "Content-Type: application/json" -d '{"name":"Notebook Pro","price":12.5}'
```

Delete item:

```
curl -X DELETE http://localhost:8000/items/1
```

## How to run (local)

1. Create a virtual environment and install dependencies from `requirements.txt`.

```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. Start the app:

```
uvicorn starter_code:app --reload
```

Open `http://localhost:8000/docs` to view the interactive API docs.
