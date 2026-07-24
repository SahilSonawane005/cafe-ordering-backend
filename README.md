# 🍽️ QR Cafe Ordering Backend API

A production-style RESTful backend built using **Node.js, Express.js, PostgreSQL, Redis, and JWT Authentication** for a QR-based Cafe Ordering System.

Customers can scan a QR code placed on a table, browse the menu, place orders, and generate bills without requiring staff assistance.

This project was built with focus on **backend architecture, clean code practices, database design, authentication, caching, API documentation, and deployment.**

---

# 🚀 Live Demo

### Swagger Documentation

https://qr-cafe-backend-l3vi.onrender.com/api-docs

---

# ✨ Features

- JWT Authentication
- Refresh Token Authentication
- Role Based Access
- QR Code Based Table Management
- Category Management
- Menu Management
- Table Session Management
- Order Transaction Management
- Bill Generation
- PostgreSQL Database
- Redis Caching
- Swagger API Documentation
- Layered Backend Architecture
- RESTful APIs
- Cloud Deployment (Render + Neon)

---

# 🏗️ Backend Architecture

```
                Client

                  │

                  ▼

             Express Routes

                  │

                  ▼

             Controllers

                  │

                  ▼

              Services

                  │

                  ▼

            Repository Layer

                  │

                  ▼

             PostgreSQL DB
```

Each layer has a single responsibility:

- Routes → API Endpoints
- Controller → Handle Request/Response
- Service → Business Logic
- Repository → Database Queries

---

# 🗂 Project Structure

```
src/

├── config/
├── controllers/
├── docs/
├── middleware/
├── repository/
├── routes/
├── services/
├── utils/
├── .env
├── .neon
├── app.js
└── server.js
```

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL
- Neon Database

## Cache

- Redis (cache aside pattern)

## Authentication

- JWT
- Refresh Tokens
- bcrypt

## API Documentation

- Swagger (OpenAPI)

## Deployment

- Render
- Neon PostgreSQL

## Tools

- Git
- GitHub
- Docker (Development)

---

# 📚 APIs

## Authentication

- Register
- Login
- Refresh Token
- Logout

---

## Categories

- Create Category
- Get Categories
- Get Categories by id
- Update Category
- Delete Category

---

## Menu

- Create Menu items
- Get Menu items
- Get Menu items by id
- Update Menu items
- Delete Menu items

---

## Tables

- Create Table
- Get Tables
- Get Table By ID
- Update Table
- Delete Table
- Create Table Session

---

## Orders

- Add Item
- Update Order Item Status
- Generate Bill
- Get Orders

---

# 🗄 Database Design

Main Tables

- Users
- Roles
- Status
- Categories
- Menu
- Tables
- Table Sessions
- Order Transactions
- Orders

The database is normalized using foreign keys and maintains relationships between menu items, sessions, tables, and orders.

---

# 🔄 Order Flow

```
Customer

      │

Scan QR

      │

Browse Menu

      │

Select Items

      │

Create Table Session

      │

Create Order Transaction

      │

Kitchen Updates Status

      │

Generate Bill

      │

Order Created

      │

Session Closed
```

---

# 🔐 Authentication Flow

```
Login

   │

Verify Credentials

   │

Generate JWT

   │

Generate Refresh Token

   │

Access Protected APIs

   │

Refresh Access Token
```

---

# 🚀 Redis Usage

Redis is used for caching frequently accessed data to reduce database queries.

Current Implementation

- Category Caching

Concepts Applied

- Cache Aside Pattern
- TTL
- Cache Invalidation

---

# 📖 API Documentation

Swagger UI

```
/api-docs
```

Every API contains

- Request Body
- Parameters
- Responses
- Authentication
- Schemas

---

# 🔒 Security

- Password Hashing (bcrypt)
- JWT Authentication
- Refresh Token Flow
- Protected Routes
- Environment Variables
- SQL Parameterized Queries

---

# 💡 Backend Practices Followed

- Layered Architecture
- Separation of Concerns
- REST API Principles
- Repository Pattern
- Service Layer
- Clean Folder Structure
- Reusable Utilities
- Environment Configuration
- Modular Routing
- Proper HTTP Status Codes
- Swagger Documentation
- Redis Caching
- Database Normalization
- Foreign Key Relationships

---

# 📈 Future Improvements

- Request Validation (Joi/Zod)
- API Testing (Jest + Supertest)
- Global Error Handler
- Pagination
- Winston/Pino Logging
- Rate Limiting
- Docker Compose
- CI/CD Pipeline

---

# 👨‍💻 Developed By

**Sahil Sonawane**

Backend Developer

Node.js | Express.js | PostgreSQL | Redis
