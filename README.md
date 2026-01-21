# GadgetGrove

GadgetGrove is a full-stack **MERN e-commerce application** where users can browse products, add them to the cart, place orders, and manage their profile. This project is built with **MongoDB, Express.js, React.js, and Node.js**.

---

## Features

### Frontend

* Browse products with detailed pages
* Product search and filtering
* Responsive design for all devices
* User authentication: Login, Register, Profile
* Cart management and checkout
* Order placement and payment flow
* Admin dashboard for managing products, users, and orders
* Product carousel, ratings, and pagination

### Backend

* RESTful APIs using Express.js
* MongoDB for database management
* User authentication with JWT
* CRUD operations for products, users, and orders
* Order management and payment handling
* File upload support for product images
* Data seeding for products and users

---

## Tech Stack

| Layer          | Technologies                  |
| -------------- | ----------------------------- |
| Frontend       | React.js, Redux, Tailwind CSS |
| Backend        | Node.js, Express.js           |
| Database       | MongoDB                       |
| Authentication | JWT, bcrypt                   |
| Tools          | Nodemon, Axios                |

---

## Installation

### Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
PORT=5000
```

4. Seed initial data (optional):

```bash
node seeder.js
```

5. Start the server:

```bash
npm run server
```

---

### Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm start
```

Frontend runs on `http://localhost:3000` by default.

---

## Project Structure

```
GadgetGrove/
│
├─ backend/
│  ├─ config/        # DB connection
│  ├─ controllers/   # API controllers
│  ├─ data/          # Sample products and users
│  ├─ middleware/    # Auth and error handling
│  ├─ models/        # MongoDB models
│  ├─ routes/        # Express routes
│  ├─ server.js      # App entry point
│  └─ seeder.js      # Seed data script
│
├─ frontend/
│  ├─ public/        # HTML, favicon, manifest
│  ├─ src/
│  │  ├─ actions/    # Redux actions
│  │  ├─ components/ # Reusable UI components
│  │  ├─ constants/  # Redux constants
│  │  ├─ reducers/   # Redux reducers
│  │  ├─ screens/    # Pages / screens
│  │  ├─ store.js    # Redux store
│  │  └─ App.js      # Main app component
│  ├─ package.json
│  └─ index.js
│
└─ README.md
```

---

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add YourFeature"`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Contact

**Rishav Barman**
GitHub: [rishavbarman-dev](https://github.com/rishavbarman-dev)
Email: rishavbarman.dev@gmail.com
