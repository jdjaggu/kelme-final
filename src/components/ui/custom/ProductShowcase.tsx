import React from "react";
import ProductCard from "./ProductCard";
import MagicNavigation from "./MagicNavigation";
import { demoProducts } from "@/data/demoProducts";

const ProductShowcase: React.FC = () => {
  const featuredProducts = demoProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Product Showcase
          </h1>
          <p className="text-muted-foreground text-lg">
            Experience our products with stunning 3D flip animations
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Navigation Demo */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Magic Navigation Menu</h2>
          <p className="text-muted-foreground mb-8">
            Beautiful pill-shaped navigation with different gradient variants
          </p>
          
          {/* Multiple Navigation Examples */}
          <div className="space-y-8">
            <div className="relative">
              <p className="text-sm text-muted-foreground mb-4">Gradient Variant 1</p>
              <MagicNavigation variant="gradient-1" />
            </div>
            
            <div className="relative">
              <p className="text-sm text-muted-foreground mb-4">Gradient Variant 2</p>
              <MagicNavigation variant="gradient-2" />
            </div>
            
            <div className="relative">
              <p className="text-sm text-muted-foreground mb-4">Gradient Variant 3</p>
              <MagicNavigation variant="gradient-3" />
            </div>
            
            <div className="relative">
              <p className="text-sm text-muted-foreground mb-4">Gradient Variant 4</p>
              <MagicNavigation variant="gradient-4" />
            </div>
            
            <div className="relative">
              <p className="text-sm text-muted-foreground mb-4">Gradient Variant 5</p>
              <MagicNavigation variant="gradient-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;