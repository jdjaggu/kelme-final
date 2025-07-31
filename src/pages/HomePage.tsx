
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Shield, RefreshCw } from "lucide-react";
import ProductCard from "@/components/ui/custom/ProductCard";
import { getFeaturedProducts, getNewArrivals, getBestSellers } from "@/data/demoProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals().slice(0, 4);
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative">
        <Carousel className="w-full" opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative">
                <img 
                  src="/lovable-uploads/ac0b4fce-3c21-421e-b4e6-a318e031c09a.png" 
                  alt="Nueva Colección AW '19 Kids" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <img 
                  src="/lovable-uploads/61de7ef7-70d1-49ae-8bfa-5d7886014525.png" 
                  alt="Hay un depredador en la pista - Kelme Skualo" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <img 
                  src="/lovable-uploads/119d19e8-3fd7-429b-af5d-a77369759717.png" 
                  alt="Football Players Collection" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/category/men" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="Men's Collection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Men's</h3>
                    <p className="text-sm opacity-90">Professional gear for peak performance</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/category/women" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="Women's Collection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Women's</h3>
                    <p className="text-sm opacity-90">Style meets performance</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/category/kids" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="Kids Collection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Kids</h3>
                    <p className="text-sm opacity-90">Young athletes, big dreams</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/new-arrivals">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link to="/best-sellers">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Printing Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Custom Printing Services</h2>
            <p className="text-lg mb-8 text-gray-300">
              Personalize your gear with custom names, numbers, logos, and designs. 
              Perfect for teams, events, or personal expression.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Name & Number</h3>
                <p className="text-sm text-gray-300">Professional jersey personalization</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Logo Printing</h3>
                <p className="text-sm text-gray-300">Custom logos and team badges</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Bulk Orders</h3>
                <p className="text-sm text-gray-300">Special pricing for teams</p>
              </div>
            </div>
            <Link to="/custom-printing">
              <Button className="bg-white text-black hover:bg-gray-100">
                Start Customizing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Supporters & Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Supporters & Sponsors</h2>
          <div className="overflow-hidden">
            <div className="animate-scroll flex space-x-12">
              <div className="flex space-x-12 items-center min-w-max">
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">ADIDAS</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">NIKE</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">PUMA</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">UMBRO</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">JOMA</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">MIZUNO</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">KAPPA</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">LOTTO</span>
                </div>
              </div>
              <div className="flex space-x-12 items-center min-w-max">
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">ADIDAS</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">NIKE</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">PUMA</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">UMBRO</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">JOMA</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">MIZUNO</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">KAPPA</span>
                </div>
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 font-bold">LOTTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
