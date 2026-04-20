# 🏫 School Management API

## 📌 Overview

This project is a REST API built using Node.js, Express, and MySQL.

It allows users to:

* Add new schools
* Fetch schools sorted by proximity to a user’s location

Distance is calculated using the Haversine formula.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MySQL
* dotenv

---

## 📂 Project Structure

```
school-api/
│── config/
│── controllers/
│── routes/
│── .env (not included for security)
│── app.js
```

---

## 🔐 Environment Variables

This project uses environment variables for sensitive data.

Create a `.env` file in the root directory and add:

```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=school_db
PORT=5000
```

⚠️ **Important:**

* Do NOT commit your `.env` file
* Add `.env` to `.gitignore`

---

## 🚀 Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd school-api
```

### 2. Install dependencies

```
npm install
```

### 3. Setup database

Run the following SQL queries:

```
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
```

### 4. Run the server

```
node app.js
```

---

## 📌 API Endpoints

### ➕ Add School

**POST** `/api/addSchool`

Request Body:

```
{
  "name": "ABC School",
  "address": "Churu",
  "latitude": 28.2926,
  "longitude": 74.9679
}
```

---

### 📍 List Schools

**GET** `/api/listSchools?latitude=28.29&longitude=74.96`

Returns:

* List of schools
* Sorted by distance (nearest first)

---

## 🧠 Key Feature

* Location-based sorting using Haversine formula

---

## 🔒 Security Notes

* Environment variables are used for database credentials
* Sensitive files like `.env` are not included in the repository
* No hardcoded credentials in the source code

---

## 👨‍💻 Author

Vikram Swami
