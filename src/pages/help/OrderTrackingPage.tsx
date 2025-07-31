
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PackageSearch, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const OrderTrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!orderNumber || !email) {
      setError("Please enter both order number and email.");
      return;
    }
    
    setIsSearching(true);
    
    // In a real app, you would make an API call to track the order
    setTimeout(() => {
      setIsSearching(false);
      setError("No order found with the provided information. Please check your details and try again.");
    }, 1500);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Order Tracking</h1>
      
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <PackageSearch className="h-5 w-5 text-kelme-green" />
              <CardTitle>Track Your Order</CardTitle>
            </div>
            <CardDescription>Enter your order details to check the current status of your shipment</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <Input
                    id="orderNumber"
                    placeholder="e.g., KLM123456789"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="The email used for your order"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <CardFooter className="flex justify-end pt-6 px-0">
                <Button type="submit" disabled={isSearching}>
                  {isSearching ? "Searching..." : "Track Order"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-12 space-y-6">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Where can I find my order number?</h3>
              <p className="text-gray-600">Your order number was sent to you in your order confirmation email. It starts with "KLM" followed by a series of numbers.</p>
            </div>
            
            <div>
              <h3 className="font-medium">How long does shipping take?</h3>
              <p className="text-gray-600">Delivery times vary based on your location and chosen shipping method. Standard shipping typically takes 3-7 business days, while express shipping takes 1-3 business days.</p>
            </div>
            
            <div>
              <h3 className="font-medium">My tracking information isn't updating. What should I do?</h3>
              <p className="text-gray-600">Tracking information may take 24-48 hours to update after your order has shipped. If you don't see any updates after this time, please <a href="/help/contact-us" className="text-kelme-green underline">contact our customer service team</a>.</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-medium mb-2">Need further assistance?</h3>
            <p className="text-gray-600 mb-4">Our customer service team is ready to help you with any questions about your order.</p>
            <a href="/help/contact-us" className="inline-flex items-center px-4 py-2 bg-kelme-green text-white rounded hover:bg-kelme-green/90">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
