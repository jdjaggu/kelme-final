
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Trash2, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  image: string;
  category: string;
  subcategory: string;
  availability: "In Stock" | "Out of Stock";
}

const WishlistPage = () => {
  const { toast } = useToast();
  
  // Sample wishlist data (in a real app, this would be from an API or state management)
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Speed Striker Soccer Cleats",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "men",
      subcategory: "footwear",
      availability: "In Stock"
    },
    {
      id: 7,
      name: "Elite Soccer Ball",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1614632537197-38392a5cbb0e",
      category: "accessories",
      subcategory: "equipment",
      availability: "In Stock"
    },
    {
      id: 3,
      name: "Women's Athletic Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1554735490-5974588cbc4f",
      category: "women",
      subcategory: "footwear",
      availability: "Out of Stock"
    },
  ]);
  
  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    });
  };
  
  const addToCart = (item: WishlistItem) => {
    // In a real app, you would add the item to the cart here
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  const clearWishlist = () => {
    setWishlistItems([]);
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-16 max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartIcon className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Add items to your wishlist to save them for later.</p>
          <Link to="/">
            <Button className="bg-kelme-green hover:bg-kelme-green/90">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex justify-end mb-6">
            <Button 
              variant="outline" 
              size="sm"
              onClick={clearWishlist}
              className="border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              Clear Wishlist
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative aspect-square">
                  <Link to={`/product/${item.id}`}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  {item.availability === "Out of Stock" && (
                    <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link to={`/product/${item.id}`} className="hover:text-kelme-green transition-colors">
                        <h3 className="font-medium mb-1">{item.name}</h3>
                      </Link>
                      <p className="text-sm text-gray-500 capitalize">
                        {item.category} / {item.subcategory}
                      </p>
                      <div className="mt-2">
                        {item.sale_price ? (
                          <div className="flex items-center">
                            <span className="text-kelme-red font-medium mr-2">${item.sale_price}</span>
                            <span className="text-gray-500 line-through text-sm">${item.price}</span>
                          </div>
                        ) : (
                          <span className="font-medium">${item.price}</span>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-400 hover:text-red-500"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <Button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-kelme-green hover:bg-kelme-green/90"
                      disabled={item.availability === "Out of Stock"}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Heart Icon
const HeartIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
};

export default WishlistPage;
