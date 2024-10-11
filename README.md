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


## Testing the API

To test the API, you can use Postman or any other API testing platform. Below are some screenshots demonstrating the usage of the API endpoints.

### Example: User Registration Endpoint

1. **User Registration**:  
   Send a POST request to `http://localhost:5000/api/users/register` with the following body:

   ![User Registration Screenshot](""C:\Users\manis\OneDrive\Pictures\userRegistration.png"")

### Example: Admin Registration Endpoint

2. **Admin Registration**:  
   Send a POST request to `http://localhost:5000/api/admins/register` with the following body:

   ![Admin Registration Screenshot](path/to/your/admin-registration-screenshot.png)

### Example: Upload Assignment

3. **Upload Assignment**:  
   After logging in, you will receive a JWT token. Send a POST request to `http://localhost:5000/api/users/upload` with the required authentication headers:

   - **Authorization Header**: Use the token received during login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Upload Assignment Screenshot](path/to/your/upload-assignment-screenshot.png)

4. **Admin Registration**:  
   Send a POST request to `http://localhost:5000/api/admins/register` with the following body:

   ![Admin Registration Screenshot](path/to/your/admin-registration-screenshot.png)
  
5. **Admin Accepting Assignment**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/accept` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Admin Accepting Assignment Screenshot](path/to/your/admin-accepting-assignment-screenshot.png)

### Example: Admin Rejecting Assignment

5. **Admin Rejecting Assignment**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/reject` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Admin Rejecting Assignment Screenshot](path/to/your/admin-rejecting-assignment-screenshot.png)

### Example: Admin Specific Task Accepting

6. **Admin Specific Task Accepting**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/:task/accept` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Admin Specific Task Accepting Screenshot](path/to/your/admin-specific-task-accepting-screenshot.png)

### Example: Admin Specific Task Rejecting

7. **Admin Specific Task Rejecting**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/:task/reject` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Admin Specific Task Rejecting Screenshot](path/to/your/admin-specific-task-rejecting-screenshot.png)

These are a few screenshots demonstrating some of the key API endpoints. For the remaining functionality, please clone the repository and check the code thoroughly to explore all available endpoints.

Feel free to reach out if you have any questions or need further assistance!

## Acknowledgements

  
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
