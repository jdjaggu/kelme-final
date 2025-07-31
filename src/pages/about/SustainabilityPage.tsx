
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Droplet, Wind, Globe, Recycle } from "lucide-react";

const SustainabilityPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Sustainability</h1>
      
      <section className="max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-700 mb-8">
          At Kelme, we believe that the future of sports and our planet go hand in hand. 
          Our commitment to sustainability is integrated into every aspect of our business, 
          from product development to manufacturing processes and packaging.
        </p>
        
        <div className="rounded-lg overflow-hidden h-80 mb-8">
          <img 
            src="https://via.placeholder.com/1200x600?text=Sustainability+Initiative" 
            alt="Sustainability Initiative" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Sustainability Goals</h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Sustainable Materials</h3>
              <span className="text-sm text-gray-500">65% Complete</span>
            </div>
            <Progress value={65} className="h-2 bg-gray-200" />
            <p className="mt-2 text-sm text-gray-600">
              By 2025, we aim to use 80% sustainable materials in all our products.
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Carbon Neutrality</h3>
              <span className="text-sm text-gray-500">45% Complete</span>
            </div>
            <Progress value={45} className="h-2 bg-gray-200" />
            <p className="mt-2 text-sm text-gray-600">
              We're working towards carbon neutrality in our operations by 2030.
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Water Conservation</h3>
              <span className="text-sm text-gray-500">70% Complete</span>
            </div>
            <Progress value={70} className="h-2 bg-gray-200" />
            <p className="mt-2 text-sm text-gray-600">
              Reducing water usage in our production processes by 50% compared to 2015 levels.
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Zero Waste</h3>
              <span className="text-sm text-gray-500">40% Complete</span>
            </div>
            <Progress value={40} className="h-2 bg-gray-200" />
            <p className="mt-2 text-sm text-gray-600">
              Targeting zero waste to landfill from our owned and operated facilities by 2027.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Initiatives</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium">Eco-Friendly Materials</h3>
              </div>
              <p className="text-gray-700">
                We're increasing our use of recycled polyester, organic cotton, and other sustainable 
                materials across our product lines. Our goal is to minimize environmental impact 
                without compromising on performance or durability.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Droplet className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium">Water Stewardship</h3>
              </div>
              <p className="text-gray-700">
                Our manufacturing facilities implement water-saving technologies and processes. 
                We're partnering with suppliers who share our commitment to responsible water usage 
                and treatment throughout the production cycle.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Wind className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium">Climate Action</h3>
              </div>
              <p className="text-gray-700">
                We're reducing our carbon footprint by optimizing logistics, using renewable energy in 
                our facilities, and offsetting emissions through verified carbon offset projects around the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Recycling Program</h2>
              <p className="text-gray-700 mb-4">
                Our "Kelme Recycle" program allows customers to return used Kelme products for recycling. 
                We break down the materials to create new products or donate items in good condition to 
                sports programs in underserved communities.
              </p>
              <div className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-kelme-green" />
                <span className="font-medium">100,000+ items recycled since 2020</span>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden h-64 bg-gray-300">
              <img 
                src="https://via.placeholder.com/600x400?text=Recycling+Program" 
                alt="Recycling Program" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Global Partnerships</h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <p className="text-center text-gray-700">
            We collaborate with environmental organizations, industry groups, and communities around the world 
            to maximize our positive impact:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Globe className="h-10 w-10 text-gray-400" />
                </div>
                <p className="text-sm font-medium">Partner Organization {i}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="italic text-gray-600">
              "Together with our partners, we're working towards a more sustainable future for sports and our planet."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
