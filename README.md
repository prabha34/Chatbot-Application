<img width="1848" height="1005" alt="image" src="https://github.com/user-attachments/assets/59814819-ca68-45be-a9de-2ac8f3300786" />
<img width="1803" height="966" alt="image" src="https://github.com/user-attachments/assets/c488a270-f77f-4ef5-aba0-1ef92b3b507e" />
<img width="1852" height="990" alt="image" src="https://github.com/user-attachments/assets/55970abc-a53e-40a9-8323-ef815c4c9b5e" />



---

##  CHATBOT APPLICATION

A full-stack chatbot application built with **ReactJS**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**. BotSpoof allows users to interact with a dynamic, responsive chatbot interface, while demonstrating smooth API integration and database management.

---

## Features

* **Interactive Chat Interface:** Built with ReactJS and styled using Tailwind CSS for a clean and responsive UI.
* **RESTful APIs:** Backend powered by Node.js and Express.js to handle requests efficiently.
* **Database Integration:** MongoDB stores all chat and user data securely.
* **API Testing:** Tested with Postman to ensure accurate communication between frontend and backend.
* **Full-Stack Demonstration:** Showcases skills in frontend development, backend development, and database management.

---

## Tech Stack

* **Frontend:** ReactJS, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **API Testing:** Postman

---

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prabha34/Chatbot-Application.git
   cd Chatbot-Application
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   npm install
   ```

   * Create a `.env` file in the `backend` folder with the following:

     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
   * Start the backend server:

     ```bash
     npm start
     ```

3. **Frontend Setup:**

   ```bash
   cd frontend
   npm install
   npm start
   ```

   * The React app will run on `http://localhost:3000` by default.

---

## Usage

1. Open the frontend in your browser.
2. Interact with the chatbot interface.
3. Messages are sent to the backend, processed, and stored in MongoDB.
4. You can also test the APIs using Postman to see how requests and responses are handled.

---











# Go into your project folder
cd chatbot

# Initialize git (only if not done already)
git init

# Add your GitHub repo as remote
git remote add origin https://github.com/prabha34/Chatbot-Application.git

# Create a .gitignore so junk files don’t get tracked
echo "node_modules/
.env
dist/
build/
.DS_Store
" > .gitignore

# Stage everything
git add .

# Commit
git commit -m "Initial commit: frontend (React) + backend (Node/Express)"

# Rename branch to main (GitHub default)
git branch -M main

# Push your code
git push -u origin main
