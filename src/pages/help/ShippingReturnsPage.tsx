
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, RotateCcw, Globe, CreditCard } from "lucide-react";

const ShippingReturnsPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Shipping & Returns</h1>
      
      <Tabs defaultValue="shipping" className="max-w-4xl mx-auto">
        <TabsList className="w-full border-b rounded-none justify-start mb-4">
          <TabsTrigger value="shipping" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">Shipping Information</TabsTrigger>
          <TabsTrigger value="returns" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">Returns & Exchanges</TabsTrigger>
        </TabsList>
        
        <TabsContent value="shipping">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="h-5 w-5 text-kelme-green" />
                    <h3 className="text-lg font-medium">Domestic Shipping</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Standard Shipping (3-7 business days)</span>
                      <span className="font-medium">$5.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Express Shipping (1-3 business days)</span>
                      <span className="font-medium">$12.99</span>
                    </li>
                    <li className="flex justify-between text-kelme-green font-medium">
                      <span>Free Standard Shipping</span>
                      <span>On orders over $75</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-5 w-5 text-kelme-green" />
                    <h3 className="text-lg font-medium">International Shipping</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Standard International (7-14 business days)</span>
                      <span className="font-medium">$19.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Express International (3-5 business days)</span>
                      <span className="font-medium">$39.99</span>
                    </li>
                    <li className="flex justify-between text-kelme-green font-medium">
                      <span>Free Standard International</span>
                      <span>On orders over $150</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Shipping Policy</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>Orders are typically processed within 1-2 business days. Once your order has shipped, you'll receive a shipping confirmation email with tracking information.</p>
              
              <h3 className="font-medium text-black mt-6">Estimated Delivery Times:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Domestic (Standard): 3-7 business days after shipping</li>
                <li>Domestic (Express): 1-3 business days after shipping</li>
                <li>International (Standard): 7-14 business days after shipping</li>
                <li>International (Express): 3-5 business days after shipping</li>
              </ul>
              
              <p className="mt-4">Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</p>
              
              <h3 className="font-medium text-black mt-6">Package Tracking</h3>
              <p>You can track your package using the tracking number provided in your shipping confirmation email or by visiting our <a href="/help/order-tracking" className="text-kelme-green underline">Order Tracking</a> page.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="returns">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <RotateCcw className="h-5 w-5 text-kelme-green" />
                    <h3 className="text-lg font-medium">Return Policy</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <span className="font-medium">Return Window:</span> 30 days from delivery
                    </li>
                    <li>
                      <span className="font-medium">Condition:</span> Unworn with original tags/packaging
                    </li>
                    <li>
                      <span className="font-medium">Return Shipping Fee:</span> $5.99 (free for defective items)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="h-5 w-5 text-kelme-green" />
                    <h3 className="text-lg font-medium">Refund Process</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <span className="font-medium">Processing Time:</span> 3-5 business days after receipt
                    </li>
                    <li>
                      <span className="font-medium">Refund Methods:</span> Original payment method
                    </li>
                    <li>
                      <span className="font-medium">Store Credit:</span> Available (valid for 1 year)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Return Process</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>We want you to be completely satisfied with your purchase. If you're not, you can return most items within 30 days of delivery.</p>
              
              <h3 className="font-medium text-black mt-6">How to Return an Item:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <span className="font-medium">Initiate a Return:</span> 
                  <p>Log into your account and select the order containing the item(s) you wish to return. Click on "Return Items" and follow the instructions.</p>
                </li>
                <li>
                  <span className="font-medium">Print Return Label:</span>
                  <p>Print the return shipping label provided. If you don't have a printer, you can contact customer service for alternatives.</p>
                </li>
                <li>
                  <span className="font-medium">Pack Your Return:</span>
                  <p>Place the item(s) in the original packaging if possible, or secure alternative packaging. Include the return form inside.</p>
                </li>
                <li>
                  <span className="font-medium">Ship Your Return:</span>
                  <p>Drop off your package at the specified carrier location. Keep the tracking number for reference.</p>
                </li>
              </ol>
              
              <h3 className="font-medium text-black mt-6">Non-Returnable Items</h3>
              <p>The following items cannot be returned:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Items marked as "Final Sale"</li>
                <li>Personalized or custom-made products</li>
                <li>Intimate apparel and swimwear (for hygiene reasons)</li>
                <li>Items showing signs of wear or use</li>
              </ul>
              
              <h3 className="font-medium text-black mt-6">Exchanges</h3>
              <p>We recommend returning the unwanted item for a refund and placing a new order for the desired item to ensure availability. If you need assistance with an exchange, please <a href="/help/contact-us" className="text-kelme-green underline">contact our customer service team</a>.</p>
              
              <h3 className="font-medium text-black mt-6">Defective Items</h3>
              <p>If you receive a defective item, please contact our customer service team within 7 days of delivery. We'll arrange a free return and provide a replacement or refund.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShippingReturnsPage;
