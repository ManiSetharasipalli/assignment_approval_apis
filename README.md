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

   `git clone https://github.com/ManiSetharasipalli/assignment_approval_apis.git`

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
  
7. **Start the application**:

   `npm start`

- Once the server is running, you can test the user registration endpoint by sending a POST request to `http://localhost:5000/api/users/register` or the admin registration endpoint at `http://localhost:5000/api/admins/register`.


## Testing the API

To test the API, you can use Postman or any other API testing platform. Below are some screenshots demonstrating the usage of the API endpoints.

### Example: User Registration Endpoint

1. **User Registration**:  
   Send a POST request to `http://localhost:5000/api/users/register` with the following body:


   ![userRegistration](https://github.com/user-attachments/assets/f95ed89e-8b89-4310-bab6-e6fbbac2b8a7)
   
2. **User Login**:
   Send a POST request to `http://localhost:5000/api/users/login` with the following body:


   ![userLogin](https://github.com/user-attachments/assets/ed23c7fc-9dd7-4c91-8d95-1dac3dd837f3)


### Example: Upload Assignment

3. **Upload Assignment**:
   
   After logging in, you will receive a JWT token. Send a POST request to `http://localhost:5000/api/users/upload` with the required authentication headers:

   - **Authorization Header**: Use the token received during login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```
     ```
     ```
    ![authorization](https://github.com/user-attachments/assets/1899565d-42ce-4251-ba89-f7d6e1080ccb)

   ```
   ```

  ![Screenshot 2024-10-11 224206](https://github.com/user-attachments/assets/28c1dec3-aad2-494d-9b86-07be40a97543)

   
   
5. **Admin Registration**:  
   Send a POST request to `http://localhost:5000/api/admins/register` with the following body:
```
```
![adminRegistration](https://github.com/user-attachments/assets/58e33fec-8e8e-434b-96be-0f8101e191f7)  

5. **Admin Accepting Assignment**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/accept` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```
   
   ![Screenshot 2024-10-11 224238](https://github.com/user-attachments/assets/eacac656-50a7-4694-a30f-797232aaf84f)
   
### Example: Admin Rejecting Assignment

6. **Admin Rejecting Assignment**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/reject` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Screenshot 2024-10-11 224303](https://github.com/user-attachments/assets/1aff58c6-d4f6-4b40-98d6-78ad844d773e)

### Example: Admin Specific Task Accepting

6. **Admin Specific Task Accepting**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/:task/accept` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Screenshot 2024-10-11 224512](https://github.com/user-attachments/assets/36b33555-d602-4e98-b4c4-dc1b888848e6)

### Example: Admin Specific Task Rejecting

8. **Admin Specific Task Rejecting**:  
   Send a POST request to `http://localhost:5000/api/admins/assignments/:id/:task/reject` with the required authentication headers:

   - **Authorization Header**: Use the token received during admin login and set it as a Bearer token:
     ```
     Authorization: Bearer your_jwt_token
     ```

   ![Screenshot 2024-10-11 224538](https://github.com/user-attachments/assets/3cfa9da6-a5cc-4809-a212-a2ccfbcde07e)

These are a few screenshots demonstrating some of the key API endpoints. For the remaining functionality, please clone the repository and check the code thoroughly to explore all available endpoints.

Feel free to reach out if you have any questions or need further assistance!

## Acknowledgements

  
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
