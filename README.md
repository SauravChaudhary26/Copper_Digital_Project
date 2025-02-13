# Copper_Digital_Project

# MERN To-Do App

A simple To-Do application built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**.

## Features

-  Add, delete, and mark tasks as completed.
-  Fully responsive UI using React.
-  Backend API with CRUD operations.
-  MongoDB for data storage.

---

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install Dependencies

#### **Backend Setup**

```sh
cd backend
npm install
```

#### **Frontend Setup**

```sh
cd ../frontend
npm install
```

---

## Environment Variables

Create a `.env` file inside the **backend** folder and add the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## Running the Application

### **Start the Backend**

```sh
cd backend
npm start
```

This starts the Express server on **[http://localhost:5000](http://localhost:5000)**.

### **Start the Frontend**

```sh
cd ../frontend
npm start
```

This starts the React app on **[http://localhost:3000](http://localhost:3000)**.

---

## API Endpoints

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/todos`     | Fetch all todos |
| POST   | `/todos`     | Add a new todo  |
| DELETE | `/todos/:id` | Delete a todo   |

---

## Technologies Used

-  **Frontend:** React, Axios, CSS
-  **Backend:** Node.js, Express.js, MongoDB
-  **Database:** MongoDB

---
