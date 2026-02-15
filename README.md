# 🧑‍💼 Employee Management System

A full-stack Employee Management System built using *React + TypeScript* for the frontend and *Spring Boot* for the backend.  
The application supports complete *CRUD operations* (Create, Read, Update, Delete) with REST API integration and MySQL database.

---

## 🚀 Features

- ➕ Add new employees (First Name, Last Name, Email)
- 📋 View all employees in a professional dashboard table
- ✏️ Update employee details with pre-filled forms
- ❌ Delete employees with confirmation popup
- 🔄 Full-stack integration using REST APIs
- 📱 Responsive design for desktop and mobile

---

## 🛠️ Technologies Used

### Frontend
- React.js
- TypeScript
- Axios
- Bootstrap
- React Router DOM

### Backend
- Spring Boot
- RESTful APIs
- JPA / Hibernate

### Database
- MySQL

---

## 🗄️ Database Schema

*Table: Employee*

| Column Name  | Type        | Description |
|--------------|------------|------------|
| id           | INT (PK)   | Auto Increment Primary Key |
| first_name   | VARCHAR    | Employee First Name |
| last_name    | VARCHAR    | Employee Last Name |
| email        | VARCHAR    | Employee Email |

---

## 📸 Screenshots

### Add Employee Page
![Add Employee](Add-Employee-form.png)

### Update Employee Page
![Update Employee](Update-Employee-page.png)

### Employee List Page
![Employee List](Employee-list-with-Updata-and-Delete.png)

---

## 🔗 API Integration

The frontend communicates with the backend using *Axios* to send HTTP requests and receive JSON responses from Spring Boot REST APIs.

---

## ▶️ How to Run the Project

### Backend
1. Open backend in IntelliJ
2. Configure MySQL database
3. Run Spring Boot application

### Frontend
1. Navigate to frontend folder
2. Run:
   ```bash
   npm install
   npm start



 
