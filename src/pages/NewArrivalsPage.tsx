
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/custom/ProductCard";
import { getNewArrivals } from "@/data/demoProducts";

const NewArrivalsPage = () => {
  const newArrivals = getNewArrivals();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">New Arrivals</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the latest additions to our collection. Fresh styles, innovative designs, and cutting-edge athletic gear.
        </p>
        <Link to="/category/men/new-arrivals">
          <Button className="mr-4">Shop Men's New Arrivals</Button>
        </Link>
        <Link to="/category/women/new-arrivals">
          <Button variant="outline">Shop Women's New Arrivals</Button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;
