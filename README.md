# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Nua Shop – React E-Commerce Assignment

A responsive mini e-commerce application built with React, Vite, SCSS Modules, Context API, and the Fake Store API.

## Live Demo

https://omprakash-nua-test.vercel.app/

## Repository

https://github.com/omprakash-patel/nua-test

---

## Tech Stack

* React 19.2.6
* Vite
* React Router DOM
* Context API
* SCSS Modules
* Fake Store API
* localStorage

---

## Features

### Product Listing Page

* Products fetched from Fake Store API
* Responsive product grid
* Product card with image, title, and price
* Quick Add to Cart functionality
* Loading skeletons during API requests

### Product Detail Page

* Product information fetched by ID
* Image gallery with thumbnail selection
* Quantity selector
* Add to Cart functionality
* Responsive layout for desktop and mobile

### Cart Drawer

* Slide-in drawer from the right
* Dynamic cart item count in navbar
* Update item quantity
* Remove items from cart
* Subtotal and total calculation
* Empty cart state
* Cart data persisted in localStorage

### Responsive Design

* Desktop and mobile layouts
* Responsive product grid
* Mobile-friendly cart drawer

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build Production Version

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```txt
src/
├── components/
├── layouts/
├── pages/
├── router/
├── services/
├── stores/
├── styles/
└── assets/

docs/
└── lighthouse-report.png

README.md
DECISIONS.md
```

---

## Design Decisions

* Used React Context API instead of Redux because the application only requires cart-related global state.
* Cart state is persisted using localStorage to survive page refreshes.
* SCSS Modules were used to keep styles scoped and maintainable.
* Components were split into smaller reusable pieces to improve readability and scalability.

More details can be found in `DECISIONS.md`.

---

## Known Trade-offs

* Fake Store API does not provide product variants such as colors, sizes, inventory, or sale pricing. Some e-commerce behaviors were simplified because of API limitations.
* Cart data is stored entirely on the client using localStorage and is not synchronized with a backend.
* Checkout functionality is intentionally not implemented because it is outside the scope of the assignment.

---

## Lighthouse
A google pagespeed audit was performed on the deployed application.

Screenshot available at:

docs/lighthouse-report.png
```txt
docs/pagespeed-report-desktop.png
docs/pagespeed-report-mobile.png
```
