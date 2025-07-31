
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutKelmePage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">About Kelme</h1>
      
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Heritage</h2>
            <p className="text-gray-700">
              Founded in 1977 in Elche, Spain, Kelme has grown from a local sports brand to an internationally 
              recognized name in sportswear. With over 45 years of experience, we've built our reputation on quality, 
              innovation, and a deep understanding of athletes' needs.
            </p>
            <p className="text-gray-700">
              Our iconic K logo and vibrant colors have been worn by champions across various sports, 
              from football to futsal, running to tennis. We're proud of our Spanish heritage and continue 
              to infuse Mediterranean passion and style into everything we create.
            </p>
            <Button className="mt-4">Explore Our History</Button>
          </div>
          <div className="rounded-lg overflow-hidden h-80 bg-gray-300">
            <img 
              src="https://via.placeholder.com/600x480?text=Kelme+Heritage+Image" 
              alt="Kelme Heritage" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">Quality</h3>
              <p className="text-gray-700">
                We're committed to excellence in everything we create. From material selection to final 
                production, each product undergoes rigorous testing to ensure it meets our high standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">Innovation</h3>
              <p className="text-gray-700">
                We continuously push boundaries in sports technology and design. Our R&D team works closely 
                with athletes to develop products that enhance performance and comfort.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">Passion</h3>
              <p className="text-gray-700">
                Our love for sports drives everything we do. We celebrate the spirit of competition, the joy of 
                movement, and the satisfaction of pushing your limits.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Kelme Today</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Today, Kelme operates in over 40 countries across five continents, continuing our mission to provide 
            athletes with high-quality, innovative sportswear. We sponsor numerous professional teams, athletes, 
            and sporting events around the world, reinforcing our commitment to sports at all levels.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-kelme-green">45+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kelme-green">40+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kelme-green">100+</div>
              <div className="text-sm text-gray-600">Professional Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kelme-green">1000+</div>
              <div className="text-sm text-gray-600">Retail Locations</div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-300 mb-4">
                <img 
                  src={`https://via.placeholder.com/200x200?text=Executive+${i}`}
                  alt={`Executive ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Executive Name</h3>
              <p className="text-sm text-gray-600">Position Title</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutKelmePage;
