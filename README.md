# Course Review Assignment

### API Documentation:

https://documenter.getpostman.com/view/27435661/2s9YkuYHrY

## Overview : How to set up and run your project

This project is a course review application built with Express and MongoDB.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Porgramming-Hero-web-course/l2b2a4-course-review-with-auth-MohonSaha.git
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
   NODE_ENV= production
   PORT=5000
   DATABASE_URL=mongodb+srv://**********:**********@cluster0.grqmol8.mongodb.net/course-review?retryWrites=true&w=majority
   BCRYPT_SALT_ROUNDS=**
   JWT_ACCESS_SECRET=**********f2ffb6f54f8938458cb49f3ff404a58f56279994df5081e********************
   ```

## Running the Application

### Development Mode

#### Run the following command to start the development server:

    npm run start:dev

### Production Mode

#### Build the TypeScript files and start the server:

    npm run build
    npm start:prod
