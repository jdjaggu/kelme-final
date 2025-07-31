
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/custom/ProductCard";
import { getSaleProducts, getNewArrivals } from "@/data/demoProducts";

const LatestDropsPage = () => {
  const latestDrops = [...getSaleProducts(), ...getNewArrivals().slice(0, 3)];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Latest Drops</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Latest Drops</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Limited edition releases and exclusive collections. Get them before they're gone.
        </p>
        <Link to="/category/men/latest-drops">
          <Button className="mr-4">Shop Men's Latest Drops</Button>
        </Link>
        <Link to="/category/women/latest-drops">
          <Button variant="outline">Shop Women's Latest Drops</Button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {latestDrops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestDropsPage;
