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
     server running on port 4002
     Connected to MONGODB
     ```

3. **Frontend Setup:**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   * The React app will run on `http://localhost:5178` by default.

---

## Usage

1. Open the frontend in your browser.
2. Interact with the chatbot interface.
3. Messages are sent to the backend, processed, and stored in MongoDB.
4. You can also test the APIs using Postman to see how requests and responses are handled.

---












### **Step 1: Go into your project folder**

```bash
cd /path/to/your/chatbot
```

---

### **Step 2: Initialize Git (if you haven’t already)**

```bash
git init
```

---

### **Step 3: Add your GitHub repository as remote**

```bash
git remote add origin https://github.com/prabha34/Chatbot-Application.git
```

---

### **Step 4: Create a `.gitignore`**

This will make sure unnecessary files like node_modules, environment variables, and build artifacts aren’t pushed to GitHub:

```bash
echo "node_modules/
.env
dist/
build/
.DS_Store" > .gitignore
```

---

### **Step 5: Stage all files**

```bash
git add .
```

---

### **Step 6: Commit your changes**

```bash
git commit -m "Initial commit: frontend (React) + backend (Node/Express)"
```

---

### **Step 7: Rename branch to main (GitHub default)**

```bash
git branch -M main
```

---

### **Step 8: Push your code to GitHub**

```bash
git push -u origin main
```


