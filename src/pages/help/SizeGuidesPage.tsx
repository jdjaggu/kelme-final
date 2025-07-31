
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const SizeGuidesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Size Guides</h1>
      
      <p className="max-w-3xl mx-auto mb-8 text-gray-700">
        Finding the right size is essential for performance and comfort. Use our detailed size charts below to find your perfect fit. 
        For the best results, take your measurements wearing lightweight clothing and stand naturally.
      </p>
      
      <Tabs defaultValue="footwear" className="max-w-4xl mx-auto">
        <TabsList className="w-full border-b rounded-none justify-start mb-4 overflow-x-auto flex-nowrap">
          <TabsTrigger value="footwear" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
            Footwear
          </TabsTrigger>
          <TabsTrigger value="clothing-men" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
            Men's Clothing
          </TabsTrigger>
          <TabsTrigger value="clothing-women" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
            Women's Clothing
          </TabsTrigger>
          <TabsTrigger value="clothing-kids" className="data-[state=active]:border-b-2 data-[state=active]:border-kelme-green rounded-none">
            Kids' Clothing
          </TabsTrigger>
        </TabsList>
        
        {/* Footwear Size Guide */}
        <TabsContent value="footwear">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Footwear Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">EU Size</th>
                        <th className="border px-4 py-2 text-left">US Men</th>
                        <th className="border px-4 py-2 text-left">US Women</th>
                        <th className="border px-4 py-2 text-left">UK</th>
                        <th className="border px-4 py-2 text-left">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">36</td>
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">5.5</td>
                        <td className="border px-4 py-2">3.5</td>
                        <td className="border px-4 py-2">22.5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">37</td>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">6.5</td>
                        <td className="border px-4 py-2">4.5</td>
                        <td className="border px-4 py-2">23.5</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">38</td>
                        <td className="border px-4 py-2">6</td>
                        <td className="border px-4 py-2">7.5</td>
                        <td className="border px-4 py-2">5.5</td>
                        <td className="border px-4 py-2">24.5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">39</td>
                        <td className="border px-4 py-2">7</td>
                        <td className="border px-4 py-2">8.5</td>
                        <td className="border px-4 py-2">6.5</td>
                        <td className="border px-4 py-2">25.5</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">40</td>
                        <td className="border px-4 py-2">7.5</td>
                        <td className="border px-4 py-2">9</td>
                        <td className="border px-4 py-2">7</td>
                        <td className="border px-4 py-2">26</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">41</td>
                        <td className="border px-4 py-2">8</td>
                        <td className="border px-4 py-2">9.5</td>
                        <td className="border px-4 py-2">7.5</td>
                        <td className="border px-4 py-2">26.5</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">42</td>
                        <td className="border px-4 py-2">9</td>
                        <td className="border px-4 py-2">10.5</td>
                        <td className="border px-4 py-2">8.5</td>
                        <td className="border px-4 py-2">27.5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">43</td>
                        <td className="border px-4 py-2">10</td>
                        <td className="border px-4 py-2">11.5</td>
                        <td className="border px-4 py-2">9.5</td>
                        <td className="border px-4 py-2">28.5</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">44</td>
                        <td className="border px-4 py-2">11</td>
                        <td className="border px-4 py-2">12.5</td>
                        <td className="border px-4 py-2">10.5</td>
                        <td className="border px-4 py-2">29.5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">45</td>
                        <td className="border px-4 py-2">12</td>
                        <td className="border px-4 py-2">13.5</td>
                        <td className="border px-4 py-2">11.5</td>
                        <td className="border px-4 py-2">30.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-medium mt-8 mb-4">How to Measure Your Foot</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Stand on a piece of paper with your heel against a wall.</li>
                  <li>Mark the longest part of your foot (usually your big toe).</li>
                  <li>Measure the distance from the wall to the mark in centimeters.</li>
                  <li>Use this measurement to find your size in the chart above.</li>
                  <li>If you're between sizes, we recommend going up to the larger size.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Men's Clothing Size Guide */}
        <TabsContent value="clothing-men">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Men's Clothing Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Size</th>
                        <th className="border px-4 py-2 text-left">Chest (cm)</th>
                        <th className="border px-4 py-2 text-left">Waist (cm)</th>
                        <th className="border px-4 py-2 text-left">Hips (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">XS</td>
                        <td className="border px-4 py-2">84-89</td>
                        <td className="border px-4 py-2">70-75</td>
                        <td className="border px-4 py-2">86-91</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">S</td>
                        <td className="border px-4 py-2">90-95</td>
                        <td className="border px-4 py-2">76-81</td>
                        <td className="border px-4 py-2">92-97</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">M</td>
                        <td className="border px-4 py-2">96-101</td>
                        <td className="border px-4 py-2">82-87</td>
                        <td className="border px-4 py-2">98-103</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">L</td>
                        <td className="border px-4 py-2">102-107</td>
                        <td className="border px-4 py-2">88-93</td>
                        <td className="border px-4 py-2">104-109</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">XL</td>
                        <td className="border px-4 py-2">108-113</td>
                        <td className="border px-4 py-2">94-99</td>
                        <td className="border px-4 py-2">110-115</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">XXL</td>
                        <td className="border px-4 py-2">114-119</td>
                        <td className="border px-4 py-2">100-105</td>
                        <td className="border px-4 py-2">116-121</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3 className="font-medium mb-4">How to Measure</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</li>
                  <li><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</li>
                  <li><strong>Hips:</strong> Measure around the fullest part of your hips, keeping the tape horizontal.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Women's Clothing Size Guide */}
        <TabsContent value="clothing-women">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Women's Clothing Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Size</th>
                        <th className="border px-4 py-2 text-left">Bust (cm)</th>
                        <th className="border px-4 py-2 text-left">Waist (cm)</th>
                        <th className="border px-4 py-2 text-left">Hips (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">XS</td>
                        <td className="border px-4 py-2">80-85</td>
                        <td className="border px-4 py-2">60-65</td>
                        <td className="border px-4 py-2">86-91</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">S</td>
                        <td className="border px-4 py-2">86-91</td>
                        <td className="border px-4 py-2">66-71</td>
                        <td className="border px-4 py-2">92-97</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">M</td>
                        <td className="border px-4 py-2">92-97</td>
                        <td className="border px-4 py-2">72-77</td>
                        <td className="border px-4 py-2">98-103</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">L</td>
                        <td className="border px-4 py-2">98-103</td>
                        <td className="border px-4 py-2">78-83</td>
                        <td className="border px-4 py-2">104-109</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">XL</td>
                        <td className="border px-4 py-2">104-109</td>
                        <td className="border px-4 py-2">84-89</td>
                        <td className="border px-4 py-2">110-115</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">XXL</td>
                        <td className="border px-4 py-2">110-115</td>
                        <td className="border px-4 py-2">90-95</td>
                        <td className="border px-4 py-2">116-121</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3 className="font-medium mb-4">How to Measure</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Bust:</strong> Measure around the fullest part of your bust, keeping the tape horizontal.</li>
                  <li><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</li>
                  <li><strong>Hips:</strong> Measure around the fullest part of your hips, keeping the tape horizontal.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Kids Clothing Size Guide */}
        <TabsContent value="clothing-kids">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Kids' Clothing Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Size</th>
                        <th className="border px-4 py-2 text-left">Age (Years)</th>
                        <th className="border px-4 py-2 text-left">Height (cm)</th>
                        <th className="border px-4 py-2 text-left">Chest (cm)</th>
                        <th className="border px-4 py-2 text-left">Waist (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">104</td>
                        <td className="border px-4 py-2">58</td>
                        <td className="border px-4 py-2">54</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">6</td>
                        <td className="border px-4 py-2">6</td>
                        <td className="border px-4 py-2">116</td>
                        <td className="border px-4 py-2">62</td>
                        <td className="border px-4 py-2">56</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">8</td>
                        <td className="border px-4 py-2">8</td>
                        <td className="border px-4 py-2">128</td>
                        <td className="border px-4 py-2">66</td>
                        <td className="border px-4 py-2">58</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">10</td>
                        <td className="border px-4 py-2">10</td>
                        <td className="border px-4 py-2">140</td>
                        <td className="border px-4 py-2">70</td>
                        <td className="border px-4 py-2">60</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">12</td>
                        <td className="border px-4 py-2">12</td>
                        <td className="border px-4 py-2">152</td>
                        <td className="border px-4 py-2">74</td>
                        <td className="border px-4 py-2">62</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">14</td>
                        <td className="border px-4 py-2">14</td>
                        <td className="border px-4 py-2">164</td>
                        <td className="border px-4 py-2">78</td>
                        <td className="border px-4 py-2">64</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3 className="font-medium mb-4">How to Measure Children</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Height:</strong> Measure from the top of the head to the floor, with the child standing straight.</li>
                  <li><strong>Chest:</strong> Measure around the fullest part of the chest, keeping the tape horizontal.</li>
                  <li><strong>Waist:</strong> Measure around the natural waistline, keeping the tape comfortably loose.</li>
                </ul>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-md">
                  <h3 className="font-medium mb-2">Tip for Parents</h3>
                  <p>Kids grow quickly! If your child is between sizes, we recommend sizing up for longer wear.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SizeGuidesPage;
