
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const KelmeStyleByPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/trending" className="text-gray-500 hover:text-kelme-green">Trending</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Kelme Style By</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Kelme Style By</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Curated styles by athletes, influencers, and fashion icons. Discover looks that inspire.
        </p>
        <Link to="/category/men/style-by">
          <Button className="mr-4">Men's Style Inspiration</Button>
        </Link>
        <Link to="/category/women/style-by">
          <Button variant="outline">Women's Style Inspiration</Button>
        </Link>
      </div>
    </div>
  );
};

export default KelmeStyleByPage;
