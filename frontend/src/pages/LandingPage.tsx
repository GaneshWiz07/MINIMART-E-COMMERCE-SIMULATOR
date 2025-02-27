import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MiniMart</h1>
          <p className="hero-subtitle">Your One-Stop Shop for Everything You Need</p>
          <div className="flex justify-center">
            <Link to="/products" className="btn-primary">Start Shopping</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-[#F7AEF8] mb-4">Wide Selection</h3>
            <p className="text-white/90">Browse through our extensive collection of products</p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold text-[#B388EB] mb-4">Fast Delivery</h3>
            <p className="text-white/90">Get your orders delivered right to your doorstep</p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold text-[#72DDF7] mb-4">Best Prices</h3>
            <p className="text-white/90">Enjoy competitive prices and regular discounts</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage