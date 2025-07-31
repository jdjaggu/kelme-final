
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Briefcase, Users, Star } from "lucide-react";

const CareersPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Careers at Kelme</h1>
      
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Join Our Team</h2>
            <p className="text-gray-700 mb-4">
              At Kelme, we're driven by passion for sports and innovation. We're looking for talented individuals 
              who share our values and want to make an impact in the sporting world.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you're just starting your career or you're an experienced professional, we offer exciting 
              opportunities across various departments and locations worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">View Open Positions</Button>
              <Button variant="outline" size="lg">Our Benefits</Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-80 bg-gray-300">
            <img 
              src="https://via.placeholder.com/600x480?text=Team+Working" 
              alt="Team at Kelme" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Work With Us</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-kelme-green/10 p-2 rounded-full">
                  <Users className="h-6 w-6 text-kelme-green" />
                </div>
                <h3 className="font-medium">Great Culture</h3>
              </div>
              <p className="text-gray-700">
                Experience our dynamic, collaborative, and inclusive workplace where your ideas are valued.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-kelme-green/10 p-2 rounded-full">
                  <Star className="h-6 w-6 text-kelme-green" />
                </div>
                <h3 className="font-medium">Growth Opportunities</h3>
              </div>
              <p className="text-gray-700">
                Develop your skills through training programs and clear career advancement paths.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-kelme-green/10 p-2 rounded-full">
                  <Briefcase className="h-6 w-6 text-kelme-green" />
                </div>
                <h3 className="font-medium">Work-Life Balance</h3>
              </div>
              <p className="text-gray-700">
                Enjoy flexible working arrangements and policies that support your wellbeing.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-kelme-green/10 p-2 rounded-full">
                  <MapPin className="h-6 w-6 text-kelme-green" />
                </div>
                <h3 className="font-medium">Global Presence</h3>
              </div>
              <p className="text-gray-700">
                Opportunities to work across our international offices and gain global experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Open Positions</h2>
        
        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="w-full border-b rounded-none justify-start mb-6 overflow-x-auto flex-nowrap">
            <TabsTrigger value="all" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
              All Positions
            </TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
              Marketing
            </TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
              Design
            </TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
              Technology
            </TabsTrigger>
            <TabsTrigger value="retail" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
              Retail
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {jobListings.map((job, index) => (
                <JobListing key={index} job={job} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing">
            <div className="space-y-4">
              {jobListings
                .filter(job => job.department === "Marketing")
                .map((job, index) => (
                  <JobListing key={index} job={job} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <div className="space-y-4">
              {jobListings
                .filter(job => job.department === "Design")
                .map((job, index) => (
                  <JobListing key={index} job={job} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="tech">
            <div className="space-y-4">
              {jobListings
                .filter(job => job.department === "Technology")
                .map((job, index) => (
                  <JobListing key={index} job={job} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="retail">
            <div className="space-y-4">
              {jobListings
                .filter(job => job.department === "Retail")
                .map((job, index) => (
                  <JobListing key={index} job={job} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      <section className="mb-16">
        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Hiring Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-kelme-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="font-medium mb-2">Application</h3>
              <p className="text-sm text-gray-600">Submit your CV and cover letter online</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-kelme-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="font-medium mb-2">Initial Screening</h3>
              <p className="text-sm text-gray-600">Phone or video interview with HR</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-kelme-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="font-medium mb-2">In-depth Interview</h3>
              <p className="text-sm text-gray-600">Meet with the hiring manager and team</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-kelme-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="font-medium mb-2">Offer</h3>
              <p className="text-sm text-gray-600">Welcome to the Kelme family!</p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Employee Testimonials</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 mb-3">
                  <img 
                    src="https://via.placeholder.com/150x150?text=Employee+1" 
                    alt="Employee 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">Maria Rodriguez</h3>
                <p className="text-sm text-gray-600">Product Designer, 3 years</p>
              </div>
              <p className="text-gray-700 italic">
                "Working at Kelme has been an incredible journey. I've grown professionally and personally, 
                and I love the collaborative environment where innovation is encouraged."
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 mb-3">
                  <img 
                    src="https://via.placeholder.com/150x150?text=Employee+2" 
                    alt="Employee 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">David Chen</h3>
                <p className="text-sm text-gray-600">Marketing Manager, 5 years</p>
              </div>
              <p className="text-gray-700 italic">
                "The best thing about Kelme is the opportunity to work with passionate people from around 
                the world. We truly live our values of teamwork and excellence every day."
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 mb-3">
                  <img 
                    src="https://via.placeholder.com/150x150?text=Employee+3" 
                    alt="Employee 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Supply Chain Analyst, 2 years</p>
              </div>
              <p className="text-gray-700 italic">
                "Kelme has provided me with amazing growth opportunities. I started as an intern and 
                have been supported in my professional development every step of the way."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

// Job Listing Component
interface JobProps {
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
  }
}

const JobListing = ({ job }: JobProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Briefcase className="h-4 w-4 text-gray-500" />
            <span>{job.department}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{job.location}</span>
          </div>
          <div>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">{job.type}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
};

// Sample job listings data
const jobListings = [
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Barcelona, Spain",
    type: "Full-time"
  },
  {
    title: "E-commerce Specialist",
    department: "Marketing",
    location: "London, UK",
    type: "Full-time"
  },
  {
    title: "Frontend Developer",
    department: "Technology",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Store Manager",
    department: "Retail",
    location: "New York, USA",
    type: "Full-time"
  },
  {
    title: "Social Media Coordinator",
    department: "Marketing",
    location: "Madrid, Spain",
    type: "Contract"
  },
  {
    title: "UX Researcher",
    department: "Design",
    location: "Remote",
    type: "Part-time"
  }
];

export default CareersPage;
