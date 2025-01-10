# Personal Projects

Welcome to my personal projects repository! This collection show cases various applications and experiments I have developed to enhance my skills and explore new technologies.

## Table of Contents

- [Projects](#projects)
  - [Hangman Game](#hangman-game)
  - [Hangman API](#hangman-api)
  - [Goal App](#goal-app)
  - [Goal App API](#goal-app-api)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Projects

### Hangman Game

A web-based implementation of the classic Hangman game, allowing users to guess words within a limited number of attempts. Deployed at [hangman-sand-seven.vercel.app](https://hangman-sand-seven.vercel.app).

- **Features:**
  - Dynamic word generation using an external API (`https://hangman-api-nine.vercel.app`).
  - Interactive on-screen keyboard for letter guessing.
  - Tracks and displays remaining guesses.
  - Win and lose states with animations and feedback.
  - Replayability with "New Game" button.

- **Technologies:** React.js, CSS

### Hangman API

A RESTful API that provides endpoints for playing the Hangman game programmatically. Deployed at [hangman-api-nine.vercel.app](https://hangman-api-nine.vercel.app).

- **Features:**
  - Fetch random words using the `/word` endpoint with a configurable count.
  - Retrieve all available words via the `/all` endpoint.
  - Serves HTML and other static files from the `./public` directory.
  - Allows cross-origin requests for seamless integration with frontend apps.
  - Uses `.env` for secure and flexible port management.

 - **Technologies:** Node.js Express.js

### Goal App

A productivity application designed to help users set, track, and achieve their goals. Deployed at [personal-projects-olive.vercel.app/login](https://personal-projects-olive.vercel.app/login).

- **Features:**
  - User authentication
  - Goal creation and management
  - Progress Tracking

- **Technologies:** React.js (React Router), Firebase

### Goal App API

A RESTful API that provides endpoints to serve motivational quotes to enhance user experience and personalization. Deployed at [personal-projects-nu-five.vercel.app/](https://personal-projects-nu-five.vercel.app/).

- **Features:**
  - Fetch random quotes using the `/quote` endpoint.
  - Retrieve all available words via the `/all` endpoint.
  - Serves static files like documentation or resources from the `./public` directory.
  - CORS enabled for seamless integration with frontend applications.
  - Uses `.env` for flexible and secure configuration (e.g., server port).
  - Minimalistic design for quick responses and easy deployment.

## Technologies Used

This repository encompasses a range of technologies, including but not limited to:

  - Frontend: HTML, CSS, JavaScript, React.js
  - Backend: Node.js, Express.js
  - Databases: Firebase
  - Deployment: Vercel

## Contact
- **Email:** aminmomin2006@gmail.com
