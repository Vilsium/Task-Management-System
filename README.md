# Task Management System
A simple and user-friendly Task Management System built with React for the frontend and Node.js for the backend. This application allows users to perform CRUD operations on tasks and includes features like task filtering, status toggling, and task list visibility.

## Table of Contents
1. Features
2. Tech Stack
3. Installation
4. Usage
5. Contributing
6. License
7. Contact
8. Demo Video

### 1. Features
* Add Tasks: Users can create new tasks with a title, description, and due date.
* View Tasks: A task list displays all tasks. Tasks can be filtered by status (`Pending` or `Completed`).
* Update Tasks: Task status can be toggled between `Pending` and `Completed` with a sleek sliding bar.
* Delete Tasks: Tasks can be deleted with a confirmation prompt.
* Show/Hide Task List: Users can show or hide the task list dynamically.
* Error Handling: Basic error handling is implemented for backend communication.

### 2. Tech Stack
* Frontend: ReactJS
*  Backend: Node.js, Express.js
* Database: SQLite

### 3. Installation
1. Clone the repository:
  - `git clone https://github.com/your-usernmae/Task-Management-System.git`
  - `cd Task-Management-System`
2. Install dependencies:
   * For the backend:
      - `npm install`
   * For the frontend:
      - `cd frontend`
      - `npm install`
3. Set up environment variables:
  * Create a `.env` file in the root of your backend directory with the following keys:
    - `PORT = 5000`
    - `DB_PATH = ./tasks.db`
4. Run the Application:
  * Start the backend server:
    - `npm server.js`
  * Start the frontend server:
    - `npm start`

### 4. Usage
1. Create Task:
  * Fill out the form and click "Add Task" to add a new task.
2. Filter Tasks:
  * Use the dropdown to filter tasks by Pending, Completed, or All.
3. Toggle Status:
  * Click the sliding bar to toggle a task's status between Pending and Completed.
4. Delete Task:
  * Click the "Delete" button to remove a task. Confirm the action when prompted.
5. Show/Hide Tasks:
  * Use the "Show Tasks" or "Hide Tasks" button to control the visibility of the task list.

### 5. Contribution
Contributors are welcome!
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Added some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request.

### 6. License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

### 7. Contact
 * Name: Vyom Singhal
 * Email: [vilsium28@gmail.com](vilsium28@gmail.com)
 * Github: [https://github.com/Vilsium](https://github.com/Vilsium)

### 8. Demo Video
 [https://www.loom.com/share/1da74b5b1c234ea2a9a2b6289a0105f7?sid=bf5e9175-3c2f-4bb8-a331-a71dd80cd02a](https://www.loom.com/share/1da74b5b1c234ea2a9a2b6289a0105f7?sid=bf5e9175-3c2f-4bb8-a331-a71dd80cd02a)
