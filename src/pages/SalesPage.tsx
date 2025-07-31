import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Tag } from "lucide-react";
import ProductCard from "@/components/ui/custom/ProductCard";
import { getSaleProducts, demoProducts } from "@/data/demoProducts";

const SalesPage = () => {
  const saleProducts = getSaleProducts();
  const thirtyPercentOff = demoProducts.filter(product => product.isOnSale).slice(0, 8);
  const fiftyPercentOff = demoProducts.filter(product => product.isOnSale).slice(8, 16);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Tag className="h-8 w-8 mr-2" />
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white text-red-600">
                MEGA SALE
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              INCREDIBLE
              <span className="block text-red-200">SAVINGS</span>
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Don't miss out on our biggest sale of the year! Premium athletic gear 
              at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sale Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Up to 30% Off */}
            <Link to="/sales/30-percent" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-400 to-orange-600 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Badge className="bg-white text-orange-600 text-lg px-4 py-2 mb-4">
                      UP TO 30% OFF
                    </Badge>
                    <h3 className="text-3xl font-bold mb-2">Selected Items</h3>
                    <p className="text-orange-100">Premium gear at great prices</p>
                    <Button variant="secondary" className="mt-4 bg-white text-orange-600 hover:bg-orange-50">
                      Shop 30% Off
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Up to 50% Off */}
            <Link to="/sales/50-percent" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-red-500 to-red-700 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Badge className="bg-white text-red-600 text-lg px-4 py-2 mb-4">
                      UP TO 50% OFF
                    </Badge>
                    <h3 className="text-3xl font-bold mb-2">Clearance Sale</h3>
                    <p className="text-red-100">Limited time offers</p>
                    <Button variant="secondary" className="mt-4 bg-white text-red-600 hover:bg-red-50">
                      Shop 50% Off
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sale Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Sale Items</h2>
            <Button variant="outline" className="group">
              View All Sale Items
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Up to 30% Off Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-600 text-white text-lg px-6 py-2 mb-4">
              UP TO 30% OFF
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Selected Premium Items</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality athletic gear with moderate discounts. Perfect for upgrading 
              your sports wardrobe without breaking the bank.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thirtyPercentOff.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Up to 50% Off Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-600 text-white text-lg px-6 py-2 mb-4">
              UP TO 50% OFF
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Clearance Specials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Limited time clearance items with maximum savings. Stock is limited, 
              so grab these deals while they last!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fiftyPercentOff.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Terms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Sale Terms & Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Sale Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sale prices valid while supplies last</li>
                  <li>• Limited quantities available</li>
                  <li>• Cannot be combined with other offers</li>
                  <li>• Excludes gift cards and previous purchases</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Return Policy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sale items are final sale</li>
                  <li>• No returns or exchanges on clearance items</li>
                  <li>• 14-day return window for regular sale items</li>
                  <li>• Items must be in original condition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;