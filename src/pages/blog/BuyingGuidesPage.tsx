
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BuyingGuidesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/blog" className="text-gray-500 hover:text-kelme-green">Blog</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Buying Guides</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Buying Guides</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Expert advice and comprehensive guides to help you choose the perfect athletic gear.
        </p>
        <Link to="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    </div>
  );
};

export default BuyingGuidesPage;
