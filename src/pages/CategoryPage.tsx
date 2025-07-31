import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Filter, Heart, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Product {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  image: string;
  category: string;
  subcategory: string;
  itemType?: string;
  brand?: string;
  colors: string[];
  sizes: string[];
  availability: 'in-stock' | 'out-of-stock' | 'limited';
}

const CategoryPage = () => {
  const { category, subcategory, itemType } = useParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState({
    sort: "featured",
    priceRange: [0, 200],
    brands: [] as string[],
    colors: [] as string[],
    sizes: [] as string[],
    categories: [] as string[],
    inStockOnly: false,
  });
  
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  // Sample product data with enhanced filter options
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Speed Striker Soccer Cleats",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "men",
      subcategory: "footwear",
      itemType: "soccer-boots",
      brand: "Kelme",
      colors: ["black", "red"],
      sizes: ["8", "9", "10", "11"],
      availability: 'in-stock'
    },
    {
      id: 2,
      name: "Pro Training Jersey",
      price: 59.99,
      sale_price: 49.99,
      image: "https://images.unsplash.com/photo-1593164842264-854604db2260",
      category: "men",
      subcategory: "clothing",
      itemType: "jerseys",
      brand: "Kelme",
      colors: ["blue"],
      sizes: ["S", "M", "L", "XL"],
      availability: 'in-stock'
    },
    {
      id: 3,
      name: "Women's Athletic Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1554735490-5974588cbc4f",
      category: "women",
      subcategory: "footwear",
      itemType: "running-shoes",
      brand: "Kelme Sport",
      colors: ["pink", "white"],
      sizes: ["6", "7", "8", "9"],
      availability: 'limited'
    },
    {
      id: 4,
      name: "Kids' Training Shorts",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1565693413579-8a48e11dcf26",
      category: "kids",
      subcategory: "clothing",
      itemType: "shorts",
      brand: "Kelme Junior",
      colors: ["blue"],
      sizes: ["XS", "S", "M", "L"],
      availability: 'in-stock'
    },
    {
      id: 5,
      name: "Performance Sports Bag",
      price: 49.99,
      sale_price: 39.99,
      image: "https://images.unsplash.com/photo-1575844264771-892081089af5",
      category: "accessories",
      subcategory: "bags",
      brand: "Kelme",
      colors: ["black"],
      sizes: ["One Size"],
      availability: 'in-stock'
    },
    {
      id: 6,
      name: "Women's Training Tee",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127",
      category: "women",
      subcategory: "clothing",
      itemType: "t-shirts",
      brand: "Kelme Sport",
      colors: ["white"],
      sizes: ["XS", "S", "M", "L", "XL"],
      availability: 'in-stock'
    },
    {
      id: 7,
      name: "Elite Soccer Ball",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1614632537197-38392a5cbb0e",
      category: "accessories",
      subcategory: "balls",
      brand: "Kelme Pro",
      colors: ["white", "black"],
      sizes: ["Size 5"],
      availability: 'in-stock'
    },
    {
      id: 8,
      name: "Kids' Soccer Jersey",
      price: 44.99,
      sale_price: 34.99,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      category: "kids",
      subcategory: "clothing",
      itemType: "jerseys",
      brand: "Kelme Junior",
      colors: ["red"],
      sizes: ["4-6Y", "6-8Y", "8-10Y", "10-12Y"],
      availability: 'in-stock'
    },
    {
      id: 9,
      name: "Men's Training Pants",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      category: "men",
      subcategory: "clothing",
      itemType: "pants",
      brand: "Kelme",
      colors: ["black"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      availability: 'in-stock'
    },
    {
      id: 10,
      name: "Women's Running Shorts",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1574352644369-4c071c27dd6b",
      category: "women",
      subcategory: "clothing",
      itemType: "shorts",
      brand: "Kelme Sport",
      colors: ["black", "blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      availability: 'in-stock'
    },
    {
      id: 11,
      name: "Kids' Athletic Shoes",
      price: 69.99,
      sale_price: 59.99,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      category: "kids",
      subcategory: "footwear",
      itemType: "running-shoes",
      brand: "Kelme Junior",
      colors: ["blue", "orange"],
      sizes: ["1", "2", "3", "4", "5", "6"],
      availability: 'in-stock'
    },
    {
      id: 12,
      name: "Sports Water Bottle",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1588867702719-08eae92bcc15",
      category: "accessories",
      subcategory: "water-bottles",
      brand: "Kelme",
      colors: ["blue"],
      sizes: ["500ml"],
      availability: 'in-stock'
    },
    {
      id: 13,
      name: "Professional Goalkeeper Gloves",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1610473299662-4474aa2d21ba",
      category: "accessories",
      subcategory: "gloves",
      brand: "Kelme Pro",
      colors: ["black", "yellow"],
      sizes: ["7", "8", "9", "10", "11"],
      availability: 'in-stock'
    },
    {
      id: 14,
      name: "Women's Athletic Gloves",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1584417036477-131eace935bc",
      category: "women",
      subcategory: "accessories",
      itemType: "gloves",
      brand: "Kelme Sport",
      colors: ["pink", "gray"],
      sizes: ["XS", "S", "M", "L"],
      availability: 'limited'
    },
    {
      id: 15,
      name: "Men's Court Shoes",
      price: 79.99,
      sale_price: 69.99,
      image: "https://images.unsplash.com/photo-1607958392513-45662e9bad3f",
      category: "men",
      subcategory: "footwear",
      itemType: "court-shoes",
      brand: "Kelme",
      colors: ["white", "blue"],
      sizes: ["8", "9", "10", "11", "12"],
      availability: 'in-stock'
    },
    {
      id: 16,
      name: "Women's Training Shoes",
      price: 84.99,
      image: "https://images.unsplash.com/photo-1529062815681-c5733e388aa0",
      category: "women",
      subcategory: "footwear",
      itemType: "training-shoes",
      brand: "Kelme Sport",
      colors: ["gray", "purple"],
      sizes: ["6", "7", "8", "9", "10"],
      availability: 'in-stock'
    },
    // New casual products
    {
      id: 17,
      name: "Men's Lifestyle Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      category: "men",
      subcategory: "casual",
      itemType: "lifestyle-shoes",
      brand: "Kelme Urban",
      colors: ["white", "gray"],
      sizes: ["8", "9", "10", "11", "12"],
      availability: 'in-stock'
    },
    {
      id: 18,
      name: "Women's Everyday Canvas Shoes",
      price: 64.99,
      sale_price: 54.99,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      category: "women",
      subcategory: "casual",
      itemType: "lifestyle-shoes",
      brand: "Kelme Urban",
      colors: ["beige", "white"],
      sizes: ["6", "7", "8", "9", "10"],
      availability: 'in-stock'
    },
    {
      id: 19,
      name: "Men's Casual T-Shirt",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      category: "men",
      subcategory: "casual",
      itemType: "everyday-wear",
      brand: "Kelme Urban",
      colors: ["black", "gray"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      availability: 'in-stock'
    },
    {
      id: 20,
      name: "Women's Casual Sweatshirt",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1572807947449-49db5171dea1",
      category: "women",
      subcategory: "casual",
      itemType: "everyday-wear",
      brand: "Kelme Urban",
      colors: ["pink", "gray"],
      sizes: ["XS", "S", "M", "L", "XL"],
      availability: 'in-stock'
    },
    {
      id: 21,
      name: "Kids' Casual Sneakers",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1556048219-bb6978360b84",
      category: "kids",
      subcategory: "casual",
      itemType: "lifestyle-shoes",
      brand: "Kelme Junior",
      colors: ["blue", "white"],
      sizes: ["1", "2", "3", "4", "5", "6"],
      availability: 'in-stock'
    },
    {
      id: 22,
      name: "Men's Casual Cap",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      category: "men",
      subcategory: "casual",
      itemType: "caps",
      brand: "Kelme Urban",
      colors: ["black"],
      sizes: ["One Size"],
      availability: 'in-stock'
    },
    {
      id: 23,
      name: "Women's Fashion Sunglasses",
      price: 39.99,
      sale_price: 29.99,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      category: "women",
      subcategory: "casual",
      itemType: "fashion-accessories",
      brand: "Kelme Urban",
      colors: ["black"],
      sizes: ["One Size"],
      availability: 'in-stock'
    },
    {
      id: 24,
      name: "Kids' School Backpack",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      category: "kids",
      subcategory: "casual",
      itemType: "school-accessories",
      brand: "Kelme Junior",
      colors: ["blue", "red"],
      sizes: ["One Size"],
      availability: 'in-stock'
    },
    {
      id: 25,
      name: "Men's Casual Shorts",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1562256623-5b586f6a3d9a",
      category: "men",
      subcategory: "clothing",
      itemType: "casual-wear",
      brand: "Kelme Urban",
      colors: ["beige"],
      sizes: ["S", "M", "L", "XL"],
      availability: 'in-stock'
    },
    {
      id: 26,
      name: "Women's Casual Pants",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
      category: "women",
      subcategory: "clothing",
      itemType: "casual-wear",
      brand: "Kelme Urban",
      colors: ["black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      availability: 'in-stock'
    },
    {
      id: 27,
      name: "Casual Wallet",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
      category: "accessories",
      subcategory: "casual-accessories",
      brand: "Kelme Urban",
      colors: ["brown", "black"],
      sizes: ["One Size"],
      availability: 'in-stock'
    }
  ];

  // Filter products based on category, subcategory, and itemType
  useEffect(() => {
    let filtered = allProducts;
    
    // Filter by category
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Filter by subcategory if provided
    if (subcategory) {
      filtered = filtered.filter(product => product.subcategory === subcategory);
    }
    
    // Filter by itemType if provided
    if (itemType) {
      filtered = filtered.filter(product => product.itemType === itemType);
    }
    
    setFilteredProducts(filtered);
  }, [category, subcategory, itemType]);
  
  const categoryTitle = () => {
    if (itemType) {
      return itemType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    if (subcategory) {
      return `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} ${category ? `- ${category.charAt(0).toUpperCase() + category.slice(1)}` : ''}`;
    }
    return category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products';
  };
  
  const handleSortChange = (value: string) => {
    setFilter(prev => ({ ...prev, sort: value }));
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilter(prev => ({ ...prev, priceRange: value }));
  };
  
  const toggleBrandFilter = (brand: string) => {
    setFilter(prev => {
      const brands = prev.brands.includes(brand) 
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand];
      return { ...prev, brands };
    });
  };
  
  const toggleColorFilter = (color: string) => {
    setFilter(prev => {
      const colors = prev.colors.includes(color) 
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors };
    });
  };
  
  const toggleSizeFilter = (size: string) => {
    setFilter(prev => {
      const sizes = prev.sizes.includes(size) 
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes };
    });
  };
  
  const handleInStockToggle = (checked: boolean) => {
    setFilter(prev => ({ ...prev, inStockOnly: checked }));
  };
  
  const toggleCategoryFilter = (categoryName: string) => {
    setFilter(prev => {
      const categories = prev.categories.includes(categoryName) 
        ? prev.categories.filter(c => c !== categoryName)
        : [...prev.categories, categoryName];
      return { ...prev, categories };
    });
  };
  
  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  // Available brands for filtering
  const availableBrands = [...new Set(filteredProducts.map(product => product.brand))].filter(Boolean) as string[];
  
  // Available categories for filtering
  const availableCategories = [...new Set(filteredProducts.map(product => product.category))];
  
  // Available colors for filtering
  const availableColors = [...new Set(filteredProducts.flatMap(product => product.colors))];
  
  // Available sizes (would come from an API in a real app)
  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', '6', '7', '8', '9', '10', '11'];
  
  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <Accordion type="single" collapsible defaultValue="category">
        <AccordionItem value="category">
          <AccordionTrigger className="font-medium py-1 hover:no-underline">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {availableCategories.map(cat => (
                <div className="flex items-center space-x-2" key={cat}>
                  <Checkbox 
                    id={`category-${cat}`}
                    checked={filter.categories.includes(cat)}
                    onCheckedChange={() => toggleCategoryFilter(cat)}
                  />
                  <label
                    htmlFor={`category-${cat}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                  >
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator />
      
      {/* Price Range Filter */}
      <div>
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 200]}
            max={200}
            step={10}
            onValueChange={handlePriceChange}
            className="my-4"
          />
          <div className="flex justify-between text-sm">
            <span>${filter.priceRange[0]}</span>
            <span>${filter.priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Brand Filter */}
      <Accordion type="single" collapsible defaultValue="brands">
        <AccordionItem value="brands">
          <AccordionTrigger className="font-medium py-1 hover:no-underline">
            Brand
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {availableBrands.map(brand => (
                <div className="flex items-center space-x-2" key={brand}>
                  <Checkbox 
                    id={`brand-${brand}`}
                    checked={filter.brands.includes(brand)}
                    onCheckedChange={() => toggleBrandFilter(brand)}
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator />
      
      {/* Size Filter */}
      <Accordion type="single" collapsible defaultValue="sizes">
        <AccordionItem value="sizes">
          <AccordionTrigger className="font-medium py-1 hover:no-underline">
            Size
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleSizeFilter(size)}
                  className={cn(
                    "min-w-[36px] h-9 rounded border border-gray-300 flex items-center justify-center text-sm",
                    filter.sizes.includes(size) 
                      ? "bg-kelme-green text-white border-kelme-green" 
                      : "bg-white hover:border-kelme-green"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator />
      
      {/* Color Filter */}
      <Accordion type="single" collapsible defaultValue="colors">
        <AccordionItem value="colors">
          <AccordionTrigger className="font-medium py-1 hover:no-underline">
            Color
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {availableColors.map(color => (
                <button
                  key={color}
                  onClick={() => toggleColorFilter(color)}
                  className={cn(
                    "w-6 h-6 rounded-full border",
                    filter.colors.includes(color) && "ring-2 ring-kelme-green ring-offset-2",
                  )}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator />
      
      {/* Availability Filter */}
      <div className="space-y-3">
        <h3 className="font-medium">Availability</h3>
        <div className="flex items-center space-x-2">
          <Switch
            id="in-stock-only"
            checked={filter.inStockOnly}
            onCheckedChange={handleInStockToggle}
          />
          <label
            htmlFor="in-stock-only"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            In Stock Only
          </label>
        </div>
      </div>
      
      <Separator />
      
      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => setFilter({
          sort: "featured",
          priceRange: [0, 200],
          brands: [],
          colors: [],
          sizes: [],
          categories: [],
          inStockOnly: false,
        })}
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        {category && (
          <>
            <Link to={`/category/${category}`} className="text-gray-500 hover:text-kelme-green capitalize">
              {category}
            </Link>
            {subcategory && (
              <>
                <span className="mx-2 text-gray-400">/</span>
                <Link to={`/category/${category}/${subcategory}`} className="text-gray-500 hover:text-kelme-green capitalize">
                  {subcategory}
                </Link>
                {itemType && (
                  <>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-700 capitalize">
                      {itemType.split('-').join(' ')}
                    </span>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6">{categoryTitle()}</h1>
      
      {/* Desktop - Grid layout with sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar - Desktop */}
        {!isMobile && (
          <div className="hidden md:block">
            <div className="sticky top-24">
              <FilterPanel />
            </div>
          </div>
        )}
        
        {/* Products Grid */}
        <div className="md:col-span-3">
          {/* Sort and Filter Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              {/* Mobile filter button */}
              {isMobile && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="overflow-y-auto">
                    <SheetHeader className="mb-4">
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>
                        Refine your product selection
                      </SheetDescription>
                    </SheetHeader>
                    <FilterPanel />
                  </SheetContent>
                </Sheet>
              )}
              
              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
            </div>
            
            {/* Sort dropdown */}
            <Select value={filter.sort} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[160px] h-9">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  
                  {/* Quick action buttons */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Sale tag */}
                  {product.sale_price && (
                    <div className="absolute top-2 left-2 bg-kelme-red text-white text-xs font-bold px-2 py-1 rounded">
                      SALE
                    </div>
                  )}
                </div>
                
                {/* Product details */}
                <CardContent className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium text-gray-800 mb-1 hover:text-kelme-green transition-colors truncate">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center">
                    {product.sale_price ? (
                      <>
                        <span className="text-kelme-red font-medium">${product.sale_price}</span>
                        <span className="text-gray-500 line-through ml-2">${product.price}</span>
                      </>
                    ) : (
                      <span className="font-medium">${product.price}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try changing your filters or check out our other categories.</p>
              <Link to="/">
                <Button variant="default">Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
