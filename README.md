# My Shopping Site

My Shopping Site is a responsive product display application built using **React**, **Vite**, and the **Fake Store API**.  
The project is styled using plain CSS and written completely in JavaScript.  
It also includes an **Add to Cart** feature implemented with the React Context API.

---

## 🛠 Tech Stack

- React  
- Vite 
- React Router DOM 
- Fake Store API  
- JavaScript  
- CSS  
- Bootstrap
- Html 

---

## 📌 Project Overview

This project shows products fetched from the Fake Store API and displays them in a clean and responsive grid layout.  
Users can search products, filter top-rated items, view product details, check the online/offline status and manage a cart.

Key React hooks used: `useState`, `useEffect`, and `useContext`.

---

## ⭐ Features

- View all products  
- Product details page  
- Search functionality  
- Filter by top-rated products 
- Online/Offline Status Indicator 
- Add to Cart  
- Remove items from cart  
- Cart page with item count  
- Fully responsive
- Fast performance using Vite  

---

## 🌐 API Used

Fake Store API  
https://fakestoreapi.com/products

---

## 📦 Installation (Vite Project)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/my-shopping-site.git
cd my-shopping-site

### 2️⃣ Install dependencies
```bash
npm install

### 3️⃣ Start development server
```bash
npm run dev

### 4️⃣ Build for production
```bash
npm run build

## 📁 Folder Structure
my-app/
  src/
    Components/
      Layout/
        About.jsx
        Contact.jsx
        Home.jsx
        Navbar.jsx
        Pagenotfound.jsx

      Products/
        Loder.jsx
        Product.jsx
        Product.css
        ProductDetails.jsx
        ProductsList.jsx

    Utils/
      useGetApiData.js
      useOnlineStatus.js
      CartContext.jsx

    App.css
    App.jsx
    main.jsx

  index.html
  package.json
  vite.config.js
  README.md


