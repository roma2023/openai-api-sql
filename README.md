# SQL Query Generator with React, Node.js, and ChatGPT API

This project is a full-stack application that converts natural language input into SQL queries using React for the front end, Node.js and Express for the backend, and integrating the ChatGPT API. The goal is to provide users with an intuitive tool to generate SQL queries without any prior coding knowledge.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Introduction
The SQL Query Generator project aims to simplify the process of writing SQL queries by allowing users to input natural language descriptions. The application translates these descriptions into SQL queries using the OpenAI ChatGPT API.

## Features
- Convert natural language descriptions into SQL queries.
- User-friendly interface built with React.
- Backend API built with Node.js and Express.
- Integration with the OpenAI ChatGPT API for query generation.
- Real-time query generation and display.

## Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express
- **API:** OpenAI ChatGPT API
- **Styling:** CSS (using a stylesheet for simplicity)

## Getting Started
### Prerequisites
- Node.js (v18 or later)
- npm (v7 or later)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/roma2023/openai-api-sql.git
   cd openai-api-sql

2. Install dependencies for both client and server:
   ```sh
   cd client
   npm install
   cd ../server
   npm install

### Environment Variables
Create a ```.env``` file in the ```server``` directory with your OpenAI API key: ``` OPENAI_API_KEY=your_openai_api_key ```

## Project Structure
    ```
    openai-api-sql/
    │
    ├── client/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── App.jsx
    │   │   ├── index.js
    │   │   └── styles.module.css
    │   ├── .gitignore
    │   ├── package.json
    │   └── README.md
    │
    ├── server/
    │   ├── api.js
    │   ├── generate.js
    │   ├── index.js
    │   ├── .env.example
    │   ├── .gitignore
    │   └── package.json
    │
    └── README.md
    ```
## Usage
### Running the Project
1. Start the backend server:
    ```
    cd server
    npm start
    ```
2. Start the frontend development server:
    ```
    cd client
    npm run dev
    ```
3. Open your browser and navigate to ```http://localhost:3000```.

### Example
To generate an SQL query, enter a natural language description such as "Select the first 10 elements from the table users where the column age is greater than 18" and click "Generate Query". The generated SQL query will be displayed below the input field.
