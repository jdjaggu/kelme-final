
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ShopAllPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Shop All</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse our complete collection of athletic gear, casual wear, and accessories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Link to="/category/men">
            <Button className="w-full">Men's Collection</Button>
          </Link>
          <Link to="/category/women">
            <Button className="w-full" variant="outline">Women's Collection</Button>
          </Link>
          <Link to="/category/kids">
            <Button className="w-full" variant="outline">Kids' Collection</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopAllPage;
