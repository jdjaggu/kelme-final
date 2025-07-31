
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TrendingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Trending</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Trending Now</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay ahead of the curve with our trending collections and style movements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Kelme Form Collection</h3>
              <p className="text-gray-600 mb-6">
                Performance meets style in our signature collection.
              </p>
              <Link to="/kelme-form-collection">
                <Button>Explore Form Collection</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Kelme Style By</h3>
              <p className="text-gray-600 mb-6">
                Curated styles by athletes and fashion icons.
              </p>
              <Link to="/kelme-style-by">
                <Button variant="outline">Discover Style By</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
