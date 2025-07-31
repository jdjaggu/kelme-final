
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/demoProducts";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const getGradientClass = () => {
    const gradients = [
      "bg-gradient-to-br from-emerald-400 to-cyan-400",
      "bg-gradient-to-br from-orange-400 to-pink-400",
      "bg-gradient-to-br from-purple-400 to-indigo-400",
      "bg-gradient-to-br from-yellow-400 to-orange-400",
      "bg-gradient-to-br from-pink-400 to-red-400"
    ];
    const index = typeof product.id === 'string' ? product.id.length : product.id;
    return gradients[index % gradients.length];
  };

  return (
    <div className="relative w-full h-80 perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <div className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg ${getGradientClass()}`}>
          <div className="relative w-full h-full p-6 flex flex-col items-center justify-center text-white">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg mb-4 shadow-xl transform transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-lg font-bold text-center mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm opacity-90">({product.reviewCount})</span>
            </div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1">
              {product.isNew && (
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  New
                </Badge>
              )}
              {product.isBestSeller && (
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Best Seller
                </Badge>
              )}
              {product.isOnSale && (
                <Badge variant="destructive" className="bg-red-500/80 text-white">
                  Sale
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-lg bg-white border">
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-bold text-lg mb-3 hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </Link>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-2xl">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground mb-2 block">Available Colors:</span>
                  <div className="flex gap-1 flex-wrap">
                    {product.colors.slice(0, 6).map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-200 shadow-sm"
                        style={{
                          backgroundColor: color.toLowerCase().includes('black') ? '#000000' :
                                         color.toLowerCase().includes('white') ? '#ffffff' :
                                         color.toLowerCase().includes('red') ? '#ef4444' :
                                         color.toLowerCase().includes('blue') ? '#3b82f6' :
                                         color.toLowerCase().includes('yellow') ? '#eab308' :
                                         color.toLowerCase().includes('pink') ? '#ec4899' :
                                         color.toLowerCase().includes('grey') || color.toLowerCase().includes('gray') ? '#6b7280' :
                                         color.toLowerCase().includes('navy') ? '#1e3a8a' :
                                         color.toLowerCase().includes('orange') ? '#f97316' :
                                         '#9ca3af'
                        }}
                        title={color}
                      />
                    ))}
                    {product.colors.length > 6 && (
                      <span className="text-xs text-muted-foreground flex items-center">+{product.colors.length - 6}</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Link to={`/product/${product.id}`} className="block">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
