# Grocery Delivery Application

A simple grocery delivery application that allows users to browse, select, and purchase groceries online for delivery. The application features an intuitive interface for both customers and delivery personnel, real-time order tracking, and secure payment processing.

## Features

- User registration and login
- Browse products
- Add products to cart
- Checkout and place orders
- View order status

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Styling**: CSS

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/grocery-delivery-app.git
    cd grocery-delivery-app
    ```

2. **Install backend dependencies:**

    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start the MongoDB server:**

    Ensure your MongoDB server is running. If it's not installed, you can download it from [here](https://www.mongodb.com/try/download/community).

2. **Start the backend server:**

    ```sh
    cd backend
    npm start
    ```

    The backend server will start on `http://localhost:5000`.

3. **Start the frontend development server:**

    ```sh
    cd ../frontend
    npm start
    ```

    The frontend server will start on `http://localhost:3000`.

### Project Structure
grocery-delivery-app/
├── backend/
│ ├── controllers/
│ │ ├── orderController.js
│ │ ├── productController.js
│ │ └── userController.js
│ ├── models/
│ │ ├── Order.js
│ │ ├── Product.js
│ │ └── User.js
│ ├── routes/
│ │ ├── orderRoutes.js
│ │ ├── productRoutes.js
│ │ └── userRoutes.js
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ └── ProductCard.js
│ │ ├── context/
│ │ │ └── CartContext.js
│ │ ├── hooks/
│ │ ├── pages/
│ │ │ ├── Cart.js
│ │ │ ├── Checkout.js
│ │ │ ├── Home.js
│ │ │ ├── Login.js
│ │ │ └── Register.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── styles.css
├── .gitignore
├── README.md
└── package.json



### API Endpoints

- **User Endpoints:**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Login a user
  - `GET /api/users/profile` - Get user profile

- **Product Endpoints:**
  - `GET /api/products` - Get all products
  - `POST /api/products` - Add a new product

- **Order Endpoints:**
  - `POST /api/orders` - Create a new order
  - `GET /api/orders/:userId` - Get orders for a user
  - `PUT /api/orders/:orderId` - Update order status

### Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.


