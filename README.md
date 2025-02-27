**LIVE SITE:**  [https://minimart-scja.onrender.com](https://minimart-scja.onrender.com)

# MINIMART E-COMMERCE APP(Simulation)

A modern, lightweight e-commerce application built with React and TypeScript, featuring client-side state management.

## Features

- Product Management (CRUD operations)
- Responsive Design with Modern UI
- Local Storage for Product Data
- Real-time Notifications
- Client-side Form Validation

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- React Router for navigation
- React Hot Toast for notifications
- HeadlessUI and HeroIcons for UI components

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React Context providers
│   ├── pages/         # Page components
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── package.json       # Frontend dependencies
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The application will run on port 3000 by default.

## Features Documentation

### Product Management
- Add new products with name, price, image URL, and specifications
- Edit existing products
- Delete products
- View product details

### State Management
- Uses React Context API for global state management
- Product state includes:
  - List of products
  - Selected product for editing
- Persistent storage using localStorage

### Styling
- Utilizes TailwindCSS for responsive design
- Custom animations for enhanced UX:
  - Fade-in effects
  - Bounce animations
  - Spin animations
- Gradient backgrounds and modern glassmorphism effects

### Form Handling
- Client-side validation for:
  - Required fields
  - Price format
  - URL format
- Real-time error feedback
- Toast notifications for operation status

## Component Documentation

### ProductManagementPage
Main component for product CRUD operations.

**Props**: None

**State**:
- formData: Manages form input values
- Product context state: Manages global product state

**Key Functions**:
- handleSubmit: Processes form submission
- handleChange: Handles form input changes

### ProductContext
Provides global state management for products.

**Methods**:
- addProduct: Adds a new product
- updateProduct: Updates existing product
- deleteProduct: Removes a product
- selectProduct: Sets product for editing

## Development Guidelines

### Adding New Features
1. Create new components in the appropriate directory
2. Update state management if needed
3. Add necessary routing
4. Implement error handling
5. Add appropriate styling

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Maintain consistent component structure
- Use meaningful variable and function names

## Build and Deployment

To build the application for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

