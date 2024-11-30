## Backend Task Manager Application

Run the backend server: 
npm start

## POSTMAN API Testing

1. Register User
METHOD: POST 
PATH: http://localhost:8000/api/v1/register
BODY: RAW (JSON)
{
    "name":"Prabesh Gupta",
    "email":"prabeshgupta217@gmail.com",
    "password":"NinjaStar001"
}

2. Login User
METHOD: POST 
PATH: http://localhost:8000/api/v1/login
BODY: RAW (JSON)
{
    "name":"Prabesh Gupta",
    "email":"prabeshgupta217@gmail.com",
    "password":"NinjaStar001"
}

3. Create Task
METHOD: POST
PATH: http://localhost:8000/api/v1/task/create
BODY: RAW (JSON)
{
    "title": "new task 1",
    "description": "Just a basic task to create html page"
}

4. Get Tasks
METHOD: GET
PATH: http://localhost:8000/api/v1/tasks

5. Get Task
METHOD: GET
PATH: http://localhost:8000/api/v1/task/:id

6. Update Task
METHOD: PATCH
PATH: http://localhost:8000/api/v1/task/:id
BODY: RAW (JSON)
{
    "title": "Good Day",
    "description": "Monday"
}

7. Delete Task
METHOD: DELETE http://localhost:8000/api/v1/task/:id