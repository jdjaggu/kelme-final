
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BestSellersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Best Sellers</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Best Sellers</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our most popular products loved by athletes and sports enthusiasts worldwide.
        </p>
        <Link to="/category/men/best-sellers">
          <Button className="mr-4">Shop Men's Best Sellers</Button>
        </Link>
        <Link to="/category/women/best-sellers">
          <Button variant="outline">Shop Women's Best Sellers</Button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellersPage;
