# CRUD Chat Web App

This project is a simple **CRUD Chat Application** built with **Node.js**, **Express**, **MongoDB**, and **EJS**. The application demonstrates basic CRUD operations (Create, Read, Update, Delete) for managing chat messages. It includes a user-friendly interface styled with **Tailwind CSS**.

---

## Features
- **Create**: Add new chat messages.
- **Read**: View all existing chat messages.
- **Update**: Edit the content of any existing chat message.
- **Delete**: Remove chat messages.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rahulk7762/crud-chat-web-app.git
   cd crud-chat-web-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB (ensure MongoDB is running on `mongodb://127.0.0.1:27017`).

4. Populate the database with sample data:
   ```bash
   node init.js
   ```

5. Start the application:
   ```bash
   node index.js
   ```

6. Visit the application in your browser:
   ```
   http://localhost:8080
   ```

---

## Project Structure
```
crud-chat-web-app/
├── models/
│   └── chat.js            # Mongoose schema for chat messages
├── public/                # Static assets (CSS, JS, etc.)
├── views/                 # EJS templates for views
│   ├── index.ejs          # Home page (displays all chats)
│   ├── edit.ejs           # Edit chat message page
│   └── new.ejs            # Create new chat page
├── init.js                # Script to populate database with sample data
├── index.js               # Main application entry point
└── package.json           # Project dependencies and scripts
```

---

## Routes
| HTTP Method | Route              | Description                     |
|-------------|--------------------|---------------------------------|
| GET         | `/chats`           | View all chats                 |
| GET         | `/chats/new`       | Render form to create a chat   |
| POST        | `/chats`           | Create a new chat              |
| GET         | `/chats/:id/edit`  | Render form to edit a chat     |
| PUT         | `/chats/:id`       | Update a specific chat         |
| DELETE      | `/chats/:id`       | Delete a specific chat         |

---

## Technologies Used
- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript), Tailwind CSS
- **Database**: MongoDB
- **Middleware**:
  - `method-override`: For handling PUT and DELETE requests
  - `body-parser`: For parsing form data (via `express.urlencoded`)


---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Author
[Rahul](https://github.com/rahulk7762)

For any queries or issues, feel free to reach out or open an issue in the repository. 😊

---

## Future Enhancements
- Add **user authentication**.
- Enable **real-time chat** using WebSockets.
- Integrate **frontend frameworks** like React or Vue.js.  
