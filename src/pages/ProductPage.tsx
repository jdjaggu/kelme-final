
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart, CheckCircle, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Product Type
interface Product {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: { name: string; code: string }[];
  specifications: { [key: string]: string };
  reviews: {
    id: number;
    user: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

// Related Product Type
interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  image: string;
}

const ProductPage = () => {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Sample data - in a real app, this would come from an API
  const getProductData = (id: number): Product | null => {
    const products: Record<number, Product> = {
      1: {
        id: 1,
        name: "Speed Striker Soccer Cleats",
        price: 119.99,
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
        ],
        category: "men",
        subcategory: "footwear",
        description: "Dominate the field with our Speed Striker Soccer Cleats. Designed for agility and control, these cleats feature a lightweight construction and superior traction for maximum performance during intense matches.",
        features: [
          "Lightweight synthetic upper for enhanced ball feel",
          "Aggressive stud configuration for reliable traction",
          "Cushioned insole for superior comfort",
          "Reinforced heel area for added stability",
          "Breathable mesh lining for climate control"
        ],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
          { name: "Black/Red", code: "#000000" },
          { name: "Blue/White", code: "#0047AB" },
          { name: "Green/Black", code: "#008000" }
        ],
        specifications: {
          "Material": "Synthetic leather, rubber",
          "Weight": "8.5 oz",
          "Closure": "Lace-up",
          "Sole": "Firm ground (FG)",
          "Water Resistant": "Yes"
        },
        reviews: [
          {
            id: 1,
            user: "SoccerPro42",
            rating: 5,
            date: "2023-05-15",
            comment: "These are the best cleats I've ever worn! Great grip on the field and very comfortable for 90+ minutes of play."
          },
          {
            id: 2,
            user: "FootballFan21",
            rating: 4,
            date: "2023-04-22",
            comment: "Very good cleats. They fit true to size and provide excellent support. Only giving 4 stars because they took some time to break in."
          },
          {
            id: 3,
            user: "CoachMike",
            rating: 5,
            date: "2023-03-10",
            comment: "I recommend these to all my players. They're durable, comfortable, and help with ball control. Worth every penny!"
          }
        ]
      },
      2: {
        id: 2,
        name: "Pro Training Jersey",
        price: 59.99,
        sale_price: 49.99,
        images: [
          "https://images.unsplash.com/photo-1593164842264-854604db2260",
          "https://images.unsplash.com/photo-1626323107927-8c694e584378",
          "https://images.unsplash.com/photo-1529374814797-1dfbefdd2885",
          "https://images.unsplash.com/photo-1566677914817-56426959ae9c"
        ],
        category: "men",
        subcategory: "clothing",
        description: "Elevate your training with our Pro Training Jersey. Featuring moisture-wicking technology and a breathable design, this jersey keeps you cool and dry during the most intense workouts and matches.",
        features: [
          "DryCool technology wicks away sweat",
          "Breathable mesh panels for ventilation",
          "Lightweight fabric for unrestricted movement",
          "UV protection (UPF 30+)",
          "Tagless design for irritation-free comfort"
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: [
          { name: "Blue", code: "#0047AB" },
          { name: "Red", code: "#FF0000" },
          { name: "Black", code: "#000000" }
        ],
        specifications: {
          "Material": "100% polyester",
          "Fit": "Athletic",
          "Care": "Machine washable",
          "Technology": "DryCool moisture management"
        },
        reviews: [
          {
            id: 1,
            user: "TeamCaptain",
            rating: 5,
            date: "2023-06-05",
            comment: "Great quality jersey! The fabric is lightweight but durable, and it keeps me dry during intense games."
          },
          {
            id: 2,
            user: "FitnessEnthusiast",
            rating: 4,
            date: "2023-05-12",
            comment: "Good value for money. The fit is perfect and the material feels premium."
          }
        ]
      },
    };
    
    return products[id] || null;
  };

  // Related products (in a real app, this would be fetched based on the current product)
  const relatedProducts: RelatedProduct[] = [
    {
      id: 3,
      name: "Women's Athletic Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1554735490-5974588cbc4f"
    },
    {
      id: 9,
      name: "Men's Training Pants",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
    },
    {
      id: 7,
      name: "Elite Soccer Ball",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1614632537197-38392a5cbb0e"
    },
    {
      id: 10,
      name: "Women's Running Shorts",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1574352644369-4c071c27dd6b"
    }
  ];

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const fetchedProduct = getProductData(productId);
      setProduct(fetchedProduct);
      if (fetchedProduct) {
        setSelectedSize(fetchedProduct.sizes[0]);
        setSelectedColor(fetchedProduct.colors[0].code);
      }
      setLoading(false);
    }, 500);
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "You need to select size and color before adding to cart.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to cart!",
      description: `${product?.name} (${quantity}) has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist!",
      description: `${product?.name} has been added to your wishlist.`,
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Calculate average rating
  const averageRating = product?.reviews.reduce((acc, review) => acc + review.rating, 0) || 0;
  const avgRating = product?.reviews.length ? averageRating / product.reviews.length : 0;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="h-16 w-16 border-4 border-t-kelme-green border-l-kelme-green rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center min-h-[50vh] flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you are looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to={`/category/${product.category}`} className="text-gray-500 hover:text-kelme-green capitalize">
          {product.category}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to={`/category/${product.category}/${product.subcategory}`} className="text-gray-500 hover:text-kelme-green capitalize">
          {product.subcategory}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>
      
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div>
          {/* Main Image */}
          <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-kelme-green' : 'border-transparent'}`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`}
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Price */}
          <div className="mb-4">
            {product.sale_price ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-kelme-red mr-3">${product.sale_price}</span>
                <span className="text-lg text-gray-500 line-through">${product.price}</span>
                <span className="ml-3 px-2 py-1 bg-kelme-red text-white text-xs font-bold rounded">
                  SAVE ${(product.price - product.sale_price).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">${product.price}</span>
            )}
          </div>
          
          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${star <= Math.round(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              {avgRating.toFixed(1)} ({product.reviews.length} reviews)
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color: {product.colors.find(c => c.code === selectedColor)?.name}
            </label>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color.code}
                  onClick={() => setSelectedColor(color.code)}
                  className={`w-8 h-8 rounded-full focus:outline-none ${selectedColor === color.code ? 'ring-2 ring-kelme-green ring-offset-2' : ''}`}
                  style={{ backgroundColor: color.code }}
                  title={color.name}
                  aria-label={`Select color: ${color.name}`}
                />
              ))}
            </div>
          </div>
          
          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <button className="text-sm text-kelme-green hover:underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 border ${selectedSize === size ? 'border-kelme-green bg-kelme-green/10 text-kelme-green' : 'border-gray-300 text-gray-700 hover:border-kelme-green/50'} rounded-md text-center`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 bg-gray-100 rounded-l-md flex items-center justify-center hover:bg-gray-200"
              >
                -
              </button>
              <div className="w-16 h-10 border-y border-gray-300 flex items-center justify-center">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 bg-gray-100 rounded-r-md flex items-center justify-center hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col space-y-3">
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-kelme-green hover:bg-kelme-green/90 h-12"
              size="lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleAddToWishlist}
              className="w-full border-gray-300 h-12"
              size="lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex items-center mb-2">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Free shipping for orders over $100</span>
            </div>
            <div className="flex items-center mb-2">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Easy 30-day returns</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
          </TabsList>
          
          {/* Details Tab */}
          <TabsContent value="details" className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            
            <p className="text-gray-700 mb-4">
              Take your performance to the next level with the {product.name}. Designed with athletes in mind, 
              this product offers superior comfort, durability, and style for both practice and game day.
            </p>
            
            <p className="text-gray-700">
              Kelme uses innovative technology and premium materials to ensure you get the most out of your 
              equipment. Whether you're a professional athlete or just starting out, our products are built to 
              help you excel.
            </p>
          </TabsContent>
          
          {/* Specifications Tab */}
          <TabsContent value="specs" className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="py-3 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Reviews Tab */}
          <TabsContent value="reviews" className="pt-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold mr-2">{avgRating.toFixed(1)}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= Math.round(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">Based on {product.reviews.length} reviews</p>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">Write a Review</Button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                {product.reviews.map((review) => (
                  <div key={review.id} className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{review.user}</h4>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {relatedProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
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
                  </Link>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 bg-white/80" />
          <CarouselNext className="-right-4 bg-white/80" />
        </Carousel>
      </div>
      
      {/* Recently Viewed - This would normally be populated from browser history/local storage */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[relatedProducts[0], relatedProducts[1]].map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
