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
  Accept a specific assignment (requires authentication).

- **POST** `/api/admins/assignments/:id/reject`  
  Reject a specific assignment (requires authentication).

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YourUsername/Assignment_approval_apis.git
   
2. **Navigate to the project directory**:

   `cd Assignment_approval_apis`

3. **Install dependencies**:

   `npm install`
