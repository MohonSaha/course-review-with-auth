# Course Review Assignment

## Overview

This project is a course review application built with Express and MongoDB.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Porgramming-Hero-web-course/l2b2a3-course-review-MohonSaha.git
   ```

2. Navigate to the project directory:

   ```
   cd course-review-assignment
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a .env file in the root of the project and set the following environment variables::
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/course_review
   NODE_ENV: development
   ```

## Running the Application

### Development Mode

#### Run the following command to start the development server:

    npm run start:dev

### Production Mode

#### Build the TypeScript files and start the server:

    npm run build
    npm start:prod
