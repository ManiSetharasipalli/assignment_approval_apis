# Assignment Approval APIs

## Description
The Assignment Approval APIs project provides a RESTful API for managing user assignments within a role-based access control system. Users can register, log in, and upload assignments, while admins can view, accept, or reject those assignments. The project utilizes JWT for secure authentication and MongoDB for data storage.

## API Endpoints

### User Endpoints
- **POST** `/api/users/register`  
  Register a new user.

- **POST** `/api/users/login`  
  Log in an existing user.

- **POST** `/api/users/upload`  
  Upload an assignment (requires authentication).

- **GET** `/api/users/admins`  
  Retrieve a list of available admins (requires authentication).

### Admin Endpoints

- **POST** `/api/admins/register`  
  Register a new admin.

- **POST** `/api/admins/login`  
  Log in an existing admin.

- **GET** `/api/admins/assignments`  
  View all assignments (requires authentication).

- **POST** `/api/admins/assignments/:id/accept`  
  Accept a assignment (requires authentication).

- **POST** `/api/admins/assignments/:id/reject`  
  Reject a assignment (requires authentication).
  
- **POST** `/api/admins/assignments/:id/:task/accept`  
  Accept a specific assignment (requires authentication).

- **POST** `/api/admins/assignments/:id/:task/reject`  
  Reject a specific assignment (requires authentication).

## Installation

1. **Ensure you have Node.js installed**:
   
   You need to have Node.js installed on your machine. Download it from [nodejs.org](https://nodejs.org/) and follow the installation instructions.

2. **Ensure you have MongoDB installed**:  
   You need to have MongoDB installed on your machine for the database. You can download it from [mongodb.com](https://www.mongodb.com/try/download/community) and follow the i nstallation instructions. Make sure your MongoDB server is running before starting the application.

3. **Clone the repository**:

   `git clone https://github.com/YourUsername/Assignment_approval_apis.git`

4. **Navigate to the project directory**:

   `cd Assignment_approval_apis`

5. **Install dependencies**:

   `npm install`

6. **Create a `.env` file** in the root directory with the following variables:
   
   - `MONGODB_URI = your_mongodb_uri`
   - `JWT_SECRET = your_jwt_secret`
   - `PORT = 8000`
   
- To get your MongoDB URI, create a database in your MongoDB server (like MongoDB Atlas or a local instance using MongoDB Compass). Once created, copy the connection string provided by MongoDB and replace `your_mongodb_uri` with it.

- **Important**: Ensure there are no extra spaces around the values you enter in the `.env` file. Extra spaces may cause issues in recognizing the credentials.
  
6. **Start the application**:

   `npm start`
- Once the server is running, you can test the user registration endpoint by sending a POST request to `http://localhost:5000/api/users/register` or the admin registration endpoint at `http://localhost:5000/api/admins/register`.

## Acknowledgements

  
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
