
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Blog</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Kelme Blog</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Insights, tips, and stories from the world of sports and athletic lifestyle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-3">Latest Articles</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Stay updated with our newest content.
              </p>
              <Link to="/blog/latest-articles">
                <Button size="sm" className="w-full">Read Latest</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-3">Buying Guides</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Expert advice on choosing the right gear.
              </p>
              <Link to="/blog/buying-guides">
                <Button size="sm" variant="outline" className="w-full">View Guides</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-3">Style Tips</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Fashion and athletic wear styling advice.
              </p>
              <Link to="/blog/style-tips">
                <Button size="sm" variant="outline" className="w-full">Get Tips</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-3">Performance Insights</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Training tips and performance optimization.
              </p>
              <Link to="/blog/performance-insights">
                <Button size="sm" variant="outline" className="w-full">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
