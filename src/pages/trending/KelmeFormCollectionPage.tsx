
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const KelmeFormCollectionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/trending" className="text-gray-500 hover:text-kelme-green">Trending</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Kelme Form Collection</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Kelme Form Collection</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Performance meets style in our signature Form Collection. Engineered for athletes who demand excellence.
        </p>
        <Link to="/category/men/form-collection">
          <Button className="mr-4">Shop Men's Form Collection</Button>
        </Link>
        <Link to="/category/women/form-collection">
          <Button variant="outline">Shop Women's Form Collection</Button>
        </Link>
      </div>
    </div>
  );
};

export default KelmeFormCollectionPage;
