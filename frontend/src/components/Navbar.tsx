import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-white flex items-center"
          >
            🛍️ MiniMart
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/manage-products"
              className="flex items-center space-x-1 text-white hover:text-white/80"
            >
              <span>⚙️ Manage Products</span>
            </Link>
            <Link
              to="/checkout"
              className="flex items-center space-x-1 text-white hover:text-white/80"
            >
              <span>🛒 Checkout</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
