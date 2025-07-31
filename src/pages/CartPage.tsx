
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, Trash2, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface CartItem {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

const CartPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Sample cart data (in a real app, this would be managed by a state management library like Redux)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Speed Striker Soccer Cleats",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      color: "Black/Red",
      size: "10",
      quantity: 1
    },
    {
      id: 2,
      name: "Pro Training Jersey",
      price: 59.99,
      sale_price: 49.99,
      image: "https://images.unsplash.com/photo-1593164842264-854604db2260",
      color: "Blue",
      size: "M",
      quantity: 2
    }
  ]);
  
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.sale_price || item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const shipping = subtotal > 100 ? 0 : 10.99;
  const tax = subtotal * 0.06; // 6% tax
  const total = subtotal + shipping + tax - discount;

  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  // Apply promo code
  const applyPromoCode = () => {
    // Simple promo code logic (in a real app, this would validate against backend)
    if (promoCode.toUpperCase() === "KELME20") {
      const discountAmount = subtotal * 0.2; // 20% off
      setDiscount(discountAmount);
      toast({
        title: "Promo code applied!",
        description: "You received 20% off your order.",
      });
    } else {
      setDiscount(0);
      toast({
        title: "Invalid promo code",
        description: "The promo code you entered is not valid.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16 max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBagIcon className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/">
            <Button className="bg-kelme-green hover:bg-kelme-green/90">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {/* Continue Shopping Link */}
            <Link to="/" className="flex items-center text-kelme-green hover:underline mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Continue shopping
            </Link>
            
            {/* Desktop Cart Table */}
            {!isMobile && (
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 text-gray-600 font-medium">Product</th>
                      <th className="text-center py-4 text-gray-600 font-medium">Quantity</th>
                      <th className="text-right py-4 text-gray-600 font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4">
                          <div className="flex items-center">
                            <Link to={`/product/${item.id}`} className="flex-shrink-0 w-24 h-24">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </Link>
                            <div className="ml-4">
                              <Link to={`/product/${item.id}`} className="font-medium hover:text-kelme-green">
                                {item.name}
                              </Link>
                              <div className="text-sm text-gray-500 mt-1">
                                <p>Size: {item.size}</p>
                                <p>Color: {item.color}</p>
                              </div>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="flex items-center text-red-500 text-sm mt-2 hover:underline"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-100 rounded-l flex items-center justify-center"
                            >
                              -
                            </button>
                            <div className="w-12 h-8 border-y border-gray-300 flex items-center justify-center">
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-100 rounded-r flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-right">
                          {item.sale_price ? (
                            <div>
                              <span className="text-kelme-red font-medium">
                                ${(item.sale_price * item.quantity).toFixed(2)}
                              </span>
                              <div className="text-sm text-gray-500 line-through">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          ) : (
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {/* Mobile Cart Items */}
            {isMobile && (
              <div className="md:hidden space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <Link to={`/product/${item.id}`} className="flex-shrink-0 w-24 h-24">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <Link to={`/product/${item.id}`} className="font-medium hover:text-kelme-green">
                              {item.name}
                            </Link>
                            <button onClick={() => removeItem(item.id)} aria-label="Remove item">
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </button>
                          </div>
                          
                          <div className="text-sm text-gray-500 mt-1">
                            <p>Size: {item.size}, Color: {item.color}</p>
                          </div>
                          
                          <div className="flex justify-between items-center mt-3">
                            {/* Quantity selector */}
                            <div className="flex items-center">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 bg-gray-100 rounded-l flex items-center justify-center"
                              >
                                -
                              </button>
                              <div className="w-8 h-7 border-y border-gray-300 flex items-center justify-center text-sm">
                                {item.quantity}
                              </div>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 bg-gray-100 rounded-r flex items-center justify-center"
                              >
                                +
                              </button>
                            </div>
                            
                            {/* Price */}
                            {item.sale_price ? (
                              <div className="text-right">
                                <span className="text-kelme-red font-medium">
                                  ${(item.sale_price * item.quantity).toFixed(2)}
                                </span>
                                <div className="text-xs text-gray-500 line-through">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </div>
                              </div>
                            ) : (
                              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 bg-gray-50 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-kelme-green">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-kelme-green">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Free shipping notification */}
              {shipping === 0 && (
                <div className="bg-green-50 border border-green-100 rounded p-3 mb-6 flex items-start">
                  <CheckCircle className="h-5 w-5 text-kelme-green mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-green-700">
                    You've qualified for free shipping!
                  </p>
                </div>
              )}
              
              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex">
                  <Input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="rounded-r-none"
                  />
                  <Button
                    onClick={applyPromoCode}
                    className="rounded-l-none bg-kelme-green hover:bg-kelme-green/90"
                  >
                    Apply
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Try "KELME20" for 20% off</p>
              </div>
              
              {/* Checkout Button */}
              <Button 
                onClick={() => navigate("/checkout")} 
                className="w-full bg-kelme-green hover:bg-kelme-green/90"
                size="lg"
              >
                Proceed to Checkout
              </Button>
              
              {/* Secure payment info */}
              <div className="mt-4 text-center text-xs text-gray-500">
                <p>Secure checkout</p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <span>We accept:</span>
                  <img src="https://via.placeholder.com/120x20?text=Payment+Methods" alt="Payment methods" className="h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Shopping Bag Icon for empty cart state
const ShoppingBagIcon = ({ className }: { className?: string }) => {
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
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
};

export default CartPage;
