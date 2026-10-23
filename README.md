# Lab 1: Node.js and Express Server

## Student Details

- **Name:** Amara Sri Vidya
- **Registration Number:** 252U1R9007
- **Section:** Gen-AI 2A

## Live Link

[https://amara-node-express-lab1.vercel.app/](https://amara-node-express-lab1.vercel.app/)

## GitHub Repository

[Amara_Node_Express_Lab1](https://github.com/srividya1393-dev/Amara_Node_Express_Lab1)

## Project Description

A simple web server built using Node.js and Express.js. It provides welcome, about, and current-time routes, along with a 404 handler for unknown routes.

## Technologies Used

1. Node.js
2. Express.js
3. JavaScript
4. Git and GitHub

## How to Run the Project

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start the Server

```bash
node server.js
```

### Step 3: Open in Browser

Open the following URL in your browser:

[http://localhost:3000](http://localhost:3000)

## Endpoints

| Method | Path | Description | Status Code |
|---|---|---|---|
| GET | `/` | Welcome message | 200 |
| GET | `/about` | Name and section in JSON | 200 |
| GET | `/time` | Current date and time | 200 |
| GET | `/unknown` | Not found response | 404 |

## Screenshots

### 1. Home Route

![Home Route](Screenshots/home.png)

### 2. About Route

![About Route](Screenshots/about.png)

### 3. Time Route

![Time Route](Screenshots/time.png)

### 4. 404 Response

![404 Response](Screenshots/not-found.png)

## Implementation

Implemented the required routes using Express.js and tested their HTTP status codes.
Node.js
Express.js
JavaScript
Git and GitHub