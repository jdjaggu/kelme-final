
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Printer, Upload, Type, Image as ImageIcon } from "lucide-react";

const CustomPrintingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    logo: null,
    printType: "",
    color: "",
    size: "",
    quantity: "1",
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Custom printing order:", formData);
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Custom Printing</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Printer className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Custom Printing Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personalize your KELME gear with custom names, numbers, logos, and designs. 
            Perfect for teams, events, or personal expression.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Combined Printing Options */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Name, Number & Logo Printing
                </CardTitle>
                <CardDescription>
                  Add custom names, numbers, and logos to jerseys and apparel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter name to print"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="number">Number</Label>
                    <Input
                      id="number"
                      placeholder="Enter number to print"
                      value={formData.number}
                      onChange={(e) => handleInputChange("number", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Logo & Design Upload</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mt-2">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drag and drop your logo or design here
                      </p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        Supported formats: PNG, JPG, SVG, PDF
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Printing Details</CardTitle>
                <CardDescription>
                  Specify your printing preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="printType">Print Type</Label>
                  <Select onValueChange={(value) => handleInputChange("printType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select print type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="heat-transfer">Heat Transfer Vinyl</SelectItem>
                      <SelectItem value="screen-print">Screen Printing</SelectItem>
                      <SelectItem value="embroidery">Embroidery</SelectItem>
                      <SelectItem value="sublimation">Sublimation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="color">Print Color</Label>
                  <Select onValueChange={(value) => handleInputChange("color", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="white">White</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="yellow">Yellow</SelectItem>
                      <SelectItem value="custom">Custom Color</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="size">Print Size</Label>
                  <Select onValueChange={(value) => handleInputChange("size", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (6" x 2")</SelectItem>
                      <SelectItem value="medium">Medium (8" x 3")</SelectItem>
                      <SelectItem value="large">Large (10" x 4")</SelectItem>
                      <SelectItem value="custom">Custom Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requirements or notes..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <form onSubmit={handleSubmit}>
              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                Get Quote
              </Button>
            </form>
          </div>
        </div>

        {/* Printing Guidelines */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Printing Guidelines</h2>
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/7b01d4c9-512e-40ec-a5ff-2b6ef9b67ce5.png" 
                alt="KELME Printing Guidelines" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Logo Placement Guidelines</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Main Logo:</span> 50cm² maximum area</p>
                    <p><span className="font-medium">Secondary Logo:</span> 40cm² maximum area</p>
                    <p><span className="font-medium">Minor Sponsor Logo:</span> As specified in design</p>
                    <p><span className="font-medium">Major Sponsor Logo:</span> 300cm² maximum area</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Dimension Standards</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Number Height:</span> 20cm-25cm (Back), 10cm (Shorts)</p>
                    <p><span className="font-medium">Name Height:</span> 5cm-7.5cm</p>
                    <p><span className="font-medium">Side Margins:</span> 10cm minimum from edges</p>
                    <p><span className="font-medium">Top Margin:</span> 4cm from collar</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <span className="font-medium">Important:</span> All measurements must comply with official regulations. 
                  Custom designs outside these guidelines may be rejected or require modification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-8">Our Custom Printing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/custom-printing/name-number" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Type className="h-8 w-8 text-black mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 group-hover:text-black">Name & Number</h3>
                  <p className="text-sm text-gray-600">Professional jersey personalization</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/custom-printing/logo" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <ImageIcon className="h-8 w-8 text-black mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 group-hover:text-black">Logo Printing</h3>
                  <p className="text-sm text-gray-600">Custom logos and designs</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/custom-printing/team-jerseys" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Printer className="h-8 w-8 text-black mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 group-hover:text-black">Team Jerseys</h3>
                  <p className="text-sm text-gray-600">Complete team uniform solutions</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/custom-printing/bulk-orders" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Upload className="h-8 w-8 text-black mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 group-hover:text-black">Bulk Orders</h3>
                  <p className="text-sm text-gray-600">Special pricing for large quantities</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPrintingPage;
