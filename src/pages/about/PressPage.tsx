
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Download, Calendar, ArrowRight } from "lucide-react";

const PressPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter press releases based on search query
  const filteredPressReleases = pressReleases.filter(
    release => release.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
               release.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Filter news coverage based on search query
  const filteredNewsCoverage = newsCoverage.filter(
    news => news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            news.source.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Press & Media</h1>
      
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Media Resources</h2>
            <p className="text-gray-700 mb-4">
              Welcome to the Kelme press room. Here, you'll find our latest press releases, news coverage, 
              media resources, and contact information for our media relations team.
            </p>
            <p className="text-gray-700 mb-6">
              For press inquiries, please contact our media relations team at <a href="mailto:press@kelme.com" className="text-kelme-green">press@kelme.com</a> or 
              call +34 123 456 789.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="flex items-center gap-2">
                <Download className="h-5 w-5" /> Download Press Kit
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-80 bg-gray-300">
            <img 
              src="https://via.placeholder.com/600x480?text=Press+Conference" 
              alt="Kelme Press Conference" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Latest Updates</h2>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search updates..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Tabs defaultValue="press-releases" className="max-w-4xl mx-auto">
          <TabsList className="w-full border-b rounded-none justify-start mb-6">
            <TabsTrigger value="press-releases" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
              Press Releases
            </TabsTrigger>
            <TabsTrigger value="news-coverage" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
              News Coverage
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="press-releases">
            <div className="space-y-6">
              {filteredPressReleases.length > 0 ? (
                filteredPressReleases.map((release, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{release.date}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{release.title}</h3>
                      <p className="text-gray-700">{release.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="flex items-center gap-1">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No press releases found for "{searchQuery}"</p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSearchQuery("")}
                    className="mt-2"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="news-coverage">
            <div className="space-y-6">
              {filteredNewsCoverage.length > 0 ? (
                filteredNewsCoverage.map((news, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="font-medium">{news.source}</span>
                        <span>•</span>
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{news.title}</h3>
                      <p className="text-gray-700">{news.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="flex items-center gap-1">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No news articles found for "{searchQuery}"</p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSearchQuery("")}
                    className="mt-2"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Brand Assets</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img 
                  src="https://via.placeholder.com/150x150?text=Logos" 
                  alt="Kelme Logos" 
                  className="max-w-full max-h-full"
                />
              </div>
              <h3 className="font-medium mb-2">Logos</h3>
              <p className="text-sm text-gray-600">Download our official logos in various formats.</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="sm">Download</Button>
            </CardFooter>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img 
                  src="https://via.placeholder.com/150x150?text=Images" 
                  alt="Product Images" 
                  className="max-w-full max-h-full"
                />
              </div>
              <h3 className="font-medium mb-2">Product Images</h3>
              <p className="text-sm text-gray-600">High-resolution images of our latest products.</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="sm">Download</Button>
            </CardFooter>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img 
                  src="https://via.placeholder.com/150x150?text=Factsheet" 
                  alt="Company Factsheet" 
                  className="max-w-full max-h-full"
                />
              </div>
              <h3 className="font-medium mb-2">Company Factsheet</h3>
              <p className="text-sm text-gray-600">Key facts and figures about Kelme Sports.</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="sm">Download</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section>
        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Our Media Team</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="mb-6">
              For interview requests, additional information, or any other press inquiries, 
              please don't hesitate to reach out to our media relations team.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Media Relations</h3>
                <p className="text-gray-700">press@kelme.com</p>
                <p className="text-gray-700">+34 123 456 789</p>
              </div>
              <div>
                <h3 className="font-medium">Sponsorship Inquiries</h3>
                <p className="text-gray-700">sponsorship@kelme.com</p>
                <p className="text-gray-700">+34 123 456 790</p>
              </div>
            </div>
            <div className="mt-8">
              <Button size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample press releases data
const pressReleases = [
  {
    title: "Kelme Announces New Sustainable Soccer Boot Collection",
    date: "May 15, 2023",
    excerpt: "Kelme Sports is proud to announce the launch of our new eco-friendly soccer boot collection, made from 80% recycled materials without compromising performance or durability."
  },
  {
    title: "Kelme Signs Multi-Year Sponsorship Deal with FC Valencia",
    date: "April 3, 2023",
    excerpt: "Kelme has entered into a five-year partnership with FC Valencia, becoming the official kit supplier for the Spanish La Liga team starting from the 2023/2024 season."
  },
  {
    title: "Kelme Expands Retail Presence in North America with 15 New Stores",
    date: "February 20, 2023",
    excerpt: "As part of our global expansion strategy, Kelme will open 15 new retail locations across major cities in the United States and Canada by the end of 2023."
  },
  {
    title: "Kelme Foundation Launches Youth Sports Initiative in Underserved Communities",
    date: "January 12, 2023",
    excerpt: "The Kelme Foundation is investing $2 million in a new program designed to bring sports facilities and equipment to underserved communities around the world."
  }
];

// Sample news coverage data
const newsCoverage = [
  {
    title: "How Kelme is Revolutionizing Sustainable Sportswear Manufacturing",
    source: "Sports Business Journal",
    date: "May 20, 2023",
    excerpt: "The Spanish sportswear brand is setting new industry standards with its innovative approach to sustainable manufacturing processes."
  },
  {
    title: "Kelme's Revival: How the Iconic Brand is Making a Comeback in the U.S. Market",
    source: "Forbes",
    date: "April 10, 2023",
    excerpt: "After years of limited presence, the Spanish sports brand is gaining traction among American consumers with its distinctive designs and grassroots marketing approach."
  },
  {
    title: "Inside Kelme's New Performance Research Lab in Barcelona",
    source: "Runner's World",
    date: "March 5, 2023",
    excerpt: "We got an exclusive look at Kelme's state-of-the-art research facility where they're developing the next generation of performance footwear."
  },
  {
    title: "Kelme's Collaboration with Top Street Artists Creates Buzz in Fashion Circles",
    source: "Hypebeast",
    date: "February 15, 2023",
    excerpt: "The limited edition collection featuring designs by renowned street artists has sold out within hours of release, showcasing the brand's growing cultural relevance."
  }
];

export default PressPage;
