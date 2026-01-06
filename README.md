# ExQuizIt v2

**ExQuizIt v2** is a full-stack quiz game web application built with the **MERN stack**. It extends the original frontend-only version by adding a **TypeScript-based backend**, **JWT authentication**, and **persistent sessions**.

Trivia questions are fetched from the [Open Trivia DB API](https://opentdb.com/api_config.php).



## Features

### General
- Single Page Application (SPA) using **React**
- Client-side routing with **React Router**
- Fully responsive UI using **Bootstrap** / **Bootswatch**
- Multiple-choice trivia questions
- Supports categories, difficulty levels, and question counts
- Timer for each question

### Authentication (v2)
- Login & logout system
- JWT-based authentication
- Tokens stored securely in **HTTP-only cookies**
- Session persistence across page refreshes
- Protected routes on frontend and backend


## Tech Stack: MERN

### Frontend (JavaScript)
- **React**
- **React Router**
- **Vite**
- **Jest** & **React Testing Library**

### Backend (TypeScript)
- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **JWT** authentication
- **Cookie-based sessions**
- **dotenv**



## Installation & Running Locally

1. Clone the repository 

   `git clone https://github.com/ManugAtma/ex_quiz_it.git` <br>
   `cd ex_quiz_it` 

2. Frontend setup

    `cd client` <br>
    `npm install` <br>
    `npm run dev` <br>

3. Backend setup

    `cd client` <br>
    `npm install` <br>
    `npx tsx src/server.ts` <br>

4. Environment variables in client/.env

    `VITE_BACKEND_BASE_URL=http://localhost:3000`

5. Environment variables in server/.env

    ```MONGODB_URI=your_mongodb_uri 
    JWT_SECRET=your_secret
    JWT_EXPIRATION_TIME=3600
    NODE_ENV=development
    PORT=3000
    ```


## Usage

- Log in using the provided demo credentials
- Start a new quiz
- Adjust quiz settings (category, difficulty, number of questions)
- Answer timed questions
- View your score and statistics at the end
- Log out securely

## License

This project is licensed under the MIT License.


